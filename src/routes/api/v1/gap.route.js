import Controllers from "../../../controllers";
import {GapValidator} from "../../../lib/validator";


export default (app)=>{
	app.get('/gap', Controllers.Gap.list)
	app.post('/gap',GapValidator.create, Controllers.Gap.create)
	app.put('/gap/:id',GapValidator.create, Controllers.Gap.edit)
	app.get('/gap/:id', Controllers.Gap.show)
	app.delete('/gap/:id', Controllers.Gap.delete)
	
	
	return app
}