import Controllers from "../../../controllers";
import {isAuth} from "../../../middlewares/index.middleware";
import {TravelValidator} from "../../../lib/validator/travel.validator";

export default (app)=>{
	app.put(`/user`, isAuth, Controllers.User.update)
	app.put(`/user/change-password`,isAuth, Controllers.User.changePassword)
	app.post('/user/travel', isAuth, TravelValidator.criteriaAdd, Controllers.User.travelCriteria)
	app.get('/user/travel/recommendation', isAuth, Controllers.User.travelRecommendation)
	app.get('/user/history', isAuth, Controllers.User.history)
	app.get('/user/history/:id', isAuth, Controllers.User.historyShow)
	// app.get('/user/history', Controllers.User.list)
	// app.post('/user/history', Controllers.User.create)
	// app.patch('/user/history/:id', Controllers.User.update)
	
	
	return app
}