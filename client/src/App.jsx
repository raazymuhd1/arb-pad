import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Launch, Header, Footer } from './Components'
import {Homepage, Projects, Submission, Earn, Blog, Roadmaps, KYC} from './pages'

function App() {

  return (
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/project-submission" element={<Submission /> } />
            <Route path="/earn" element={<Earn /> } />
            <Route path="/blog" element={<Blog /> } />
            <Route path="/roadmap" element={<Roadmaps /> } />
            <Route path="/kyc" element={<KYC /> } />
        </Routes>
        <Launch />
        <Footer />
      </div>
  )
}

export default App
