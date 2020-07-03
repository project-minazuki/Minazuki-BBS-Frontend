import {all, call} from 'redux-saga/effects';

import UserSagas from "./user";
import ComponentSagas from "./components";
import PageSagas from "./pages";

const importSagas = [
    ...UserSagas,
    ...ComponentSagas,
    ...PageSagas,
];

export default function* Sagas() {
    yield all(importSagas.map(saga => call(saga)));
};
