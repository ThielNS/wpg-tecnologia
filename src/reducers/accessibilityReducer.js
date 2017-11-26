const accessibility = ( state = [{ fontSize: 16, contrast: false }], action ) => {
  switch (action.type) {
    case 'SIZE_FONT':
      const size = state.map(state => {
        state.fontSize = action.size;
        return state;
      });
      return size;
    case 'CONTRAST':
      const contrast = state.map(state => {
        state.contrast = action.contrast;
        return state;
      });
      return contrast;
    default:
      return state;
  }
}

export default accessibility;
