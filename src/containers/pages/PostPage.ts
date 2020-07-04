import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";

import PostPage from "../../pages/PostPage";

const mapStateToProps = ({

}: StoreState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type PostPageProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
