import {TravelService} from "@yid/services";
import {YidException} from "@yid/handlers";
import {Database} from "../lib/database";
import {ObjResolve} from "@yid/helpers";
import {Op} from "sequelize";

export default class TravelController {
	
	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns {Promise<*>}
	 */
	static async show(req,res){
		try{
			let { id } = req.params
			let condition = {
				where: {},
				include: []
			}
			
			condition.include.push({
				model: Database?.criteria,
				// attributes:['id']
				// required: true,
				// limit: 10
			})
			
			Reflect.set(condition.where,'deletedAt', {
				[Op.is]: null
			})
			const [ err , data ] = await new TravelService({
				key: req.query?.orderBy ?? "id",
				value: id,
				condition,
				
			}).detail()
			
			console.log({data,err})
			if(err){
				return YidException.BadReq(res,err)
			}
			if(!data){
				return YidException._NotFound(res,{
					message:"Error: data notfound"
				})
			}
			return YidException.Success(res,{
				message:"Successfully! data found",
				data
			})
		}catch(err){
			console.log({err})
			return YidException.ExceptionsError(res,err)
		}
	}
	
	
	static async Summary(req,res){
		try{
			let { id} = req.params
			const data = await Database.sequelize.query(`SELECT
    uc.userId,
    u.email,
    u.fullName,
    CAST(SUM(uc.value) AS SIGNED) AS userCriteriaTotal,
    CAST(SUM(c.value) AS SIGNED) AS criteriaTotal,
    CAST(SUM(c.value+uc.value) AS SIGNED) as total,
    JSON_OBJECT(
        'id',t.id,
        'name',t.name,
        'thumbnail',t.thumbnail
        ) as travel,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'criteriaId', c.id,
            'label', c.label,
            'description', c.description,
            'userCriteriaId', uc.criteriaId,
            'value',c.value,
            'compareValue',uc.value,
            'coreFactor',c.isPrimary = 1
        )
    ) as data
FROM criteria as c
INNER JOIN travel as t ON t.id = c.travelId
INNER JOIN user_criteria uc on c.id = uc.criteriaId
INNER JOIN user u on uc.userId = u.id

WHERE t.id = ${id}
GROUP BY  uc.userId,u.email,travel`,{ raw: false, nest: true})
			if(!data){
				return YidException._NotFound(res,{
					message:"Error: data notfound"
				})
			}
			return YidException.Success(res,{
				message:"Successfully! data found",
				data
			})
		}catch(err){
			return res.json({})
		}
	}
	/**
	 * @param {Request} req
	 * @param {Response} res
	 * @returns {Promise<*>}
	 */
	static async create(req,res){
		try{
			const [ err , data ] = await new TravelService({
				fields:req.body,
				callback: async function(result){

					if(Array.isArray(ObjResolve(req.body,'category')) && ObjResolve(req.body,'category').length > 0){
						req.body.category = req.body.category.map((item)=> ({
							travelId:result?.id,
							categoryId:item
						}))
					}
					if(Array.isArray(req.body.category) && req.body.category.length > 0){
						try{
							let data = await Database?.travel_category.bulkCreate(req.body.category,{ returning: true, nest: true, raw: true })
							Reflect.set(result,'category',data)
						}catch(err){
							console.log({err},'CATEGORY')
						}
					}
					
					if(ObjResolve(req.body,'criteria') && Array.isArray(req.body?.criteria) && req.body?.criteria.length > 0){
						req.body.criteria = req.body?.criteria.map((item,index)=> ({
							...item,
							travelId:result?.id
						}))
					}
					if(Array.isArray(req.body?.criteria) && req.body?.criteria.length > 0){
						const data = await Database?.criteria.bulkCreate(req.body.criteria,{ returning: true, nest: true, raw: true })
						Reflect.set(result,'criteria',data)
					}
				}
			}).create()
			
			if(err){
				return YidException.BadReq(res,err)
			}
			
			if(!data){
				return YidException._NotFound(res,{
					message:"Error: data notfound"
				})
			}
			return YidException.Success(res,{
				message:"Successfully! Created",
				data
			})
		}catch(err){
			return YidException.ExceptionsError(res,err)
		}
	}
	
	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns {Promise<*>}
	 */
	static async update(req,res){
		try{
			const [ err, data ] = await new TravelService({
				key: req.query?.orderBy ?? "id",
				value: req.params.id,
				fields:req.body
			}).update()
			
			if(err){
				return YidException.BadReq(res,err)
			}
			if(!data){
				throw YidException.notFound(new Error("Error: Data not found"))
			}
			return YidException.Success(res,{
				message:"Successfully!",
				data,
			})
			
		}catch(err){
			return YidException.ExceptionsError(res,err)
		}
	}
	
	/**
	 * @param {Request} req
	 * @param {Response} res
	 * @returns {Promise<*>}
	 */
	static async list(req,res){
		try{
			
			const [ err , data] = await new TravelService({
				query:req.query,
			}).listData()
			
			if(err){
				return YidException.BadReq(res,err)
			}
			return YidException.SuccessGetList(res,{
				message:"Successfully get list!",
				data,
			})
		}catch (err){
			return YidException.ExceptionsError(res,err)
		}
	}
	
	/**
	 *
	 * @param {Request} req
	 * @param {Response} res
	 * @returns {Promise<*>}
	 */
	static async delete(req,res){
		try{
			const [ err , data] = await new TravelService({
				key: req.query?.orderBy ?? "id",
				schema:Database?.travel,
				value: req.params.id
			}).softDelete()
			
			if(err){
				return YidException.BadReq(res,err)
			}
			if(!data){
				return YidException._NotFound(res,{
					message:"Error: data notfound"
				})
			}
			return YidException.Success(res,{
				message:"Successfully! deleted",
				data,
			})
		}catch(err){
			return YidException.ExceptionsError(res,err)
		}
	}
}