import {createSelector} from 'reselect';
import {StoreState} from "../reducers";

const getSysMsg = (store: StoreState) => store.user.sysMsg;

export const myMessageList = createSelector(
    [getSysMsg], (sysMsg) => {
        sysMsg.filter(item => !item.checked);
    }
)
