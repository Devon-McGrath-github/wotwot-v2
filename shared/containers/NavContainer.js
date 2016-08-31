import { connect } from 'react-redux'

import Nav from '../components/Nav'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // logout dispatcher
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
