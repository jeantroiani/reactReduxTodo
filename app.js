import React from 'react';
import { render } from 'react-dom';
import Task from './Components/Task/Task';

// const appEl = document.querySelector('#app');
const appEl = document.getElementById('app');

render(<Task name="buy milk"/>, appEl);
