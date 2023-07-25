import {YidException} from "@yid/handlers";
import UserService from "../services/user.service";
import {Database} from "../lib/database";

export class UserController {
	
	static async travelRecommendation(req, res) {
		try {
			const [err, data] = await new UserService({
				user: req.user,
				query: req.query,
			}).travelRecomm()
			
			console.log({err, data})
			if (err) {
				return YidException.BadReq(res, err)
			}
			return YidException.Success(res, {
				message: "Successfully! updated data",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	static async history(req, res) {
		try {
			const [err, data] = await new UserService({
				user: req.user,
				query: req.query,
			}).historyList()
			if (err) {
				return YidException.BadReq(res, err)
			}
			return YidException.Success(res, {
				message: "Successfully! updated data",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	static async historyShow(req, res) {
		try {
			let {id} = req.params
			const [err, data] = await new UserService({
				user: req.user,
				value: id,
				query: req.query,
			}).historyShow()
			if (err) {
				return YidException.BadReq(res, err)
			}
			return YidException.Success(res, {
				message: "Successfully! updated data",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	
	static async travelCriteria(req, res) {
		try {
			const [err, data] = await new UserService({
				user: req.user,
				schema: Database?.user_criteria,
				fields: req.body
			}).travelCreate()
			console.log([err, data])
			if (err) {
				return YidException.BadReq(res, err)
			}
			return YidException.SuccessCreate(res, {
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	
	static async update(req, res) {
		try {
			const [err, data] = await new UserService({
				user: req.user,
				fields: req.body
			}).updateUser()
			if (err) {
				return YidException.BadReq(res, err)
			}
			return YidException.Success(res, {
				message: "Successfully! updated data",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
	
	
	static async changePassword(req, res) {
		try {
			const [ err , data ] = await new UserService({
				user:req.user,
				fields:req.body
			}).updatePassword()
			if (err) {
				return YidException.BadReq(res, err)
			}
			return YidException.Success(res, {
				message: "Successfully! updated data",
				data
			})
		} catch (err) {
			return YidException.ExceptionsError(res, err)
		}
	}
}