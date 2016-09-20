import { connect } from 'react-redux'

import getPersonalities from '../actions/getPersonalitiesAction'

import Nav from '../components/Nav'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonalities: () => {
      dispatch(getPersonalities())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
