import { shallow } from 'vue-test-utils'
import MockStoreBuilder from '../MockStoreBuilder'
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

    expect(store.actions.setNameTo).toBeActionCalledWith("New Name")
  })
})
