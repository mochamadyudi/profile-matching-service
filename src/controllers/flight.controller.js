import {YidException} from "@yid/handlers";
import FlightService from "../services/flight.service";
import {ClearSequel, DeleteObjKey, isJSONString, ObjResolve, Pagination} from "@yid/helpers";
import {Database} from "../lib/database";
import {HasMany, Op} from "sequelize";
import MasterDataService from "../services/master-data.service";
let { master_data, flight_schedule } = Database

export default class FlightController {
	
	
	static async show(req,res){
		try {
			let { id } = req.params
			const [err, data] = await new FlightService({
				key: req?.query?.orderBy ?? "id",
				value: id
			}).show()
			
			
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
	static async showSchedule(req, res) {
		try {
			const [err, data] = await new FlightService({
				key: "id",
				value: 1
			}).schedule.show()
			
			
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
	
	static async listSchedule(req, res) {
		try {
			
			const pagination = Pagination(req.query)
			
			const [err, data] = await new FlightService({
				key: "id",
				value: 1,
				condition:{
					include:[
						{
							model: master_data,
						}
					]
				},
				callback: async function({rows}){
					if(Array.isArray(rows) && rows.length > 0){
						rows.map((item)=> {
							item = ClearSequel(item)
							if(ObjResolve(item,"master_datum")){
								let md = ClearSequel(item?.master_datum) ?? {}
								if(Object.keys(md).length > 0){
									const [ err, data ] = isJSONString(md?.opt_value)
									if(!err && data) Reflect.set(md,'opt_value',data ?? md?.opt_value)
								}
								Reflect.set(item,'city', md)
								DeleteObjKey(item,['master_datum'])
							}
							Reflect.set(item,'airline', {})
							return item
						})
						let [ err, {data} ] = await new MasterDataService({
							condition: {
								attributes:['id','opt_type','opt_value'],
								where: {
									id:{
										[Op.in]:rows.map((item)=> item?.airline_id)
									}
									
								}
							}
						}).list({...req.query,...pagination})
						
						
						if(!err && Array.isArray(data) && data.length > 0){
							data = data.map((item)=> {
								item = ClearSequel(item) ?? item?.dataValues ?? item
								if(Object.keys(item).length > 0){
									const [ err, data ] = isJSONString(item?.opt_value)
									if(!err && data) Reflect.set(item,'opt_value',data ?? item?.opt_value)
								}
								return item
							})
							rows.map((item)=> {
								item = ClearSequel(item)
								let airline = data.filter(child => {
									child = ClearSequel(child)
									return child?.id === item?.airline_id
								})
								Reflect.set(item,'airline', {})
								if(Array.isArray(airline) && airline?.length > 0) {
									Reflect.set(item, 'airline', airline[0])
								}
								
								DeleteObjKey(item,['airline_id','origin_id'])
								return item
							})
						}
						
						
					}
				}
			}).schedule.list({
				...req.query,
				...pagination,
			})
			
			if (err) {
				return YidException.BadReq(res, err)
			}
			
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			
			return YidException.SuccessGetList(res, {
				message: "Successfully! Created",
				data
			})
			
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	
	static async putSchedule(req,res){
		try{
			let { id } = req.params
			let { query } = req
			const [ err ,data ] = await new FlightService({
				key: ObjResolve(query,'orderBy') ?? "id",
				value: id,
				fields: req.body
			}).schedule.update()
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.Success(res, {
				message: "Successfully! Updated",
				data
			})
		}catch(err){
			return YidException.ExceptionsError(res, err)
		}
	}
	static async deleteSchedule(req,res){
		try{
			let { id } = req.params
			const [ err, data ] = await new FlightService({
				key: ObjResolve(req.query,'orderBy') ?? "id",
				orderBy: ObjResolve(req.query,'orderBy') ?? "id",
				value:id
			}).schedule.delete()
			
			if (err) {
				return YidException.BadReq(res, err)
			}
			return YidException.Success(res, {
				message: "Successfully! Deleted",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	static async createSchedule(req,res){
		try {
			
			const [err, data] = await new FlightService({
				fields:req.body,
			}).schedule.create()
			
			
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
}