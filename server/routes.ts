import * as express from 'express';
import { connect } from './database'
connect();
// import CatCtrl from './controllers/cat';
import {getUsers, createUser, getUser, updateUser} from './controllers/user';
import {login} from './controllers/login';

export default function setRoutes(app) {

  const router = express.Router();

  // const catCtrl = new CatCtrl();
  // const userCtrl = new UserCtrl();

  // Cats
  // router.route('/cats').get(catCtrl.getAll);
  // router.route('/cats/count').get(catCtrl.count);
  // router.route('/cat').post(catCtrl.insert);
  // router.route('/cat/:id').get(catCtrl.get);
  // router.route('/cat/:id').put(catCtrl.update);
  // router.route('/cat/:id').delete(catCtrl.delete);

  // Users
  router.route('/login').post(login);
  router.route('/users').get(getUsers);
  // router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(createUser);
  // router.route('/user/:id').get(userCtrl.get);
  // router.route('/user/:id').put(userCtrl.update);
  // router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
