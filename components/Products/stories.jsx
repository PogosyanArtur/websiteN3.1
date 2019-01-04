import React from 'react';
import { storiesOf } from '@storybook/react';
import Products from './index';

storiesOf('Products', module)
  .add('default', () => <Products/>)
