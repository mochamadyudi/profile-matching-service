import AuthController  from './auth.controller';
import {OptionsController} from "./options.controller";
import {ProfileController} from "./profile.controller";
import FlightController from "./flight.controller";
import {RoleController} from "./role.controller";
import {CriteriaController} from "./criteria.controller";
import TravelController from "./travel.controller";
import GapController from "./gap.controller";
import {UserController} from "./user.controller";

const Controllers = {
    Auth: AuthController,
    Options: OptionsController,
    Profile: ProfileController,
    Flight: FlightController,
    Role: RoleController,
    Criteria : CriteriaController,
    Travel: TravelController,
    Gap: GapController,
    User: UserController
}

export default Controllers