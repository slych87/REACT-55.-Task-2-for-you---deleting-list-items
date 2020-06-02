const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  )
}


class List extends React.Component {

  state = {
    people: [
      { id: 10, name: 'Jan K.' },
      { id: 20, name: 'Piotr C.' },
      { id: 30, name: 'Marysia W.' },
      { id: 40, name: 'John S.' },
    ]
  }
  handelDelete = (id) => {
    const people = [...this.state.people]
    const index = people.findIndex(person => person.id === id)
    people.splice(index, 1);
    this.setState({
      people
    })
  }

  render() {
    return (
      <ul>{this.state.people.map(person => <Person key={person.id} name={person.name} delete={this.handelDelete.bind(this, person.id)} />)}</ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'))