import {combineReducers} from "redux";
import {userReducer, UserStore} from "./user";
import {homepageReducer, HomepageStore} from "./homepage";
import {componentReducer, ComponentStore} from "./component";

export interface StoreState {
    user: UserStore;
    homepage: HomepageStore;
    component: ComponentStore;
};

export const reducers = combineReducers({
    user: userReducer,
    homepage: homepageReducer,
    component: componentReducer,
});
