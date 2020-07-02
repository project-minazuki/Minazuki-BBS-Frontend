import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../redux/reducers";
import {RouteComponentProps} from "react-router";

import PageFrame from "../components/PageFrame";

import * as $actions from '../redux/actions/async';

const mapStateToProps = ({
    user,
    component: {inProcess}
}: StoreState) => ({
    loggedIn: !!user.token,
    userInfo: user,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    reloadInfo: $actions.fetchMyInfoStart,
}, dispatch)

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type PageFrameProps = StateProps & DispatchProps & RouteComponentProps;
export default connect(mapStateToProps, mapDispatchToProps)(PageFrame);
