import {combineReducers} from "redux";
import {userReducer, UserStore} from "./user";
import {homepageReducer, HomepageStore} from "./homepage";
import {componentReducer, ComponentStore} from "./component";
import {viewReducer, ViewStore} from "./view";
import {categoryReducer, CategoryStore} from "./category";

export interface StoreState {
    user: UserStore;
    homepage: HomepageStore;
    component: ComponentStore;
    view: ViewStore;
    category: CategoryStore;
};

export const reducers = combineReducers({
    user: userReducer,
    homepage: homepageReducer,
    component: componentReducer,
    view: viewReducer,
    category: categoryReducer,
});
