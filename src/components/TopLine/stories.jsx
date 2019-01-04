import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopLine from './index';

storiesOf('TopLine', module)
  .add('with text', () => <TopLine/>)
