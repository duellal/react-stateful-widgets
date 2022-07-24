import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components'

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';
import Theme from "./theme/theme"

render(
  <ThemeProvider theme={Theme}>
    <>
      <Counter />
      <Moods />
      <Spinner />
      <Input />
      <Squares />
      <Programmers />
    </>
  </ThemeProvider>
  ,
  document.querySelector('#root')
);
