// components/ChatBot.js
import React from 'react';

const ChatBot = ({ embedCode }) => {
  return (
    <div className="w-96 h-full p-4 border rounded-lg shadow-sm">
      <div className='w-full h-full' dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
};

export default ChatBot;
