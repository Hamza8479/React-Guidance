// import React, { Component } from 'react'
import React, { useState } from 'react'
import './App.css';
import Person from './components/Person';

// Class component
// class App extends Component {
//   state = {
//           people : [
//               {name:'Hamza', age:22},
//               {name:'Munsif', age:23},
//               {name:'Arslan', age:21}
//           ],
//           other:'other Data'
//         } 

//           switchNameHandler = () =>{
//             this.setState({
//               people : [
//                   {name:'Hamza Zaman', age:22},
//                   {name:'Munsif', age:23},
//                   {name:'Arslan', age:19}
//               ]} )
//           }

//   render() {
//     return (
//       <div className='App'>
//         <h1>Hello there</h1>
//      <button onClick={this.switchNameHandler}> Switch</button>
//      <Person name= {this.state.people[0].name} age={this.state.people[0].age}> My Hobby: Develope and learn new stuff daily. </Person>
//      <Person name= {this.state.people[1].name} age={this.state.people[1].age}/>
//      <Person name= {this.state.people[2].name} age={this.state.people[2].age}/>
//       </div>
//     )
//   }
// }

// export default App

// functional Component
// in functional components React-hooks are used for managing states but it replaces the old state with new one not merged as we have seen in class components
const App = () => {
  const [state, setState] = useState({
            people : [
                {name:'Hamza', age:22},
                {name:'Munsif', age:23},
                {name:'Arslan', age:21}
            ],
            other:'other Data'
          } )

        const [otherState, setOtherState] = useState('some other value')

          console.log(state,otherState)

         const switchNameHandler = () =>{
            setState({
              people : [
                  {name:'Hamza Zaman', age:22},
                  {name:'Munsif', age:23},
                  {name:'Arslan', age:19}
              ],
              other: state.other
            } )
          }

    return (
      <div className='App'>
        <h1>Hello there</h1>
     <button onClick={switchNameHandler}> Switch</button>
     <Person name= {state.people[0].name} age={state.people[0].age}> My Hobby: Develope and learn new stuff daily. </Person>
     <Person name= {state.people[1].name} age={state.people[1].age}/>
     <Person name= {state.people[2].name} age={state.people[2].age}/>
      </div>
    )
  
}

export default App