import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Listing from '../components/listing'
import { openNote } from '../../core/core-actions'

const mapStateToProps = (state) => {
  return {
    data:state.listing.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ openNote }, dispatch);
}

const ListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)

export default ListingContainer
