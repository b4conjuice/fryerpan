import React, { Component } from 'react';
import 'babel-core/register';
import 'babel-polyfill';

import 'normalize.css';
import '../reset.css';
import AppStyles from './styles/AppStyles';

const body = `a simple react boilerplate for single page web applications`;
let bodyArray = body.split('');
export default class App extends Component {
  state = {
    fry: 'fryerpan',
    message: '',
  };

  componentDidMount = async () => {
    setInterval(() => {
      if (bodyArray.length > 0) {
        const textarea = document.querySelector('textarea');
        const content = textarea.value;
        const next = bodyArray.shift();
        textarea.value = content + next;
      } else if (document.querySelector('textarea').value.length > 0) {
        const textarea = document.querySelector('textarea');
        const content = textarea.value;
        textarea.value = content.slice(0, -1);
      } else bodyArray = body.split('');
    }, 100);

    const url = `/api`;
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      const { message: fry } = json;
      this.setState({ fry });
    } else {
      console.log(`res not ok from ${url}`);
    }
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    const { fry, message } = this.state;
    return (
      <AppStyles>
        <header>
          {fry}{' '}
          <span role="img" aria-label="frying-egg">
            🍳
          </span>
        </header>
        <main>
          <textarea
            readOnly
            style={{
              height: '100%',
              width: '100%',
              background: 'black',
              color: 'green',
              border: 'none',
              resize: 'none',
            }}
            value={message}
          />
        </main>
        <footer>
          - niello{' '}
          <span role="img" aria-label="bacon">
            🥓
          </span>
        </footer>
      </AppStyles>
    );
  }
}
