import * as actions from '../actions';
import {Announcement, Category, Theme} from "../../configs/types";
import {defaultFavicon} from "../../configs/consts";

type Action =
    | actions.RecommendFetched
    | actions.HomePageFetched
    | actions.CategoriesFetched
    | actions.HomepageIsLoaded

export interface HomepageStore {
    favicon: string;
    text: {
        type: 'Plain' | 'HTML';
        content: string;
        footer: string;
    };
    categories: Category[];
    newTheme: Theme[];
    newReply: Theme[];
    announcement: Announcement[];
    lastUpdate: number;
    hasLoaded: boolean,
}

export const homepageInit: HomepageStore = {
    favicon: defaultFavicon,
    text: {
        type: 'Plain',
        content: '并不是恋上了，只是，\n不可抗拒地，被吸引了。',
        footer: '「恋 × シンアイ彼女」',
    },
    categories: [] as Category[],
    newTheme: [] as Theme[],
    newReply: [] as Theme[],
    announcement: [] as Announcement[],
    lastUpdate: Date.now(),
    hasLoaded: false,
};

export function homepageReducer(state = homepageInit, action: Action): HomepageStore {
    switch (action.type) {
        case actions.RECOMMEND_FETCHED:
            const {newTheme, newReply} = action;
            return {...state, newTheme, newReply};
        case actions.HOME_PAGE_FETCHED:
            return {...state, newTheme: action.newTheme, newReply: action.newReply};
        case actions.CATEGORIES_FETCHED:
            return {...state, categories: action.data};
        case actions.HOMEPAGE_IS_LOADED:
            return {...state, hasLoaded: action.on};
    }
    return state;
}
