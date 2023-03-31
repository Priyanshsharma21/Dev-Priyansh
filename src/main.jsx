import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimeProvider } from './context/animeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AnimeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AnimeProvider>
  </Router>
)
