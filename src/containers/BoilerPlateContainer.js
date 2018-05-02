import { connect } from 'react-redux';
import BoilerPlateComponent from '../components/BoilerPlateComponent';
// import actions from '../actionsCreators';

const mapStateToProps = state => state;

// const mapDispatchToProps = dispatch => ({
//     propName: param => dispatch(actions.actionName(actionParam)),
// });

export default connect(mapStateToProps)(BoilerPlateComponent);
// export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
