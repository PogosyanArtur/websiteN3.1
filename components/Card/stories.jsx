import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index';

const styles = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:"30px"
  };
  
  const CenterDecorator = (storyFn) => (
    <div style={styles}>
      { storyFn() }
    </div>
  );

storiesOf('Card', module)
    .addDecorator(CenterDecorator)
    .add('with text', () => (
            <Card
                imageSrc={require('../../static/images/kroshka.jpg')}
                imageAlt="асфальтобетонная крошка"
                label="асфальтобетонная крошка"
                context="Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт."
                price="600"  
            />))
