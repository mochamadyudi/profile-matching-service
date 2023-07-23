import {YidException} from "@yid/handlers";
import FlightService from "../services/flight.service";
import {ClearSequel, DeleteObjKey, isJSONString, ObjResolve, Pagination} from "@yid/helpers";
import {Database} from "../lib/database";
import {GapService} from "@yid/services";

let { gap_mapping } = Database

export default class GapController {
	
	
	static async show(req,res){
		try {
			let { id } = req.params
			const [err, data] = await new GapService({
				condition: {
					where: {
						[req.query?.orderBy ?? "id"]:id,
					}
				}
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
				message: "Successfully! Data Found!",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	
	static async list(req,res){
		try{
			
			const [ err , data ] = await new GapService({
				query: req.query
			}).listData()
			
			if (err) {
				return YidException.BadReq(res, err)
			}
			if (!data) {
				return YidException._NotFound(res, {
					message: "Error: data notfound"
				})
			}
			return YidException.SuccessGetList(res, {
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	static async edit(req,res){
		try{
			let { id } = req.params
			const [ err, data ]  = await new GapService({
				fields: req.body,
				key: req.query?.orderBy ?? "id",
				value: id
			}).update()
			
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
	static async delete(req,res){
		try{
			
			let { id }  = req.params
			
			const [ err, data ] = await new GapService({
				key: req.query?.orderBy ?? "id",
				value: id
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
				message: "Successfully! Created",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	static async create(req,res){
		try{
			
			const [ err , data ] = await new GapService({
				fields:req.body
			}).create()
			
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