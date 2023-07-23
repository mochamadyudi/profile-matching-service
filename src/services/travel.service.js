import {Service} from "./service";
import {Database} from "../lib/database";
import {Pagination} from "@yid/helpers";
import {Op} from "sequelize";

export class TravelService extends Service{
	constructor(props) {
		super(props);
		this.schema = Database?.travel ?? undefined
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
			Reflect.set(this.condition.where,'deletedAt', {
				[Op.is]: null
			})
			return await this.list({page,limit})
		}catch (err){
			return [ err , null ]
		}
	}
	
}