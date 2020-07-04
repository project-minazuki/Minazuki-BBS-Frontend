import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";

import Homepage from "../../pages/homepage";
import * as $actions from '../../redux/actions/async';

const mapStateToProps = ({
    homepage: {newTheme, newReply, categories, text, hasLoaded}
}: StoreState) => ({
    newTheme, newReply, categories, text,
    load: hasLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    loadInfo: $actions.fetchHomePageStart,
}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type HomepageProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
