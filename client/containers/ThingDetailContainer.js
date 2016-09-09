import { connect } from 'react-redux'

import ThingDetail from '../components/pages/ThingDetail'
import { hideDetails } from '../actions'

const mapStateToProps = (state) => {

}

const ThingDetailContainer = connect(
  mapStateToProps
)(ThingDetail)

export default ThingDetailContainer
