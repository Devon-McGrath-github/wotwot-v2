import { connect } from 'react-redux'

import component from '../components/pages/MediaLibrary'

const mapStateToProps = (state) => {
  return {
    personalities: state.personalities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
