const express = require('express');
const passport = require('passport');
const validatorHandler = require('./../middlewares/validator.handler');
const { postEmail, postNewPass } = require('./../schemas/auth.schema');
const AuthService = require('./../services/auth.service');

const router = express.Router();
const service = new AuthService();

router.post('/login', passport.authenticate('local', {session: false}),
async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery',
validatorHandler(postEmail, 'body'),
async (req, res, next) => {
    try {
      const { email } = req.body;
      const response = await service.setRecovery(email);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/change-password',
validatorHandler(postNewPass, 'body'),
async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const response = await service.changePassword(token, newPassword);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;
