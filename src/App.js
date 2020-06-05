import React, { Component } from 'react';
import './App.css';
import User from './Components/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ border: '2px dotted black', margin: '20px 200px', color: 'black', borderRadius: '25px' }}>
          <h2>Users Info</h2>
          <hr />
          <User FirstName="Uttam" LastName="Deshani" City='Vadodara' State='Gujarat' Country="India" />
          <User FirstName="Mihir" LastName="Shah" City='Ahmedabad' State='Gujarat' Country="India" />
          <User FirstName="Aneri" LastName="Patel" City='Surat' State='Gujarat' Country="India" />
        </div>
      </div>
    );
  }
}

export default App;
