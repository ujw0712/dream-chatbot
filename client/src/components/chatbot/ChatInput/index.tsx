import { FC } from 'react';

import S from './index.style';

const ChatInput: FC = () => {

  return (
    <div className="chat-input-div">
      <div className="chat-input">
        <div>
          {/*<textarea ref="chatMessage" class="chat-textarea" rows="1" v-model="message" placeholder="메시지 보내기" @keydown.stop="keydown($event)"/>*/}
        </div>
        <div className="chat-btn-div">
          <div className="more-btn-div">
            {/*<div><font-awesome-icon icon="plus" /></div>*/}
            {/*<div className="chat-emoji-div" @click="openEmoji" v-click-outside="closeEmoji">*/}
            {/*<VuemojiPicker v-if="isOpenEmoji" :locale="'kr'" @emojiClick="addEmoji" class="chat-emoji" />*/}
          </div>
        </div>
        {/*<div :class="['chat-save-btn', { 'active' : message }]" @click="send"><font-awesome-icon icon="paper-plane" /></div>*/}
      </div>
    </div>
  );
};

export default ChatInput;
