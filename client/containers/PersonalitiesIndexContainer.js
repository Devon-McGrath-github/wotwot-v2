import { connect } from 'react-redux'

import PersonalitiesIndex from '../components/pages/PersonalitiesIndex'
import { showDetails, addThing } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    personalities: state.personalities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalitiesIndex)
