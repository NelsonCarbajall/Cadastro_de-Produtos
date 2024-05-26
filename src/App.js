import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tabela from './Componentes/Tabela/Tabela'
import LoginForm from './Componentes/LoginForm/LoginForm'

class App extends Component {
  render() {
    return (
    <Router>
        
          <Routes>
              <Route path='/Tabela' element={<Tabela /> } />
              <Route path='/'  element={<LoginForm/> } />
          </Routes>
        
      </Router>
    );
  }
}

export default App;