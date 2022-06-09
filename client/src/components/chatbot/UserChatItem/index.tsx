import { FC } from 'react';

import {
  Item,
  Message,
} from './index.style';

interface Props {
  data: {
    isBot: boolean,
    msg: string,
  };
}

const UserChatItem: FC<Props> = (props) => {

  return (
    <div>
      {
        props.data.isBot
      }
      <Item>
        <Message>
          {
            props.data.msg.split('\n').map( line => {
              return (<span>{line}<br/></span>)
            })
          }
        </Message>
      </Item>
    </div>
  );
};

export default UserChatItem;
