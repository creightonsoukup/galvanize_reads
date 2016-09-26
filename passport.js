var passport = require('passport')
var googleOAuth = require('passport-google-oauth20').Strategy

passport.use(new googleOAuth({
  clientID: process.env.G_CLIENTID,
  clientSecret: process.env.G_CLIENTSECRET,
  callbackURL: process.env.G_CALLBACK
},
  function (accessToken, refreshToken, profile, done) {
    console.log(arguments)
    throw new Error("NOT INITIALIZED")
  }
))

passport.serializeUser(function (user) {
  console.log("SERIALIZE")
  throw new Error("NOT INITIALIZED")
})

passport.deserializeUser(function (id) {
  console.log("DESERIALIZE")
  throw new Error("NOT INITIALIZED")
})

module.exports = passport
