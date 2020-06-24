import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';

import PageFrame from "../components/PageFrame";

import {StoreState} from "../redux/reducers";
import {getUserInfoStart} from "../redux/actions/async";

const mapStateToProps = ({
    user: {token, info},
}: StoreState) => ({
    loggedIn: !!token,
    userInfo: info,

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    getUserInfo: getUserInfoStart,
}, dispatch)

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type PageFrameProps = StateProps & DispatchProps;

export default connect<StateProps, DispatchProps, {}, StoreState>(
    mapStateToProps, mapDispatchToProps
)(PageFrame);
