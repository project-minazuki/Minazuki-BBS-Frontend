import * as actions from '../actions';
import {Announcement, Category, Theme} from "../../configs/types";
import {defaultFavicon} from "../../configs/consts";

type Action =
    | actions.RecommendFetched

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
};

export function homepageReducer(state = homepageInit, action: Action): HomepageStore {
    switch (action.type) {
        case actions.RECOMMEND_FETCHED:
            const {newTheme, newReply} = action;
            return {...state, newTheme, newReply};
    }
    return state;
}
