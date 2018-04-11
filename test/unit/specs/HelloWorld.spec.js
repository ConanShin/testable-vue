import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  let subjectWrapper, subjectInstance
  beforeEach(() => {
    subjectWrapper = shallow(HelloWorld)
    subjectInstance = subjectWrapper.vm
  })

  it('should render correct contents', () => {
    expect(subjectWrapper.contains('.hello h1.test-class')).toBeTruthy()
  })

  it('should call emit function with parameter', () => {
    subjectInstance.emitTest()

    expect(subjectWrapper.emitted().emitTest).toBeTruthy()
    expect(subjectWrapper.emitted().emitTest.length).toEqual(1)
    expect(subjectWrapper.emitted().emitTest[0]).toEqual(['emitTestParameter'])
  })
})
