import React from 'react'
import { useMoralis } from 'react-moralis'

const SendMessage = ({ endOfMessage }) => {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = React.useState('')
  const Send_message = (e) => {
    e.preventDefault()
    if (!message) return
    const Messages = Moralis.Object.extend('Messages')
    console.log('👉🏻   ~ SendMessage ~ Messages', Messages)
    const messages = new Messages()

    messages.set('message', message)

    messages
      .save({
        message: message,
        user: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {},
        (error) => {
          //! when save fails  then throw the erroe
          console.log('Error -->', error.message)
        }
      )
    console.log('messages 👉', messages)
    //! after message is sent, scroll to bottom
    endOfMessage.current.scrollIntoView({ behavior: 'smooth' })
    setMessage('')
  }
  return (
    <form
      action="text"
      className=" fixed  bottom-10 flex w-11/12  rounded-full border-4 border-sky-300  bg-black px-6 py-4  opacity-80 shadow-xl"
    >
      <input
        type="text"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter you message  ${user.getUsername()}`}
        className="h-full w-full flex-grow bg-transparent  pr-5 text-white placeholder-gray-400  outline-none"
      />
      {/* send btn */}
      <button
        onClick={Send_message}
        type="submit"
        className="font-semibold text-green-300"
      >
        send
      </button>
    </form>
  )
}

export default SendMessage
