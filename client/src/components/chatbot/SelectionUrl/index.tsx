import { FC } from 'react';

import {
  Container,
  Options,
  Option,
} from './index.style';


interface Props {
  list: {
    value: number,
    parentValue: number,
    text: string,
    url: string,
  }[],
}

const SelectionUrl: FC<Props> = (props) => {

  return (
    <Container>
      <Options>
        {
          props.list.length > 0
            ? (
              <>
                {
                  props.list.map((data, index) => (
                    <Option key={ index } href={data.url} target="_blank">❓ { data.text }</Option>
                  ))}
              </>
            )
            : <NoData>데이터가 없습니다 ㅠ.ㅠ</NoData>
        }
      </Options>
    </Container>
  );
};

export default SelectionUrl;
