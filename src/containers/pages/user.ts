import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";
import User from "../../pages/user";

const mapStateToProps = ({
    user: {info, token}
}: StoreState) => ({
    loggedIn: !!token, info,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type UserProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(User);
