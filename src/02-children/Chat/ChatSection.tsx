import { useEffect, useState } from 'react';
import ChatBox from './ChatBox';
import {
  postOneChat,
  getAllChat,
} from '../../03-controllers/apiControl';

function ChatSection({ chatId, areaTitle }: any) {
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [isLoadin, setIsloading] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isLoadin) {
      if (e.key === 'Enter' && e.shiftKey === false) {
        e.preventDefault();
        handlePost();
      }
    }
  };

  const handleGetAll = async (id: string) => {
    const allChat = await getAllChat(id);
    setAllPosts(allChat);
  };

  useEffect(() => {
    handleGetAll(chatId);
  }, [chatId]);

  const handlePost = async () => {
    const titleAndText: any = [
      {
        id: chatId,
        title: newTitle,
        content: newText,
        timeStamp: new Date().toLocaleString(),
        comments: [],
      },
    ];
    setIsloading(true);

    if (!newTitle || !newText) {
      alert('Title and text are required');
    } else {
      const postRes = await postOneChat(titleAndText);

      if (postRes.message === 'success') {
        await handleGetAll(chatId);
      } else {
        console.log(postRes);
        alert(`NOT COOL! Your post was flagged as ${postRes.message}`);
      }

      setNewTitle('');
      setNewText('');
    }

    setIsloading(false);
  };

  return (
    <section onKeyDown={handleKeyDown} className="chat-section">
      <h1 className="chat-section__area-title">{areaTitle}</h1>
      <div className="chat-section__create-post">
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols={60}
          rows={4}
          value={newText}
          placeholder="Write a post"
          onChange={(e) => setNewText(e.target.value)}
        ></textarea>

        {isLoadin ? (
          <p className="chat-section__loading"> LOADING... </p>
        ) : (
          <button
            className="chat-section__post-button"
            onClick={() => handlePost()}
          >
            {' '}
            Post{' '}
          </button>
        )}
      </div>
      <div className="chat-section__chat-boxes">
        {allPosts.map((post, index) => {
          return <ChatBox post={post} key={`key_${index}`} />;
        })}
      </div>
    </section>
  );
}

export default ChatSection;
