import Vue from 'vue';

import {configTheme} from 'utils/app';
import App from './App';

async function init() {
  await configTheme();

  try {
    await document.fonts.load('400 14px Roboto');
    await document.fonts.load('500 14px Roboto');
  } catch (err) {}

  new Vue({
    el: '#app',
    render: h => h(App)
  });
}

init();
