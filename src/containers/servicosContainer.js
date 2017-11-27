
import { connect } from 'react-redux';
import ListServicos from '../components/ListServicos';
import { servicos } from '../actions/servicosAction';

const MapStateToProps = state => {
    return { servicos: state.servicosReducer };
};

const MapDispatchToProps = dispatch => ({
  listServicos: () => {
    return dispatch(servicos());
  }
});

export default connect(MapStateToProps, MapDispatchToProps)(ListServicos);
