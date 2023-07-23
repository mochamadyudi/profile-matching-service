import MasterDataController from "../../../controllers/master-data.controller";
import {MasterDataValidator} from "../../../lib/validator";
import {isAuth} from "../../../middlewares/index.middleware";
import {Database} from "../../../lib/database";
import {YidException} from "@yid/handlers";

export default (app)=>{
	app.get('/dashboard', isAuth,async (req,res)=> {
		try{
			let sqlQuery = `select *
from (SELECT JSON_OBJECT(
                     'label', 'travel',
                     'value', count(*),
    'description','Total Data Wisata'
                 ) as data
      FROM travel AS t
      where t.deletedAt is null
      UNION ALL
      SELECT JSON_OBJECT(
                     'label', 'Category',
                     'value', count(*),
          'description','Total Data Category'
                 ) as category
      FROM category as c
      UNION ALL
      SELECT JSON_OBJECT(
                     'label', 'ketetapan',
                     'value', count(*),
          'description','Total Data Ketetapan'
                 )
      FROM category_value as c
      UNION ALL
      SELECT JSON_OBJECT(
                     'label', 'user',
                     'value', count(*),
          'description','Total Data User'
                 )
      FROM user as c
      UNION ALL
      SELECT JSON_OBJECT(
                     'label', 'master-data',
                     'value', count(*),
          'description','Total Data Master Data'
                 )
      FROM master_data as md
            UNION ALL
      SELECT JSON_OBJECT(
                     'label', 'criteria',
                     'value', count(*),
          'description','Total Data Criteria'
                 )
      FROM master_data as md2
      where md2.opt_type = 'criteria'
      ) as t2
`
			const data = await Database.sequelize.query(sqlQuery,{raw:true,nest:true})
			
			return YidException.Success(res, {
				message: "Successfully! Created",
				data
			})
		}catch(err){
			return res.json(err)
		}
	})
	
	
	
	app.get('/master-data', new MasterDataController().list)
	app.delete('/master-data/:id', new MasterDataController().delete)
	app.get('/master-data/:type',new MasterDataController().TypeList)
	app.post('/master-data/:type',MasterDataValidator.create, new MasterDataController().create)
	app.get('/master-data/:type/:id', new MasterDataController().show)
	app.delete('/master-data/:type/:identifier', new MasterDataController().delete)
	
	
	return app
}