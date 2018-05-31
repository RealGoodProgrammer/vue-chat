import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import Login from '@/components/Login'

describe('Login', () => {
  const loginSpy = sinon.spy(
    Login.methods,
    'login'
  )

  it('Must calls login method by pressing the button', () => {
    let wrapper = shallowMount(Login)

    wrapper.find('button').trigger('click')

    expect(loginSpy.calledOnce).to.equals(true)
    loginSpy.restore()
  })

  it('Must calls login method by pressing the Enter', () => {
    let wrapper = shallowMount(Login)
    let nameField = wrapper.find('#name_field')

    nameField.trigger('focus')
    nameField.trigger('keyup.enter')

    expect(loginSpy.calledOnce).to.equals(true)
    loginSpy.restore()
  })
})
