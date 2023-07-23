import Joi from "joi";
import {JoiBase, JoiEmail, JoiNewPassword, JoiPassword} from "./extended.validator";
import {validator} from "./validator";

const create = async (req,res,next)=> {
	const schema = Joi.object({
		name: Joi.string().required(),
		location: Joi.string().required(),
		description: Joi.string().optional(),
		category:Joi.array().items(Joi.types().number).required(),
		criteria: Joi.array()
			.items(Joi.object({
				isPrimary: Joi.any().optional(),
				label: Joi.string().required(),
				description: Joi.string().required(),
				value: Joi.number().required()
			}).required()).required()
	})
	validator(schema.validate(req.body),res,next)
}


const criteriaAdd = async (req,res,next)=> {
	const schema = Joi.object({
		criteria: Joi.array()
			.items(Joi.object({
				criteriaId:Joi.any().required(),
				value: Joi.number().required()
			}).required()).required()
	})
	validator(schema.validate(req.body),res,next)
}

const TravelValidator = {
	create,criteriaAdd
}
export { TravelValidator }