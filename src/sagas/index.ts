import {all, call} from 'redux-saga/effects';

import UserSagas from "./user";

const importSagas = [
    ...UserSagas,

];

export default function* Sagas() {
    yield all(importSagas.map(saga => call(saga)));
};
