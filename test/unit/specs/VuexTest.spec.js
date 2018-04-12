import { shallow } from 'vue-test-utils'
import MockStoreBuilder from 'vuex-test-util'
import realStore from '@/store'
import VuexTest from '@/components/VuexTest'

describe('VuexTest.vue', () => {
  let subjectWrapper, subjectInstance, store
  beforeEach(() => {
    store = new MockStoreBuilder(realStore)

    subjectWrapper = shallow(VuexTest, { store: store.inject })
    subjectInstance = subjectWrapper.vm
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should display default name Conan', () => {
    expect(subjectWrapper.find('p').text()).toEqual('Conan')
  })

  it('should call setNameTo method when triggered enter from input field', () => {
    subjectInstance.setNameTo = jest.fn()
    subjectWrapper.update()

    expect(subjectInstance.setNameTo).not.toBeCalled()

    subjectWrapper.find('input').trigger('keyup.enter')

    expect(subjectInstance.setNameTo).toBeCalled()
  })

  it('should dispatch action setNameTo when setNameTo method is called', () => {
    subjectWrapper.find('input').element.value = "New Name"
    subjectWrapper.update()

    expect(store.actions.setNameTo).not.toBeCalled()

    subjectInstance.setNameTo()

    expect(store.actions.setNameTo.mock.calls).toHaveLength(1)
    expect(store.actions.setNameTo.mock.calls[0][1]).toEqual('New Name')
    expect(store.actions.setNameTo).toBeActionCalledWith("New Name")
  })

  it('should dispatch action actionWithoutParameter when methodInvokingAction is called without parameter', () => {
    expect(store.actions.actionWithoutParameter).not.toBeCalled()

    subjectInstance.methodInvokingActionNoParam()

    expect(store.actions.actionWithoutParameter).toBeCalled()
  })

  it('shoud disptch action actionWithParameter when methodInvokingAction is called with one parameter', () => {
    expect(store.actions.actionWithParameter).not.toBeCalled()

    subjectInstance.methodInvokingActionOneParam('single parameter')

    expect(store.actions.actionWithParameter).toBeActionCalledWith('single parameter')
  })

  it('should dispatch action actionWithMultipleParameters when methodInvokingAction is called with multiple parameters', () => {
    expect(store.actions.actionWithMultipleParameters).not.toBeCalled()

    subjectInstance.methodInvokingActionTwoParams('parameter1', 'parameter2')

    expect(store.actions.actionWithMultipleParameters).toBeActionCalledWith({firstParam: 'parameter1', secondParam: 'parameter2'})
  })
})
