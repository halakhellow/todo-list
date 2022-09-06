const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const Users = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { provider } = profile;
      const providerId = `google-${profile.id}`;
      const name = profile.displayName;
      const firstname = profile.name.givenName;
      const lastname = profile.name.familyName;
      const email = profile.emails[0].value;
      const profilePicture = profile.photos[0].value;

      let user = await Users.findOne({ email });
      if (!user) {
        user = await Users.create({
          provider,
          providerId,
          name,
          firstname,
          lastname,
          email,
          profilePicture,
        });
      }
      done(null, user);
    }
  )
);
