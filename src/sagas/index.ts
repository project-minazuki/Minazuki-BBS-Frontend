import {all, call} from 'redux-saga/effects';

import UserSagas from "./user";
import ComponentSagas from "./components";

const importSagas = [
    ...UserSagas,
    ...ComponentSagas,
];

export default function* Sagas() {
    yield all(importSagas.map(saga => call(saga)));
};
