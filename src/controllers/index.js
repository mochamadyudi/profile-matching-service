import AuthController  from './auth.controller';
import {OptionsController} from "./options.controller";
import {ProfileController} from "./profile.controller";
import FlightController from "./flight.controller";
import {RoleController} from "./role.controller";
import {CriteriaController} from "./criteria.controller";
import TravelController from "./travel.controller";

const Controllers = {
    Auth: AuthController,
    Options: OptionsController,
    Profile: ProfileController,
    Flight: FlightController,
    Role: RoleController,
    Criteria : CriteriaController,
    Travel: TravelController
}

export default Controllers