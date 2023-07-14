import MasterDataController from "../../../controllers/master-data.controller";

export default (app)=>{
	app.get('/master-data', new MasterDataController().list)
	app.delete('/master-data/:id', new MasterDataController().delete)
	app.get('/master-data/:type',new MasterDataController().TypeList)
	app.post('/master-data/:type', new MasterDataController().create)
	app.get('/master-data/:type/:id', new MasterDataController().show)
	app.delete('/master-data/:type/:identifier', new MasterDataController().delete)
	
	
	return app
}