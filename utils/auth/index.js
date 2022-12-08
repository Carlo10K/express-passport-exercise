const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy'); //aqui importariamos todas las estrategias de auth
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
