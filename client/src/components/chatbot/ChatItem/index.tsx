import { FC, useEffect } from 'react';

import {
  Item,
  Profile,
  Wrapper,
  Name,
  Message,
  NoData,
  Selected,
  Options,
  Option,
  EmailTextarea,
} from './index.style';

import Button from '~/components/common/Button';

interface Props {
  data: {
    isBot: boolean,
    msg: string,
  };
}

const ChatItem: FC<Props> = (props) => {
  let currentValue = []
  // console.log("> data : ", data)

  const select = (value) => {
    console.log("> value : ", value)
    // getSelect(value)
  }

  const back = () => {

  }

  const reset = () => {

  }

  const readySendMail = () => {

  }

  return (
    <div>
      <Item>
        <Profile/>
        <Wrapper>
          <Name>드림이</Name>
          <Wrapper>
            <Message>
              {
                props.data.msg.split('\n').map( line => {
                  return (<span>{line}<br/></span>)
                })
              }
            </Message>
          </Wrapper>
        </Wrapper>
      </Item>

      {/*<Item>*/}
      {/*  <Profile/>*/}
      {/*  <Wrapper>*/}
      {/*    <Name>드림이</Name>*/}
      {/*    <Wrapper>*/}
      {/*      <Message>📢 <Selected>FAQ(자주 묻는 질문)</Selected>입니다.<br/>원하는 내용을 찾을 수 없다면 메일을 보내주세요!</Message>*/}
      {/*      { Object.keys(FAQ_LIST).map((data, index) => (*/}
      {/*        <Options key={ index } className="faq">*/}
      {/*          <div>▶ { data }</div>*/}
      {/*          {FAQ_LIST[data].map((faq, i) => (*/}
      {/*            <Option key={ i } href={faq.url} target="_blank">❓ { faq.text }</Option>*/}
      {/*          ))}*/}
      {/*        </Options>*/}
      {/*      ))}*/}
      {/*      <Button onClick={() => back}>다시 선택하기 ↩</Button>*/}
      {/*      <Button onClick={() => reset}>처음부터 다시하기 ↩</Button>*/}
      {/*      <Button onClick={() => readySendMail}>🙏 개발팀에게 메일보내기 🙏</Button>*/}
      {/*    </Wrapper>*/}
      {/*  </Wrapper>*/}
      {/*</Item>*/}


      {/*<Item>*/}
      {/*  <Profile/>*/}
      {/*  <Wrapper>*/}
      {/*    <Name>드림이</Name>*/}
      {/*    <Wrapper>*/}
      {/*      <Message>📢 <Selected>스마트 편집 &gt; 에디터 활용</Selected>입니다.</Message>*/}
      {/*      <Options>*/}
      {/*        {MENU1.map((data, index) => (*/}
      {/*          <Option key={ index } href={data.url} target="_blank">❓ { data.text }</Option>*/}
      {/*        ))}*/}
      {/*      </Options>*/}
      {/*      <Button onClick={() => back}>다시 선택하기 ↩</Button>*/}
      {/*      <Button onClick={() => reset}>처음부터 다시하기 ↩</Button>*/}
      {/*      <Button onClick={() => readySendMail}>👉 FAQ(자주 묻는 질문)로 가기</Button>*/}
      {/*    </Wrapper>*/}
      {/*  </Wrapper>*/}
      {/*</Item>*/}

      {/*<Item>*/}
      {/*  <Profile/>*/}
      {/*  <Wrapper>*/}
      {/*    <Name>드림이</Name>*/}
      {/*    <Wrapper>*/}
      {/*      <Message>📢 <Selected>스마트 편집 &gt; HTML</Selected>입니다.</Message>*/}
      {/*      <Options>*/}
      {/*        {*/}
      {/*          MENU2.length > 0*/}
      {/*          ? MENU2.map((data, index) => (*/}
      {/*            <Option key={ index } href={data.url} target="_blank">❓ { data.text }</Option>*/}
      {/*          ))*/}
      {/*          : <NoData>데이터가 없습니다 ㅠ.ㅠ</NoData>*/}
      {/*        }*/}
      {/*      </Options>*/}
      {/*      <Button onClick={() => back}>다시 선택하기 ↩</Button>*/}
      {/*      <Button onClick={() => reset}>처음부터 다시하기 ↩</Button>*/}
      {/*      <Button onClick={() => readySendMail}>👉 FAQ(자주 묻는 질문)로 가기</Button>*/}
      {/*    </Wrapper>*/}
      {/*  </Wrapper>*/}
      {/*</Item>*/}


      {/*<Item>*/}
      {/*  <Profile/>*/}
      {/*  <Wrapper>*/}
      {/*    <Name>드림이</Name>*/}
      {/*    <Wrapper>*/}
      {/*      <Message>개발팀에게 보낼 메시지를 적어주세요! ✍</Message>*/}
      {/*      <EmailTextarea></EmailTextarea>*/}
      {/*      <Button onClick={() => reset}>처음부터 다시하기 ↩</Button>*/}
      {/*      <Button onClick={() => back}>보내기 🙏</Button>*/}
      {/*    </Wrapper>*/}
      {/*  </Wrapper>*/}
      {/*</Item>*/}
    </div>
  );
};

export default ChatItem;
