import FetchMyInfo from './FetchMyInfo';
import LoginStart from './LoginStart';
import RegisterStart from './RegisterStart';
import UpdateUserInfoStart from './UpdateUserInfoStart';
import FetchMyInbox from './FetchMyInbox';
import FetchMyFavorite from './FetchMyFavorite';
import DeleteFavorite from './DeleteFavorite';

const UserSagas = [
    FetchMyInfo,
    LoginStart,
    RegisterStart,
    UpdateUserInfoStart,
    FetchMyInbox,
    FetchMyFavorite,
    DeleteFavorite,
]

export default UserSagas;
