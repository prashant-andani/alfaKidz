import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

const components = require.context('../stories/', true, /\.stories\.js$/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
