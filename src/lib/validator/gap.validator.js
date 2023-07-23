import Joi from "joi";
import {JoiBase, JoiEmail, JoiNewPassword, JoiPassword} from "./extended.validator";
import {validator} from "./validator";

const create = async (req,res,next)=> {
	const schema = Joi.object({
		gap: Joi.number().required(),
		weight: Joi.number().required(),
		description: Joi.string().optional(),
	})
	validator(schema.validate(req.body),res,next)
}

const GapValidator = {
	create,
}
export { GapValidator }