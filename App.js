import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        txt: 'this is the state txt',
        cat: 0
      };

    }
    update(e) {
      this.setState({txt: e.target.value})
    }
    render() {
      return (
        <div>
          <input type='text' onChange={this.update.bind(this)}/>
          <h1>{this.state.txt}</h1>
          <p>{this.state.cat}</p>
          <b>bold</b>
        </div>
      );
    }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text'
}

//const App = () => <h1>Hello Eggheads</h1>
//export default App;

ReactDOM.render(
  <App cat={5}/>,
  document.getElementById('app')
)
