import React from 'react';
import { connect } from 'react-redux';
import { sizeFont, contrast } from '../actions/accessibilityAction';
import MenuAccessibility from '../components/MenuAccessibility';

const mapStateToProps = state => ({ accessibility: state.accessibilityReducer });

const mapDispatchToProps = dispatch => ({
  changeFont: size => {
    return dispatch(sizeFont(size));
  },
  changeContrast: val => {
    return dispatch(contrast(val));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAccessibility);
