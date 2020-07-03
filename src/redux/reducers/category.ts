import * as actions from '../actions';
import {Announcement, Category, Tag, Theme} from "../../configs/types";

type Action =
    | actions.CategoryDetailsFetched

export interface CategoryStore {
    info: Category;
    highQuality: Theme[];
    pinned: Theme[];
    all: Theme[];
    announce: Announcement[];
    tags: Tag[];
    loaded: number | null;
}

export const categoryInit: CategoryStore = {
    info: {} as any,
    highQuality: [],
    pinned: [],
    all: [],
    announce: [],
    tags: [],
    loaded: null,
}

export function categoryReducer(state = categoryInit, action: Action): CategoryStore {
    switch (action.type) {
        case actions.CATEGORY_DETAILS_FETCHED:
            const {info, highQuality, pinned, announce, all, tags} = action
            const loaded = info._id;
            return {...state, info, highQuality, pinned, announce, all, tags, loaded};
    }
    return state;
}
