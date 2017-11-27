const accessibility = ( state = {}, action ) => {
  switch (action.type) {
    case 'SIZE_FONT':
      return {...state, fontSize: action.size};
    case 'CONTRAST':
      return {...state, contrast: action.contrast};
    default:
      return {...state, fontSize: 16, contrast: false};
  }
}

export default accessibility;
