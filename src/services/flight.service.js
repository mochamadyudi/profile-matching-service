import {Service} from "./service";
import {Database} from "../lib/database";
import {isJSONString} from "@yid/helpers";

class FlightScheduleService extends Service{
	constructor(props) {
		super(props);
		this.schema = Database?.flight_schedule;
	}
	
	async show(){
		try{
			this.callback = function(result){
				if(result){
					const [ err, data ] = isJSONString(result.opt_value)
					if(!err && data) Reflect.set(result,'opt_value',data ?? result?.opt_value)
				}
			}
			return await this.detail()
		}catch (err){
			return [ err, null ]
		}
	}
}




export default class FlightService extends Service{
	constructor(props) {
		super(props);
		this.schema = Database?.flight;
		this.schedule = new FlightScheduleService(props)
	}
	
	
	async show(){
		try{
			this.callback = function(result){
				if(result){
					const [ err, data ] = isJSONString(result.opt_value)
					if(!err && data) Reflect.set(result,'opt_value',data ?? result?.opt_value)
				}
			}
			return await this.detail()
		}catch (err){
			return [ err, null ]
		}
	}
	
}



