import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import EmitTest from '@/components/EmitTest'

describe('HelloWorld.vue', () => {
  let subjectWrapper, subjectInstance
  beforeEach(() => {
    subjectWrapper = shallow(EmitTest)
    subjectInstance = subjectWrapper.vm
  })

  it('should render correct contents', () => {
    expect(subjectWrapper.contains('.hello h1.test-class')).toBeTruthy()
  })

  it('should emit "emitTest" when emitTest method is called', () => {
    subjectInstance.emitTest()

    expect(subjectWrapper.emitted().emitTest).toBeTruthy()
    expect(subjectWrapper.emitted().emitTest.length).toEqual(1)
    expect(subjectWrapper.emitted().emitTest[0]).toEqual(['emitTestParameter'])
  })
})
