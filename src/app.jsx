import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>Hello this is the app</div>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);