import { connect } from 'react-redux'

import PersonalitiesIndex from '../components/pages/PersonalitiesIndex'
import { showDetails, addThing } from '../actions'

const mapStateToProps = (state) => {
  return {
    things: state.things
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalitiesIndex)
