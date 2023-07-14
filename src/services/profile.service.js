import {Service} from "./service";
import {Database} from "../lib/database";
import {isJSONString, Pagination} from "@yid/helpers";

export class ProfileService extends Service {
	constructor(props) {
		super(props);
		this.schema = Database.users
	}
	
}