import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Casino from './pages/Casino'
import History from './pages/History'
import Home from './pages/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="casino" element={<Casino />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
