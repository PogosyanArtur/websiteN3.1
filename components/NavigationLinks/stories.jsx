import React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationLinks from './index';
const styles = {
  backgroundColor: "#ccc",
  minHeight: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    {storyFn()}
  </div>
);


storiesOf('NavigationLinks', module)
  .addDecorator(CenterDecorator)
  .add('default', () => <NavigationLinks 
                items={[
                  {
                    label: "главная",
                    to: "home",
                    active: true
                  },
                  {
                    label: "продукты",
                    to: "products",
                    active: ''
                  },
                  {
                    label: "о нас",
                    to: "aboutUs",
                    active: ''
                  },
                  {
                    label: "контакты",
                    to: "contacts",
                    active: ''
                  },
                ]}
  />)
