import { useState, useEffect, useRef } from 'react';
import Messages from './Messages';
import { db } from '../config/firebase-config';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import SendMessage from './SendMessage';

const style = {
  main: `flex flex-col p-[10px]`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timeStamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);


  console.log(messages)

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Messages key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Compoenent */}
      <SendMessage/>
    </>
  );
};

export default Chat;