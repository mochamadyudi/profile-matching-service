import {Service} from "./service";
import {Database} from "../lib/database";

export default class UserService extends Service{
	constructor(props) {
		super(props);
		this.schema = Database.user
	}
	
	async show(){
		try{
			this.condition = {
				where:  {
					[this.key] : this.value
				},
				attributes: this.attributes ?? ['id','uuid','email','fullName','createdAt',"updatedAt"]
			}
			return await this.detail();
		}catch(err){
			return [ err, null ]
		}
	}
}