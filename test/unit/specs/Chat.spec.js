import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import Chat from '@/components/Chat'

describe('Chat', () => {
  it('Must calls sendMessage method by pressing the Enter', () => {
    const sendMessageSpy = sinon.spy(
      Chat.methods,
      'sendMessage'
    )
    let wrapper = shallowMount(Chat)
    let messageField = wrapper.find('#message_field')

    messageField.trigger('focus')
    messageField.trigger('keyup.enter')

    expect(sendMessageSpy.calledOnce).to.equals(true)
    sendMessageSpy.restore()
  })
})
