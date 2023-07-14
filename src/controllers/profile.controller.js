import {YidException} from "@yid/handlers";
import {ProfileService} from "../services/profile.service";
import UserService from "../services/user.service";
import {DeleteObjKey} from "@yid/helpers";
export class ProfileController {
	
	/**
	 * @param req
	 * @param res
	 * @returns {Promise<*>}
	 */
	static async update(req,res){
		try{
			const [ err, data ] = await new UserService({
				key: req.query?.orderBy ?? "id",
				value: req.user?.id,
				fields: req.body,
				callback: function(value){
					DeleteObjKey(value,['status','password','uuid','email_verified_at','remember_token','activated','signup_ip_address'])
				}
			}).update()
			
			if(err){
				return YidException.BadReq(res,err)
			}
			return YidException.Success(res,{
				message:"Successfully! updated data",
				data
			})
		}catch (err){
			return YidException.ExceptionsError(res,err)
		}
	}
}