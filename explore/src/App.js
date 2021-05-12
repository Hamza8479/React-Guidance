import React, { Component } from 'react'
import './App.css';
import Person from './components/Person';
class App extends Component {
  state = {
          people : [
              {name:'Hamza', age:22},
              {name:'Munsif', age:23},
              {name:'Arslan', age:21}
          ],
          other:'other Data'
        } 

          switchNameHandler = () =>{
            this.setState({
              people : [
                  {name:'Hamza Zaman', age:22},
                  {name:'Munsif', age:23},
                  {name:'Arslan', age:19}
              ]} )
          }

  render() {
    return (
      <div className='App'>
        <h1>Hello there</h1>
     <button onClick={this.switchNameHandler}> Switch</button>
     <Person name= {this.state.people[0].name} age={this.state.people[0].age}> My Hobby: Develope and learn new stuff daily. </Person>
     <Person name= {this.state.people[1].name} age={this.state.people[1].age}/>
     <Person name= {this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    )
  }
}

export default App