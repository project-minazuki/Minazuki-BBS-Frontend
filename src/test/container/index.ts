import {connect} from "react-redux";

import TestApp from "../index";
import {StoreState} from "../../redux/reducers";
import {Dispatch, bindActionCreators} from "redux";
import * as $actions from "../../redux/actions/async";
import * as actions from '../../redux/actions';


const mapStateToProps = ({user: {token, isLoading, info}}: StoreState) => ({
    loggedIn: !!token,
    token, isLoading,
    userInfo: info,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    fetchInfo: $actions.fetchMyInfoStart,
    setToken: actions.login,
}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type TestAppProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(TestApp);
