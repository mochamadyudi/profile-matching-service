import {Service} from "@yid/services";
import {Database} from "../lib/database";
import {encryptPassword, hashUuid} from "@yid/helpers";
import moment from "moment/moment";

export class AuthService extends Service{
    constructor(props) {
        super(props);
        this.schema = Database.user
    }

    async signUp(){
        try{
            this.condition = {
                where:  {
                    email: this.fields.email
                }
            }
            const {hashPassword, salt} = await encryptPassword(this.fields.password)
            
            Reflect.set(this.fields,'password',hashPassword)
            Reflect.set(this.fields,'salt',salt)
            
            const [ errCheck,dataCheck] = await this.detail();
            if(errCheck) throw new Error(errCheck?.message ?? "Error: Check Detail")
            if(dataCheck) return [ new Error('Error: the user has been registered'),null]
            
            const [ err, data ] = await this.create()
            
            if(!err && data){
                this.schema = Database?.user_role ?? undefined
                if(!this.schema) return [ new Error('Error: schema user_roles is undefined'),null]
                this.fields = {
                    roleId: this.fields?.role,
                    userId: data?.id ?? null
                }
                const [ errRole, dataRole ] = await this.create()
                if(errRole) {
                    this.schema = Database.user
                    this.key = 'id'
                    this.value = data?.id
                    let [ errDel, dataDel ] = await this.delete()
                    return [ new Error(`Error: ${errRole?.message}`), null]
                }
                Reflect.set(data,'role',dataRole)
                
            }
            
            return [ err, data ]
        }catch(err){
            return [ err ,null ]
        }
    }

    async signIn(){
        try{
            this.condition = {
                where:  {
                    email: this.fields.email
                },
            }
            return await this.detail();
        }catch(err){
            return [ err, null]
        }
    }
    
    async loadUser(){
        try{
            return [ null, null ]
        }catch(err){
            return [ err , null ]
        }
    }
    
}