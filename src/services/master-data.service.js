import {Service} from "./service";
import {Database} from "../lib/database";

export default class MasterDataService extends Service{
	constructor(props) {
		super(props);
		this.type = props?.type ?? null
		
		switch (this.type){
			case "category":
				this.schema = Database?.category ?? undefined
				break;
			default:
				this.schema = Database?.master_data;
				break;
		}
	}
	
	
}