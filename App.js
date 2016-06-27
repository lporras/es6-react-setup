import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
      super();
      this.state = {txt: ''};
      this.update = this.update.bind(this);
    }
    update(e) {
      this.setState({txt: e.target.value})
    }
    render() {
      return (
        <div>
          <Widget txt={this.state.txt} update={this.update} />
        </div>
      );
    }
}

const Widget = (props) => {
  return (
    <div>
      <input type='text' onChange={props.update}/>
      <h1>{props.txt}</h1>
    </div>
  );
}

App.propTypes = {
  txt: React.PropTypes.string
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
