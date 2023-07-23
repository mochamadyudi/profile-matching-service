import {Service} from "./service";
import {Database} from "../lib/database";
import {isJSONString, Pagination} from "@yid/helpers";

export class GapService extends Service{
	constructor(props) {
		super(props);
		this.schema = Database?.gap_mapping;
	}
	
	async listData(){
		try{
			const {page, limit, direction} = Pagination(this.query)
			let order = [['id', 'DESC']]
			if (direction.toString().toLowerCase() === "asc" || direction.toLowerCase() === "desc") order = [['id', direction]]
			
			this.condition = {
				required:true,
				limit,
				offset: limit * (page > 1 ? page - 1 : 0),
				order,
				where: {},
				include: [],
				raw:true,
				subQuery: false,
				nest: true
			}
			
			return await this.list({page,limit})
		}catch (err){
			return [ err , null ]
		}
	}
	async show(){
		try{
			this.callback = function(result){}
			return await this.detail()
		}catch (err){
			return [ err, null ]
		}
	}
}


