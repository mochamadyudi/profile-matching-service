
import Controllers from "../../../controllers";
import {TravelValidator} from "../../../lib/validator/travel.validator";
export default (app)=> {
	app.post('/travel',TravelValidator.create, Controllers.Travel.create)
	app.get('/travel', Controllers.Travel.list)
	app.get('/travel/:id/summary', Controllers.Travel.Summary )
	app.get('/travel/:id', Controllers.Travel.show )
	app.put('/travel/:id', Controllers.Travel.update)
	app.delete('/travel/:id', Controllers.Travel.delete)
}