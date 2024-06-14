// components/MultiComponentWidget.js
import React from 'react';
import LiveVideoConferencing from './LiveVideoConferencing';
import ShopifyProducts from './ShopifyProducts';
import ChatBot from './ChatBot';

const MultiComponentWidget = () => {
  const videoEmbedCode = process.env.NEXT_PUBLIC_VIDEO_EMBED_CODE;
  const shopifyStore = process.env.NEXT_PUBLIC_SHOPIFY_STORE;
  const shopifyApiKey = process.env.NEXT_PUBLIC_SHOPIFY_API_KEY;
  const chatBotEmbedCode = process.env.NEXT_PUBLIC_CHATBOT_EMBED_CODE;

  return (
    <div className="flex h-screen justify-center gap-4 flex-wrap w-full">
      <div className="top-third">
        <LiveVideoConferencing embedCode={videoEmbedCode} />
      </div>
      <div className="middle-third">
        <ShopifyProducts shopifyStore={shopifyStore} apiKey={shopifyApiKey} />
      </div>
      <div className="bottom-third">
        <ChatBot embedCode={chatBotEmbedCode} />
      </div>
    </div>
  );
};

export default MultiComponentWidget;
