import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ContactItem from './index';

const styles = {
  backgroundColor:"#ccc",
  height:'60px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

storiesOf('ContactItem', module)
  .addDecorator(CenterDecorator)
  .add('with phone text', () => <ContactItem href="tel:+79670166177" label="+7 (967) 016 61 77"/>)
  .add('with email text', () => <ContactItem href="meilto:pa160290@yandex.ru" label="pa160290@yandex.ru"/>)
