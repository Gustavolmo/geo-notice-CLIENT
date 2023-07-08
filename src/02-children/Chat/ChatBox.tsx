
import { useState } from 'react';

function ChatBox({ post }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="chat-section__single-box">
      <div className="chat-section__post-title">
        <h2>{post.title}</h2>
        <button className='chat-section__read-more' onClick={expandToggle}>Read</button>
      </div>
      <h6>{post.timeStamp}</h6>
      {isExpanded && (
        <>
          <p>{post.content}</p>
        </>
      )}
    </article>
  );
}

export default ChatBox;
