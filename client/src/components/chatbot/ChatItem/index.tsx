import { FC } from 'react';

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


const ChatItem: FC = () => {

  const MENU_GUIDE = [
    { text: '스마트 편집 > 에디터 활용', value: 1 },
    { text: '스마트 편집 > HTML', value: 2 },
    { text: 'DB 관리', value: 3 },
    { text: '광고 관리', value: 4 },
    { text: '회원 관리', value: 5 },
    { text: '설정 변경', value: 6 },
    { text: '스마트 편집', value: 7 },
    { text: 'FAQ(자주 묻는 질문)', value: 8 },
  ];

  const MENU1 = [
    {
      text: '고정 배너 DB 영역에서 미노출',
      url: 'https://www.notion.so/DB-d25fd616b50746d2a673e862b09f653a'
    },
    {
      text: 'DB 팝업 적용',
      url: 'https://www.notion.so/DB-55d211165c89445b8d189fb5d5944d2f'
    },
    {
      text: 'DB 팝업 여러개 적용',
      url: 'https://www.notion.so/DB-cc931f69f054447aa570f602826b7731'
    },
  ]

  const MENU2 = []

  const FAQ_LIST = {
    '스마트편집': [
      {
        text: '다른페이지에서 작업한 댓글, 타이머, 롤링배너 복사',
        url: 'https://www.notion.so/0e559166797f45a1ac558bba8a119d50'
      },
      {
        text: '스크립트 설치방법',
        url: 'https://www.notion.so/4632e1d564a44b80a4a3358d2dffe90d'
      },
      {
        text: '한 페이지에 여러개의 스크립트 설치하는 방법',
        url: 'https://www.notion.so/1b38a9fd16464473bcbfd8132c26051b'
      },
      {
        text: '모든 페이지에 스크립트를 설치해야 할 때',
        url: 'https://www.notion.so/74e4de91b5b2467896d00339ab26d007'
      },
      {
        text: '쇼젯 스크립트 설치 방법',
        url: 'https://www.notion.so/cecf3e01d8124f6791e11a033a293388'
      },
      {
        text: 'GTM/GA 스크립트가 설치됐는지 확인하는 방법',
        url: 'https://www.notion.so/GTM-GA-97143f4efadb4e96b37f6f7e486d4728'
      },
      {
        text: '타불라 스크립트가 설치됐는지 확인하는 방법',
        url: 'https://www.notion.so/0c55c7c13a87455e92d061fd619bfae2'
      },
      {
        text: '페이스북 스크립트가 설치됐는지 확인하는 방법',
        url: 'https://www.notion.so/159ead31a5174cf984f79537b6626d19'
      },
    ],
    '광고 랜딩페이지': [
      {
        text: '마우스 우클릭, F12 방지 방법',
        url: 'https://www.notion.so/F12-8f8a4d992a41419f8ee38eb11cb88960'
      },
      {
        text: '배너 클릭시 전화 거는 방법',
        url: 'https://www.notion.so/a5799d9760c14838a0262d759b6eaa7a'
      },
    ],
    'DB 관리': [
      {
        text: '특정 매체 전송 실패',
        url: 'https://www.notion.so/828e8990810144bdb932d096a93457bb'
      },
      {
        text: '광고주 관리자로 DB발송',
        url: 'https://www.notion.so/DB-aa3523a3365f4a2d8b71f10ca53a2a90'
      },
    ]
  }

  const select = async (value) => {
    // api
    console.log("> select - value : ", value)
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
            <Message>👋 안녕하세요.<br/>아래 버튼을 클릭하면 자세한 안내를 도와드릴게요!</Message>
            {MENU_GUIDE.map(data => (
              <Button size="sm"
                      key={data.value}
                      onClick={() => select(data.value)}
              >{data.text}
              </Button>
            ))}
          </Wrapper>
        </Wrapper>
      </Item>


      <Item>
        <Profile/>
        <Wrapper>
          <Name>드림이</Name>
          <Wrapper>
            <Message>📢 <Selected>FAQ(자주 묻는 질문)</Selected>입니다.<br/>원하는 내용을 찾을 수 없다면 메일을 보내주세요!</Message>
            { Object.keys(FAQ_LIST).map((data, index) => (
              <Options key={ index } className="faq">
                <div>▶ { data }</div>
                {FAQ_LIST[data].map((faq, i) => (
                  <Option key={ i } href={faq.url} target="_blank">❓ { faq.text }</Option>
                ))}
              </Options>
            ))}
            <Button size="sm" onClick={() => back}>다시 선택하기 ↩</Button>
            <Button size="sm" onClick={() => reset}>처음부터 다시하기 ↩</Button>
            <Button size="sm" onClick={() => readySendMail}>🙏 개발팀에게 메일보내기 🙏</Button>
          </Wrapper>
        </Wrapper>
      </Item>


      <Item>
        <Profile/>
        <Wrapper>
          <Name>드림이</Name>
          <Wrapper>
            <Message>📢 <Selected>스마트 편집 &gt; 에디터 활용</Selected>입니다.</Message>
            <Options>
              {MENU1.map((data, index) => (
                <Option key={ index } href={data.url} target="_blank">❓ { data.text }</Option>
              ))}
            </Options>
            <Button size="sm" onClick={() => back}>다시 선택하기 ↩</Button>
            <Button size="sm" onClick={() => reset}>처음부터 다시하기 ↩</Button>
            <Button size="sm" onClick={() => readySendMail}>👉 FAQ(자주 묻는 질문)로 가기</Button>
          </Wrapper>
        </Wrapper>
      </Item>

      <Item>
        <Profile/>
        <Wrapper>
          <Name>드림이</Name>
          <Wrapper>
            <Message>📢 <Selected>스마트 편집 &gt; HTML</Selected>입니다.</Message>
            <Options>
              {
                MENU2.length > 0
                ? MENU2.map((data, index) => (
                  <Option key={ index } href={data.url} target="_blank">❓ { data.text }</Option>
                ))
                : <NoData>데이터가 없습니다 ㅠ.ㅠ</NoData>
              }
            </Options>
            <Button size="sm" onClick={() => back}>다시 선택하기 ↩</Button>
            <Button size="sm" onClick={() => reset}>처음부터 다시하기 ↩</Button>
            <Button size="sm" onClick={() => readySendMail}>👉 FAQ(자주 묻는 질문)로 가기</Button>
          </Wrapper>
        </Wrapper>
      </Item>


      <Item>
        <Profile/>
        <Wrapper>
          <Name>드림이</Name>
          <Wrapper>
            <Message>개발팀에게 보낼 메시지를 적어주세요! ✍</Message>
            <EmailTextarea></EmailTextarea>
            <Button size="sm" onClick={() => reset}>처음부터 다시하기 ↩</Button>
            <Button size="sm" onClick={() => back}>보내기 🙏</Button>
          </Wrapper>
        </Wrapper>
      </Item>
    </div>
  );
};

export default ChatItem;
