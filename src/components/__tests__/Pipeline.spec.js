import { shallow } from 'vue-test-utils'
import Pipeline from '../Pipeline.vue'

describe('Pipeline.vue', () => {
  test('renders pipeline', () => {
    const wrapper = shallow(Pipeline)

    expect(wrapper.text()).toContain('Pipeline')
  })
})
