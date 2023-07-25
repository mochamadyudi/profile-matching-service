import {Service} from "./service";
import {Database} from "../lib/database";

export default class MasterDataService extends Service{
	constructor(props) {
		super(props);
		this.type = props?.type ?? null
		
		if(this.type === 'criteria'){
			this.schema = Database?.master_data ?? undefined
		}else if (this.type === 'category_value'){
			this.schema = Database?.category_value ?? undefined
		}else if (this.type === 'category'){
			this.schema = Database?.category ?? undefined
		}else{
			this.schema = Database?.master_data;
		}
	}
	
	
}