import React from 'react';
import { storiesOf } from '@storybook/react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import ContactItem from './index';

const styles = {
  backgroundColor: "#ccc",
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    {storyFn()}
  </div>
);

storiesOf('ContactItem', module)
  .addDecorator(CenterDecorator)
  .add('mail width icon', () => (
    <div>
      <ContactItem
        label={'pog0290@gmail.com'}
        href="mailto:pog0290@gmail.com"
        icon={faEnvelope}
        size='lg'
      />
    </div>
  ))
  .add('mail without icon', () => (
    <div>
      <ContactItem
        label={'pog0290@gmail.com'}
        href="mailto:pog0290@gmail.com"
      />
    </div>
  ))
  .add('phone width icon', () => (
    <ContactItem
        label={'+7 (968) 3 907 907'} 
        href="tel:+79683907907"
        icon={faPhone}
        size='lg'
        rotation={90}
    />
    ))
  .add('phone without icon', () => (
    <ContactItem
        label={'+7 (968) 3 907 907'} 
        href="tel:+79683907907"
    />
    ))
