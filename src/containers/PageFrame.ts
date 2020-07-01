import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';

import PageFrame from "../components/PageFrame";

import {StoreState} from "../redux/reducers";

const mapStateToProps = ({
    user: {token, info},
    component: {inProcess}
}: StoreState) => ({
    loggedIn: !!token,
    userInfo: info,

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch)

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type PageFrameProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(PageFrame);
