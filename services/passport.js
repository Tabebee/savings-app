const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user)
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        // Callback function once google signin passed
        async (accessToken, refreshToken, profile, done) => {
            console.log('accessToken ', accessToken);
            console.log('refreshToken ', refreshToken);
            console.log('profile ', profile);
            console.log('profile2 ', profile._json);
            // Need to check to see if exists
            const existingUser = await User.findOne({
                googleId: profile.id
            });
                if (existingUser) {
                    // We have a record
                    done(null, existingUser);
                } else {
                    // We dont have a record
                    // Creates new instance of User. Does not save it yet!
                    const user = await new User({
                        googleId: profile.id,
                        firstName: profile._json.given_name,
                        lastName: profile._json.family_name,
                        photo: profile._json.picture,
                        email: profile._json.email,
                        isJessAllow: 0
                    }).save(); // This saves it to db
                    done(null, user);
                }
        }
    )
);
