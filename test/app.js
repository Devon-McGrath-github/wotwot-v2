import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../shared/components/App'
import ThingListContainer from '../shared/containers/ThingListContainer'
import ThingDetailContainer from '../shared/containers/ThingDetailContainer'

test('<App /> has a Things header', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), 'Things')
})
