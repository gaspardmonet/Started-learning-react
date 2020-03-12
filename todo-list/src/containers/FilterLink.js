import { connect } from "react-redux";
import { setVisibilityFilters } from "../actions/index";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setVisibilityFilters
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilters(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
