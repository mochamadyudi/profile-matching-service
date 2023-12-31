import Controllers from "../../../controllers";
import {isAuth} from "../../../middlewares/index.middleware";

export default (app)=> {
	app.get('/options/:id', Controllers.Options.show)
	app.post('/options/:opt_name', Controllers.Options.create)
}