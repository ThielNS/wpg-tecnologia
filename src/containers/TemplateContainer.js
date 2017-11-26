import React from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../template/DefaultLayout';

const mapStateToProps = state => {
  return { accessibility: state.accessibilityReducer };
};

export default connect(mapStateToProps)(DefaultLayout);
