import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import NotFoundComponent from '@/components/NotFoundComponent'

describe('NotFoundComponent', () => {
  const backToMainSpy = sinon.spy(
    NotFoundComponent.methods,
    'backToMain'
  )

  it('Must calls backToMain method by pressing the Enter', () => {
    let wrapper = shallowMount(NotFoundComponent)

    wrapper.find('button').trigger('click')

    expect(backToMainSpy.calledOnce).to.equals(true)
    backToMainSpy.restore()
  })
})
