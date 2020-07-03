import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";
import User from "../../pages/user";

import * as $actions from '../../redux/actions/async';

const mapStateToProps = ({
    user, component: {userCenter, inProcess}
}: StoreState) => ({
    loggedIn: !!user.token, user,
    lib: userCenter, inProcess
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getById: $actions.fetchUserInfoStart,
    updateInfo: $actions.updateUserInfoStart,
    fetchInbox: $actions.fetchMyInboxStart,
    fetchFavorite: $actions.fetchMyFavoriteStart,
    deleteFavorite: $actions.deleteFavoriteStart,
}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type UserProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(User);
