import {AuthValidator} from "../../../lib/validator";
import Controllers from "../../../controllers";
import {isAuth} from "../../../middlewares/index.middleware";

export default (app)=> {
  app.get('/auth/load-user', isAuth, Controllers.Auth.userLoad)
  
  app.post('/auth/signUp', AuthValidator.signUpValidator, Controllers.Auth.signUp)
  app.post('/auth/signIn', AuthValidator.signIn, Controllers.Auth.signIn)
}