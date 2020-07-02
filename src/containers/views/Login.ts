import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";
import Login from "../../components/views/Login";

import * as $actions from '../../redux/actions/async';

const mapStateToProps = ({
    user: {token, isLoading},
}: StoreState) => ({
    loggedIn: !!token, isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    handleLogin: $actions.loginStart,
}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type LoginProps = StateProps & DispatchProps;
export default connect<StateProps, DispatchProps, {}, StoreState>(mapStateToProps, mapDispatchToProps)(Login);
