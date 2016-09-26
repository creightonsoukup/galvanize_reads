var passport = require('passport')
var googleOAuth = require('passport-google-oauth').Strategy

passport.use(new googleOAuth({
  clientID: process.env.G_CLIENTID
  clientSecret: process.env.G_CLIENTSECRET
  callbackURL: process.env.G_CALLBACK
},
  function (accessToken, refreshToken, profile, done) {
  }
))
