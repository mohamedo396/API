import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: `GET subscription with id ${req.params.id}` }));
subscriptionRouter.post('/',authorize,createSubscription );
subscriptionRouter.put('/:id', (req, res) => res.send({ title: `PUT subscription with id ${req.params.id}` }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: `DELETE subscription with id ${req.params.id}` }));
subscriptionRouter.get('/user/:id', authorize,getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) => res.send({ title: ` cancel subscription with id ${req.params.id}` }));
subscriptionRouter.get("/upcoming-renwals", (req, res) => res.send({ title: 'get upcoming renwals' }));




export default subscriptionRouter;