import React from 'react';
// Après la création du store/reducer j'appelle Provider
// Provider nous permet de passer des props à tous les components
import { Provider } from 'react-redux';

import Video from './components/Video';
import Sidebar from './components/Sidebar';

import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />  
      </Provider>
    </div>
  );
}

export default App;
