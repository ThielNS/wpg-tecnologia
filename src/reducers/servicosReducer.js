const servicos = (state = [], action) => {
  switch (action.type) {
    case 'LIST_SERVICOS':
      return state = action.listServicos;
    default:
      return state;
  }
}

export default servicos;
