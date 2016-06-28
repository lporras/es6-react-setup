import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [
          {id: 1, name: 'Simon Bailey'}, {id: 2, name: 'Thomas Burleson'},
          {id: 3, name: 'Luis Porras'}, {id: 4, name: 'Elvira Paez'},
          {id: 5, name: 'Luis Porras'}, {id: 6, name: 'Tainy Gomez'},
          {id: 7, name: 'Luis Porras'}, {id: 8, name: 'Kelly Bravo'},
          {id: 9, name: 'Luis Porras'}, {id: 10, name: 'Kelly Bravo'}
        ]
      }
    }
    render() {
      let rows = this.state.data.map( person => {
        return <PersonRow key={person.id} data={person} />
      });
      return <table>
        <tbody>{rows}</tbody>
      </table>
    }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
