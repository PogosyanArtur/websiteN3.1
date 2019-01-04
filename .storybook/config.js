import { configure } from '@storybook/react';

const req = require.context('../components', true, /stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);