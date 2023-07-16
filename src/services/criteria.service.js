import {Service} from "./service";
import {Database} from "../lib/database";
import {Pagination} from "@yid/helpers";
import {Op} from "sequelize";

export class CriteriaService extends Service{
	constructor(props) {
		super(props)
		this.schema = props?.schema ?? Database?.criteria ?? undefined
	}
	
	
	async listData(){
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
			attributes:['id','travelId','label','description','isPrimary','value'],
			raw:false,
			subQuery: false,
			nest: true
		}
		
		let travelInclude = {
			model: Database?.travel,
			attributes: ['id','name','thumbnail']
		}
		
		this.condition.include.push(travelInclude)
		
		
		if(this.query?.travelId){
			Reflect.set(this.condition.where,'travelId', {
				[Op.in] : Array.isArray(this.query?.travelId) ? this.query?.travelId : [ this.query?.travelId ]
			})
		}
		
		return await this.list({page,limit})
	}
	
	
}