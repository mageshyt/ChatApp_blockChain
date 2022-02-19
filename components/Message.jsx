import React from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import Avatar from './Avatar'
import SendMessage from './SendMessage'
import TimeAgo from 'timeago-react'
// ! show last 15min msg
const last15min = 15
const Message = () => {
  const { user } = useMoralis()
  // ! pulling our message from the  moralis database
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) => query.ascending('createdAt'), // ! pull last 15min
    [],
    {
      // ! if we have a new message, then we will re-run the query
      live: true,
    }
  )
  const endOfMessage = React.useRef(null)
  return (
    <div className=" pb-56">
      <div className="my-5">
        <ByMoralis style={{ marginLeft: 'auto', marginRight: 'auto' }} />
      </div>

      {/* Render all the message */}
      <div className="space-y-10 p-4 ">
        {
          // ! if we have data, then we will render the message
          data &&
            data.map((message) => (
              <div>
                <RenderMessage message={message} key={message.id} />
              </div>
            ))
        }
      </div>

      {/* Sends msg function */}
      <div className="flex justify-center">
        <SendMessage endOfMessage={endOfMessage} />
      </div>

      <div
        ref={endOfMessage}
        className="mt-4 text-center text-xl text-gray-400 "
      >
        <p>You're up to date {user.getUsername()} 🎈</p>
      </div>
    </div>
  )
}

const RenderMessage = ({ message }) => {
  const isUserMessage = message.get('user') === useMoralis().user.getUsername() // ! we are checking if the message is from the current user

  return (
    <div
      className={` relative flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      }`}
    >
      {/* Avatar */}
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last'}`}>
        <Avatar userName={message.get('user')} />
      </div>
      <div
        className={`flex space-x-4 rounded-lg rounded-br-none p-3 ${
          isUserMessage ? ' bg-green-300' : 'bg-blue-300'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>
      {/* Time snap */}
      <TimeAgo
        className={`text-[10px]  text-gray-400 ${
          isUserMessage ? 'order-first pr-1' : ''
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? ' text-green-400' : ' text-blue-400'
        }  `}
      >
        {message.get('user')}
      </p>
    </div>
  )
}
export default Message
