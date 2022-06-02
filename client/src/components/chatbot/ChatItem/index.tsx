import { FC } from 'react';

import {
  Item,
  Profile,
  Wrapper,
  Name,
  Message,
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
  ];


  const select = async (value) => {
    // api
    console.log("> select - value : ", value)
  }

  return (
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
  );
};

export default ChatItem;
