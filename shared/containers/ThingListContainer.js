import { connect } from 'react-redux'

import ThingList from '../components/ThingList'
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

const ThingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThingList)

export default ThingListContainer
