import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navigation from './index';

const styles = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  };
  
  const CenterDecorator = (storyFn) => (
    <div style={styles}>
      { storyFn() }
    </div>
  );

storiesOf('Navigation', module)
    .addDecorator(CenterDecorator)
    .add('with text', () => (
        <Navigation/>
            ))
