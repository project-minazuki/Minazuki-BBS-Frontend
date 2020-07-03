import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";

import CategoryPage from "../../pages/CategoryPage";

const mapStateToProps = ({
    category : {tags ,announce,info,highQuality,pinned}
}: StoreState) => ({
    tags,announce,info,highQuality,pinned
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type CategoryPageProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
