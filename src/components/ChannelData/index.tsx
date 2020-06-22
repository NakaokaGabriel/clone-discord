import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Nakaoka Gabriel"
          date="02/02/2020"
          content="Salve cachorro"
        />

        <ChannelMessage
          author="Mibr ronoldo"
          date="02/02/2020"
          isBot
          content={
            <>
              <Mention>@Ronoldo</Mention>, salve meu mano
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />

        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
