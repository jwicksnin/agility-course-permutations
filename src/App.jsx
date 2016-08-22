import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

class App extends React.Component {
  render() {
    return <Form
      title='This is the app'
    />;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);