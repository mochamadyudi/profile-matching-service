import BodyResponse from "../lib/handler/body-response";
import {JwtToken} from "@yid/helpers";
import UserService from "../services/user.service";

export async function isAuth(req,res,next){
	try{
		if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
			const token = req.headers.authorization.split(" ")[1]
			let [err, decode] = new JwtToken({token}).decode()
			const [ error, data ] = await new UserService({
				key:"id",
				value:decode.userId
			}).show()
			
			if(err){
				return res.status(403).json(new BodyResponse({
					message: "Permission Denied!",
					status:403
				}))
			}
			if(error) return res.status(400).json(new BodyResponse({
				message: error?.message ?? "Error: BAD Request!",
				status:400
			}))
			if(!data) return res.status(404).json(new BodyResponse({
				message: "Error: User empty!",
				status:404
			}))
			req.user = {
				uuid:decode.id,
				...data
			}
			next()
		}else{
			return res.status(403).json(new BodyResponse({
				message: "Permission Denied!",
				status:403
			}))
		}
	}catch(err){
		next(err)
	}
}