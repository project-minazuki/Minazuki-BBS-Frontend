import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";
import * as $actions from '../../redux/actions/async';
import * as actions from '../../redux/actions/';

import Register from "../../components/views/Register";

const mapStateToProps = ({
    component: {inProcess}
}: StoreState) => ({
    waiting: inProcess,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    tryRegister: $actions.registerStart,
}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type RegisterProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(Register);
