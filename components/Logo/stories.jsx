import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './index';

const styles = {
  backgroundColor: "#ccc",
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

storiesOf('Logo', module)
  .addDecorator(CenterDecorator)
  .add('default', () => <Logo/>)
