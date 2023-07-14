import {isAuth} from "../../../middlewares/index.middleware";
import Controllers from "../../../controllers";
import {AuthValidator} from "../../../lib/validator";

export default (app)=> {
	app.post('/role', Controllers.Role.create)
	app.get('/role', Controllers.Role.list)
	app.put('/role/:id', Controllers.Role.update)
	app.delete('/role/:id', Controllers.Role.delete)
}