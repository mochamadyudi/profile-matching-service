import {YidException} from "@yid/handlers";
import {AuthService} from "@yid/services";
import {DeleteObjKey, isValidPassword, JwtToken} from "@yid/helpers";

export default class AuthController {

    static async signUp(req,res){
        try{
            
            const [ err, data ] = await new AuthService({
                fields: req.body,
                modules: []
            }).signUp()

            if(err){
                return YidException.BadReq(res,err)
            }
            const token = await new JwtToken({
                data: {
                    id:data?.id,
                },
            }).generate()

            return YidException.Success(res,{message:"Successfully created!",data: {
                    token,
                    data
                }})
        }catch (err){
            throw YidException.ExceptionsError(res,err)
        }
    }

    static async signIn(req,res){
        try{
            let fieldsToken = {}
            
            const [ err, data ] = await new AuthService({
                fields: req.body,
                callback: function(result){
                    Reflect.set(fieldsToken,'userId',result?.id)
                    
                }
            }).signIn()

            if(err){
                return YidException.BadReq(res,err)
            }
            if(!data){
                return YidException.notFound("User not found")
            }
            
            
            const validate = isValidPassword(req.body?.password,data?.password)
            
            if (!validate){
                res.status(400)
                return YidException.BadReq(res,new Error('Wrong Email/Password. Try again'))
            }
            
            DeleteObjKey(data,['password','salt'])
            
            const generateToken = await new JwtToken({
                data: {
                    userId: data?.id
                }
            }).generate()
            
            res.status(200)
            return YidException.Success(res,{
                message: "Successfully! your logged in",
                data: {
                    token:generateToken
                }
            })
            
        }catch(err){
            return YidException.ExceptionsError(res,err);
        }
    }
    
    
    static async generateGuest(req,res){
        try{
            return YidException.Success(res,{
                message: "Successfully! your loaded user info",
                data: req.user
            })
        }catch(err){
            return YidException.ExceptionsError(res,err);
        }
    }
    
    
    static async userLoad(req,res){
        try{
            return YidException.Success(res,{
                message: "Successfully! your loaded user info",
                data: req.user
            })
        }catch(err){
            return YidException.ExceptionsError(res,err);
        }
    }
}