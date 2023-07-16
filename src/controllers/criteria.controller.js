import {YidException} from "@yid/handlers";
import {CriteriaService} from "@yid/services";
import {DeleteObjKey, ObjResolve, Pagination} from "@yid/helpers";
import {Database} from "../lib/database";
import {Op} from "sequelize";

export class CriteriaController {
	static async list(req, res) {
		try {
			
			const [err, data] = await new CriteriaService({
				query: req.query,
				orderBy: req.query?.orderBy ?? "id"
			}).listData();
			
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.SuccessGetList(res, {data})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	static async create(req, res) {
		try {
			const [err, data] = await new CriteriaService({
				fields: req.body ?? {},
			}).create();
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.Success(res, {
				message: "Successfully! Deleted",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	static async update(req,res){
		try{
			const { id } = req.params
			
			const [ err , data ] = await new CriteriaService({
				fields: req.body ?? {},
				key: req?.query?.orderBy ?? "id",
				value: id
			}).update();
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.Success(res, {data})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	static async delete(req, res) {
		try {
			let err = null
			let data = null
			
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.Success(res, {
				message: "Successfully! Deleted",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	
	static async listUser(req,res){
		try{
			const {page, limit, direction} = Pagination(req.query)
			let order = [['id', 'DESC']]
			if (direction.toString().toLowerCase() === "asc" || direction.toLowerCase() === "desc") order = [['id', direction]]
			let condition = {
				required:true,
				limit,
				offset: limit * (page > 1 ? page - 1 : 0),
				order,
				where: {},
				include: [],
				raw:true,
				subQuery: false,
				nest: true
			}
			
			let user = {
				model: Database?.user,
				required:true,
				where: {
					id: req.user.id,
				},
				attributes: ['id','uuid','fullName','email']
			}
			if(ObjResolve(req.query,'notUser') === 'true'){
				DeleteObjKey(user,['where'])
			}
			if(ObjResolve(req.query,'user')){
				DeleteObjKey(user,['where'])
				Reflect.set(user,'where', {
					id: {
						[Op.in]: Array.isArray(ObjResolve(req.query,'user')) ? ObjResolve(req.query,'user') : [ ObjResolve(req.query,'user') ]
					}
				})
			}
			condition.include.push(user)
			
			
			let criteria = {
				model: Database?.criteria,
				required: true,
				attributes: ['id','label','description','value']
			}
			condition.include.push(criteria)
			

			const [err, data] = await new CriteriaService({
				condition,
				schema: Database?.user_criteria ?? undefined,
				query: req.query,
				orderBy: req.query?.orderBy ?? "id"
			}).list({page,limit});

			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.SuccessGetList(res, {data})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
}