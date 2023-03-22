import { Router } from "express";
import ErictelController from "../controller/ErictelController.js";

const ErictelRoutes = Router();

ErictelRoutes.post('/', ErictelController.insertDataRick)
ErictelRoutes.post('/login', ErictelController.createUser)
ErictelRoutes.get('/rick', ErictelController.getDataRick)
ErictelRoutes.get('/', ErictelController.getDatatUser)
ErictelRoutes.put('/', ErictelController.updateDataRick)

export default ErictelRoutes;