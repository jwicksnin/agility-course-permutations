import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  render() {
    return <form>
    	<div>{this.props.title}</div>
    	<input
    		type="text"
    	/>
    </form>;
  }
}

export default (Form);