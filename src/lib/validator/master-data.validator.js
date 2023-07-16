import Joi from "joi";
import {JoiBase, JoiEmail, JoiNewPassword, JoiPassword} from "./extended.validator";
import {validator} from "./validator";

const create = async (req,res,next)=> {
	const schema = Joi.object({
		name: Joi.string().optional(),
		slug: Joi.string().optional(),
		color: Joi.string().optional(),
		background: Joi.string().optional(),
		value: Joi.any().optional(),
		data: Joi.object().optional(),
		identifier: Joi.string().optional(),
		opt_type: Joi.string().optional(),
		opt_name: Joi.string().optional(),
		opt_value: Joi.any().optional()
	})
	validator(schema.validate(req.body),res,next)
}

const MasterDataValidator = {
	create,
}
export { MasterDataValidator }