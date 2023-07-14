import AuthController  from './auth.controller';
import {OptionsController} from "./options.controller";
import {ProfileController} from "./profile.controller";
import FlightController from "./flight.controller";
import {RoleController} from "./role.controller";

const Controllers = {
    Auth: AuthController,
    Options: OptionsController,
    Profile: ProfileController,
    Flight: FlightController,
    Role: RoleController
}

export default Controllers