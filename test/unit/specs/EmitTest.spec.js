import { shallow, createLocalVue } from 'vue-test-utils'
import EmitTest from '@/components/EmitTest'

describe('EmitTest.vue', () => {
  let subjectWrapper, subjectInstance
  beforeEach(() => {
    subjectWrapper = shallow(EmitTest)
    subjectInstance = subjectWrapper.vm
  })

  it('should render correct contents', () => {
    expect(subjectWrapper.contains('h1')).toBeTruthy()
  })

  it('should emit "emitTest" when emitTest method is called', () => {
    subjectInstance.emitTest()

    expect(subjectWrapper.emitted().emitTest).toBeTruthy()
    expect(subjectWrapper.emitted().emitTest.length).toEqual(1)
    expect(subjectWrapper.emitted().emitTest[0]).toEqual(['emitTestParameter'])
  })
})
