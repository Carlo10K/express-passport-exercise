const express = require('express');
const OrderService = require('../services/order.service');
const { checkRoles } = require('./../middlewares/auth.handler');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getOrderSchema,
  addItemSchema,
} = require('../schemas/order.schema');
const passport = require('passport');

const router = express.Router();
const service = new OrderService();

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','customer'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','customer'),
  async (req, res, next) => {
    try {
      const body = {
        userId: req.user.sub
      }
      const newOrder = await service.create(body);
      res.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-item',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','customer'),
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
