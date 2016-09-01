import { connect } from 'react-redux'

import PersonalitiesIndex from '../components/PersonalitiesIndex'
import { showDetails, addThing } from '../actions'

const mapStateToProps = (state) => {
  return {
    things: state.things
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addThing: (e) => {
      e.preventDefault()
      dispatch(addThing())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalitiesIndex)
