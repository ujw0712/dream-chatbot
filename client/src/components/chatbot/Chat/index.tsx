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

// const MSG = (v) => `π’ <Selected>${v}</Selected>μ λν λ΄μ©μ΄μμ!`
const MAG_WELCOME = `π μλνμΈμ.\n μλ λ²νΌμ ν΄λ¦­νλ©΄ μμΈν μλ΄λ₯Ό λμλλ¦΄κ²μ!`
const MSG_FAQ = `π’ <Selected>FAQ(μμ£Ό λ¬»λ μ§λ¬Έ)</Selected>μλλ€.\n μνλ λ΄μ©μ μ°Ύμ μ μλ€λ©΄ λ©μΌμ λ³΄λ΄μ£ΌμΈμ!`
const MSG_AGAIN = `μλ λ²νΌμ ν΄λ¦­νλ©΄ μμΈν μλ΄λ₯Ό λμλλ¦΄κ²μ!`
const AGAIN = `λ€μ μ ννκΈ° β©`
const INIT = `μ²μλΆν° λ€μνκΈ° β©`
const FAQ = `π FAQ(μμ£Ό λ¬»λ μ§λ¬Έ)λ‘ κ°κΈ°`


const Chat: FC = () => {
  const MSG = (v) => {
    return (
      `π’ <Selected>${v}</Selected>μ λν λ΄μ©μ΄μμ!`
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
              <NoData>λ°μ΄ν°κ° μμ΅λλ€ γ .γ </NoData>
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
