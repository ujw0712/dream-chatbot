import { FC, useState } from 'react';

import {
  ChatWrap,
  ChatItems,
} from './index.style';

import ChatItem from '~/components/chatbot/ChatItem'
import UserChatItem from '~/components/chatbot/UserChatItem'
import {Option} from "~/components/chatbot/ChatItem/index.style";
// import ChatInput from '~/components/chatbot/ChatInput'


import { data } from '~/assets/data';
import Button from "~/components/common/Button";

interface Props {
  value: number,
  parentValue: number,
  text: string,
  url: string,
}

const WELCOME_MAG = `👋 안녕하세요.\n 아래 버튼을 클릭하면 자세한 안내를 도와드릴게요!`
const FAQ_MSG = `📢 <Selected>FAQ(자주 묻는 질문)</Selected>입니다.\n 원하는 내용을 찾을 수 없다면 메일을 보내주세요!`
const MSG = (v) => `📢 ${v}에 대한 내용이에요!`
// const MSG = (v) => `📢 <Selected>${v}</Selected>입니다.`

const Chat: FC = () => {

  let [chatList, setChatList] = useState([{isBot: true, msg: WELCOME_MAG},])
  let [listForSelect, setListForSelect] = useState(data)
  // data
  // chatList = [
  //   {isBot: true, msg: WELCOME_MAG},
  // ]

  const initList = data

  const getSelect = (v) => {
    console.log("> getSelect - v : ", v)
  }

  // listForSelect = data

  const select = (_data) => {
    chatList.push({
      isBot: false,
      msg: _data.text,
    })
    if (_data.hasOwnProperty('children')) {
      chatList.push({
        isBot: true,
        msg: MSG(_data.text)
      })
    }
    setChatList(chatList)
    console.log("> chatList.length : ", chatList.length)

    // @ts-ignore
    setListForSelect(data.find(l => l.value === _data.value).children)
  }

  return (
    <ChatWrap>
      <ChatItems>
        {/*<ChatItem data={data} />*/}
        {/*{data && data.map(list => (*/}
        {/*  // chatData={ data } getSelect={ getSelect }*/}
        {/*  <ChatItem key={ list.value } list={list.children} />*/}
        {/*))}*/}
        {chatList.map((data, index) => (
          // chatData={ data } getSelect={ getSelect }
          data.isBot
            ? <ChatItem key={ `chat${index}` } data={data} />
            : <UserChatItem key={ `chat${index}` } data={data} />
        ))}

        <div>
          {listForSelect.map(data => (
            <Button key={ data.value } onClick={() => select(data)}>{ data.text }</Button>
          ))}
        </div>
      </ChatItems>
      {/*<ChatInput/>*/}
    </ChatWrap>
  );
};

export default Chat;
