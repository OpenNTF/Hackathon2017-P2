import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/form'
import { closeNote } from '../../core/core-actions'

const mapStateToProps = (state) => {
  return {
    data:state.form.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ closeNote }, dispatch);
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer
