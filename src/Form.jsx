import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obstacles: ''
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleObstaclesChange = this.handleObstaclesChange.bind(this);
  }
  handleNumberChange(e) {
    this.setState({
      count: e.target.value
    });
  }
  handleObstaclesChange(e) {
    this.setState({
      obstacles: e.target.value
    });
  }
  render() {
    return <form>
      <div>{this.props.title}</div>
      <label>Number of obstacles in the course: 
        <input 
          type="text" 
          onChange={this.handleNumberChange}
          value={this.state.count}
      />
      </label>
      <label>List of obstacles available (comma-separated) 
        <input 
          type="text"
          onChange={this.handleObstaclesChange}
          value={this.state.obstacles}
        />
      </label>
    </form>;
  }
}

export default (Form);