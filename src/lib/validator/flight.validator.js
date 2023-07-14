import Joi from "joi";
import {JoiBase, JoiEmail, JoiNewPassword, JoiPassword} from "./extended.validator";
import {validator} from "./validator";

const createSchedule = async (req,res,next)=> {
	const schema = Joi.object({
		day: Joi.string().required(),
		type: Joi.string().required(),
		airline_id: Joi.number().required(),
		flight_no: Joi.string().required(),
		remarks: Joi.string().max(500).optional(),
		origin_id: Joi.number().optional(),
		schedule_time: Joi.string().required(),
	})
	validator(schema.validate(req.body),res,next)
}
const updateSchedule = async (req,res,next)=> {
	const schema = Joi.object({
		day: Joi.string().required(),
		type: Joi.string().required(),
		airline_id: Joi.number().required(),
		flight_no: Joi.string().required(),
		remarks: Joi.string().max(500).optional(),
		origin_id: Joi.number().optional(),
		schedule_time: Joi.string().required(),
	})
	validator(schema.validate(req.body),res,next)
}

const FlightValidator = {
	createSchedule,updateSchedule,
}
export { FlightValidator }