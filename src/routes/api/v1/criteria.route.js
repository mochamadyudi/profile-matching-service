import CriteriaController from "../../../controllers/criteria.controller";
import Controllers from "../../../controllers";
import {isAuth} from "../../../middlewares/index.middleware";

export default (app)=>{
	app.get('/criteria/user', isAuth, Controllers.Criteria.listUser)
	app.get('/criteria', Controllers.Criteria.list)
	app.post('/criteria', Controllers.Criteria.create)
	app.patch('/criteria/:id', Controllers.Criteria.update)
	
	
	return app
}