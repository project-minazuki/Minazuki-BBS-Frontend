import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux';
import {StoreState} from "../../redux/reducers";

import Homepage from "../../pages/homepage";

const mapStateToProps = ({
    homepage: {newTheme, newReply}
}: StoreState) => ({
    newTheme, newReply,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;

export type HomepageProps = StateProps & DispatchProps;
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
