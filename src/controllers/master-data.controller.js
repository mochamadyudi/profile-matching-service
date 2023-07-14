import {YidException} from "@yid/handlers";
import MasterDataService from "../services/master-data.service";
import {ClearSequel, DeleteObjKey, findKey, ObjResolve, Pagination} from "@yid/helpers";
import {Op} from "sequelize";

export default class MasterDataController {
	
	async list(req, res) {
		let { query } = req
		try {
			let condition = {
				attributes:['id',['opt_type','type'],['opt_name','identifier'],['opt_value','data'],'created_at','updated_at'],
				where:{}
			}
			
			if(ObjResolve(query,'identifier')){
				Reflect.set(condition.where,'opt_name',{
					[Op.in]: Array.isArray(ObjResolve(req.query,'identifier')) ? ObjResolve(req.query,'identifier') : [ ObjResolve(req.query,'identifier') ]
				})
			}
			
			if(ObjResolve(query,'type')){
				Reflect.set(condition.where, 'opt_type',{
					[Op.in]: Array.isArray(ObjResolve(query,'type')) ? ObjResolve(query,'type') : [ ObjResolve(query,'type')]
				})
			}
			
			const pagination = Pagination(req.query)
			const [err, data] = await new MasterDataService({
				orderBy: req.query?.orderBy ?? "id",
				query: req.query,
				condition,
				callback: function({rows}){
					rows.map((child)=> {
						child = ClearSequel(child)
						if(typeof(child?.data) !== 'undefined' && child?.data !== ''){
							try{
								Reflect.set(child,'data', JSON.parse(child?.data ?? {}))
							}catch(err){
							
							}
						}
						return child
					})
				},
			}).list({
				...req.query,
				...pagination
			})
			
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.Success(res, {
				message: "Successfully! Created",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	async TypeList(req, res) {
		try {
			let { type } = req.params
			
			const pagination = Pagination(req.query)
			let condition = {
				where: {}
			}
			
			switch (type){
				case "category":
					
					break;
				default:
					Reflect.set(condition,"attributes",['id',['opt_type','type'],['opt_name','identifier'],['opt_value','data'],'created_at','updated_at'])
					Reflect.set(condition.where,'opt_type', type)
					if(ObjResolve(req.query,'identifier')){
						Reflect.set(condition.where,'opt_name',{
							[Op.in]: Array.isArray(ObjResolve(req.query,'identifier')) ? ObjResolve(req.query,'identifier') : [ ObjResolve(req.query,'identifier') ]
						})
					}
					break;
			}
			const [ err , data ] = await new MasterDataService({
				orderBy: req.query?.orderBy ?? "id",
				query: req.query,
				condition,
				type,
				callback: function({rows}){
					rows.map((child)=> {
						child = ClearSequel(child)
						if(typeof(child?.data) !== 'undefined'){
							try{
								Reflect.set(child,'data', JSON.parse(child?.data))
							}catch(err){
							
							}
						}
						return child
					})
				}
			}).list({
				...pagination
			})
			
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
	
	async create({params,body,query,...req}, res) {
		try {
			let { type } = params
			let fields = {}
			
			let condition = {
				where: {}
			}
			
			
			switch (type){
				case "category_value":
				case "category":
					break;
				default:
					Reflect.set(fields,'opt_type',type)
					Reflect.set(condition?.where, 'opt_type',type)
					Reflect.set(condition?.where, 'opt_name',fields?.name)
					if(typeof(body?.identifier) !== 'undefined' && body?.identifier !== ''){
						Reflect.set(fields,'opt_name',body?.identifier)
					}else{
						if((findKey(body,['data','name']) || findKey(body,['data','display_name']))){
							let identifier = `${(findKey(body,['data','name']) || findKey(body,['data','display_name']))}`.toString().toLowerCase().replace(/ /g,'-')
							Reflect.set(fields,'opt_name',identifier)
						}
					}
					Reflect.set(fields,'opt_value',JSON.stringify(body?.data ?? {}))
				break;
			}
			
			
			
			
			
			const [ errShow , dataShow ] = await new MasterDataService({
				type,
				condition
			}).detail()
			if(errShow) return YidException.BadReq(res, errShow)
			
			switch (type){
				case "category_value":
				case "category":
					break;
				default:
					if(dataShow){
						const [ err , data ] = await new MasterDataService({
							fields: {
								opt_value: fields?.opt_value
							},
							key:"id",
							value:dataShow?.id,
							callback:function(result){
								result = ClearSequel(result)
								try{
									Reflect.set(result,'type',result?.opt_type)
									Reflect.set(result,'identifier',result?.opt_name)
									if(typeof(result?.opt_value) !== 'undefined' && result?.opt_value !== ''){
										Reflect.set(result,'data',JSON.parse(result?.opt_value ?? {}))
									}
									DeleteObjKey(result, ['opt_type','opt_name','opt_value'])
								}catch (err){
								
								}
								return result
							}
						}).update()
						if(err) return YidException.BadReq(res, err)
						return YidException.Success(res, {
							message: "Successfully! Created",
							data: data
						})
					}
					
			}
			
			const [ err , data ] = await new MasterDataService({
				type,
				fields: fields,
			}).create()


			if (err) {
				return YidException.BadReq(res, err)
			}
			
			return YidException.Success(res, {
				message: "Successfully! Created",
				data: data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	async show(req, res) {
		try {
			const [ err , data ] = await new MasterDataService({
				orderBy: req.query?.orderBy ?? "id",
				query: req.query,
			})
			
			
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.Success(res, {
				message: "Successfully! Created",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	async delete(req, res) {
		try {
			let { id } = req.params
			const [ err , data ] = await new MasterDataService({
				key: "id",
				value:id
			}).delete()
			
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
	
	
}