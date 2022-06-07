import { FC } from 'react';

import {
  ChatWrap,
  ChatItems,
} from './index.style';

import ChatItem from '~/components/chatbot/ChatItem'
import {Option} from "~/components/chatbot/ChatItem/index.style";
// import ChatInput from '~/components/chatbot/ChatInput'


import { data } from '~/assets/data';

const Chat: FC = () => {

  const chatList = []

  const getSelect = (v) => {
    console.log("> getSelect - v : ", v)
  }

  return (
    <ChatWrap>
      <ChatItems>
        <ChatItem list={data} />
        {/*{data && data.map(list => (*/}
        {/*  // chatData={ data } getSelect={ getSelect }*/}
        {/*  <ChatItem key={ list.value } list={list.children} />*/}
        {/*))}*/}
        {chatList && chatList.map(list => (
          // chatData={ data } getSelect={ getSelect }
          <ChatItem key={ list.value } list={list.children} />
        ))}
      </ChatItems>
      {/*<ChatInput/>*/}
    </ChatWrap>
  );
};

export default Chat;
