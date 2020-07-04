import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";
import * as $actions from '../../redux/actions/async';

import CategoryPage from "../../pages/CategoryPage";

const mapStateToProps = ({
    category, component: {userCenter}, user
}: StoreState) => ({
    store: category,
    now: category.loaded,
    userDB: userCenter,
    userInfo: user.info,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadData: $actions.fetchCategoryDetail,
}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type CategoryPageProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
