import { useAppSelector } from '../../hooks/redux';
import Message from '../App/Message/Message';
import './Message.scss';

function Messages() {
  const messages = useAppSelector((state) => state.chat.messages);

  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          content={message.content}
        />
      ))}
    </div>
  );
}

export default Messages;
