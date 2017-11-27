
import { connect } from 'react-redux';
import MainLayout from '../template/MainLayout';

const mapStateToProps = state => {
  return { accessibility: state.accessibilityReducer };
};

export default connect(mapStateToProps)(MainLayout);
