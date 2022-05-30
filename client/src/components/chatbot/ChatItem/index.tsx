import { FC } from 'react';
// import BotIcon from '~assets/img/bot.png';

import {
  Item,
  BotProfile
} from './index.style';

const ChatItem: FC = () => {

  return (
    <div>
      <Item>
        <div>
          <BotProfile>
            {/*<img src={BotIcon}/>*/}
          </BotProfile>
          {/*<div v-if="!isMe" class="chat-user">{{ item.user.name }}</div>*/}
          <div className="d-flex">
            {/*<div :class="['chat-message', { 'only-emoji' : isOnlyEmoji }]">{{ item.message }}</div>*/}
          </div>
        </div>
      </Item>
    </div>
  );
};

export default ChatItem;
