import React, { Component } from 'react';

import 'normalize.css';
import '../reset.css';
import AppStyles from './styles/AppStyles';

const body = `a simple react boilerplate for single page web applications`;
let bodyArray = body.split('');
export default class App extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
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
  }

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    const { message } = this.state;
    return (
      <AppStyles>
        <header>
          fryerpan{' '}
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
