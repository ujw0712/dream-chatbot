import { FC } from 'react';

import {
  Item,
  BotProfile,
  BotName,
  BotMessage,
} from './index.style';

const ChatItem: FC = () => {

  return (
    <div>
      <Item>
        <BotProfile/>
        <BotName>드림이</BotName>
        <BotMessage>dddd</BotMessage>
      </Item>
    </div>
  );
};

export default ChatItem;
