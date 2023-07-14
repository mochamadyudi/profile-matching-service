import Joi from "joi";
import {JoiBase, JoiEmail, JoiNewPassword, JoiPassword} from "./extended.validator";
import {validator} from "./validator";


const update = async (req,res,next)=> {
	const schema = Joi.object({
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
		email: JoiEmail.required(),
	})
	validator(schema.validate(req.body),res,next)
}
const ProfileValidator = {
	update,
}
export { ProfileValidator }