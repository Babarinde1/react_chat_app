import React from 'react'
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="fa4fba5c-31cc-4522-8fa5-8d0ba9cd8cc9"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App