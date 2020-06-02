// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

// wersja 1 i 2
// const Person = props => {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <button onClick={props.delete}>Usuń</button>
//     </li>
//   )
// }

// wersja 3
const Person = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>Usuń</button>
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
  // wersja 1
  // handleDelete(id) {
  //   // console.log(this, id);
  //   const people = [...this.state.people];
  //   const index = people.findIndex(person => person.id === id)
  //   // console.log(index);
  //   people.splice(index, 1)
  //   // console.log(people);
  //   this.setState({
  //     people
  //   })
  // }

  // wersja 2
  // handleDelete (name){
  //   // let people = Array.from(this.state.people);
  //   let people = this.state.people.slice()
  //   // console.log(people);
  //   people = people.filter(person => name !== person.name)
  //   console.log(people);
  //   this.setState({
  //     people
  //   })
  // }

  // wersja 3
  handleDelete = name => {
    // let people = Array.from(this.state.people);
    let people = this.state.people.slice()
    // console.log(people);
    people = people.filter(person => name !== person.name)
    console.log(people);
    this.setState({
      people
    })
  }

  render() {

    // wersja 1
    // const people = this.state.people.map(person => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.id)}
    //   />
    // )
    // )

    // wersja 2
    // const people = this.state.people.map(person => (
    //   <Person
    //     key={person.id}
    //     name={person.name}
    //     delete={this.handleDelete.bind(this, person.name)}
    //   />
    // )
    // )

    // wersja 3
    const people = this.state.people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete}
      />
    )
    )


    return (
      <ul>
        {people}
      </ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById('root'))