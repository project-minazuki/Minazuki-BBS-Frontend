import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";
import Login from "../../components/views/Login";

const mapStateToProps = ({
    user: {token},
}: StoreState) => ({
    loggedIn: !!token,

});

const mapDispatchToProps = (dispach: Dispatch) => bindActionCreators({

}, dispach);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type LoginProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
