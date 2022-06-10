import { FC, useRef, useCallback, useState, useEffect } from 'react';

import {
  ChatWrap,
  ChatItems,
  ButtonContainer,
  NoData,
  Selected,
} from './index.style';

import ChatItem from '~/components/chatbot/ChatItem'
import UserChatItem from '~/components/chatbot/UserChatItem'
import SelectionUrl from '~/components/chatbot/SelectionUrl'


import { data } from '~/assets/data';
import Button from "~/components/common/Button";

interface Props {
  value: number,
  parentValue: number,
  text: string,
  url: string,
}

// const MSG = (v) => `📢 <Selected>${v}</Selected>에 대한 내용이에요!`
const MAG_WELCOME = `👋 안녕하세요.\n 아래 버튼을 클릭하면 자세한 안내를 도와드릴게요!`
const MSG_FAQ = `📢 <Selected>FAQ(자주 묻는 질문)</Selected>입니다.\n 원하는 내용을 찾을 수 없다면 메일을 보내주세요!`
const MSG_AGAIN = `아래 버튼을 클릭하면 자세한 안내를 도와드릴게요!`
const AGAIN = `다시 선택하기 ↩`
const INIT = `처음부터 다시하기 ↩`
const FAQ = `👉 FAQ(자주 묻는 질문)로 가기`


const Chat: FC = () => {
  const MSG = (v) => {
    return (
      `📢 <Selected>${v}</Selected>에 대한 내용이에요!`
    )
  }

  let [chatList, setChatList] = useState([{isBot: true, msg: MAG_WELCOME}])
  let [listForSelect, setListForSelect] = useState(data)


  useEffect(() => {
    scrollToBottom()
  })

  const scrollRef = useRef();
  const scrollToBottom = () => {
    // @ts-ignore
    scrollRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  const init = () => {
    setChatList([{isBot: true, msg: MAG_WELCOME}])
    setListForSelect(data)
  }

  const select = (_data) => {
    chatList.push({isBot: false, msg: _data.text})
    if (_data.hasOwnProperty('children')) {
      chatList.push({
        isBot: true,
        msg: MSG(_data.text)
      })
    }
    setChatList(chatList)
    // @ts-ignore
    setListForSelect(data.find(l => l.value === _data.value).children)
  }

  const again = () => {
    chatList.push({isBot: false, msg: AGAIN})
    chatList.push({isBot: true, msg: MSG_AGAIN,})
    setChatList(chatList)
    setListForSelect(data)
  }

  const faqList = () => {
    return data.find(d => d.value === 8000)
  }

  return (
    <ChatWrap>
      <ChatItems>
        {chatList.map((data, index) => (
          data.isBot
            ? (
              // @ts-ignore
              <ChatItem key={index} data={data} />
            )
            : (
              // @ts-ignore
              <UserChatItem key={index} data={data} />
            )
        ))}



        {
          listForSelect.length === 0 && (
            <>
              <NoData>데이터가 없습니다 ㅠ.ㅠ</NoData>
              <ButtonContainer>
                <Button onClick={() => again()}>{AGAIN}</Button>
                <Button onClick={() => init()}>{INIT}</Button>
                <Button onClick={() => select(8000)}>{FAQ}</Button>
              </ButtonContainer>
            </>
          )
        }

        {
          listForSelect.length > 0 && listForSelect[0].url && (
            <>
              {
                // @ts-ignore
                <SelectionUrl list={listForSelect}/>
              }
              <ButtonContainer>
                <Button onClick={() => again()}>{AGAIN}</Button>
                <Button onClick={() => init()}>{INIT}</Button>
                <Button onClick={() => select(8000)}>{FAQ}</Button>
              </ButtonContainer>
            </>
          )
        }

        {
          listForSelect.length > 0 && !listForSelect[0].url && (
            <ButtonContainer>
              {
                listForSelect.map(data => (
                  <Button key={ data.value } onClick={() => select(data)}>{ data.text }</Button>
                ))
              }
            </ButtonContainer>
          )
        }
      </ChatItems>
      <div ref={scrollRef}></div>
    </ChatWrap>
  );
};

export default Chat;
