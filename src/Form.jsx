import React from 'react';
import ReactDOM from 'react-dom';
import { calculator } from '../modules/calculator';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obstacles: '',
      permutations: null
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleObstaclesChange = this.handleObstaclesChange.bind(this);
    this.submit = this.submit.bind(this);
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
  submit(e) {
    e.preventDefault();
    this.getPermutations(this.state.count, this.state.obstacles);
  }
  getPermutations(count, obstacles) {
    // TODO get the actual number of permutations
    this.setState({ permutations: calculator() });
  }
  render() {
    const permutationDisplay = (
      <div>
        {this.state.permutations}
      </div>
    );
    return <form
        onSubmit={this.submit}
      >
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
      <button>
        Hello
      </button>
      {this.state.permutations && permutationDisplay}
    </form>;
  }
}

export default (Form);