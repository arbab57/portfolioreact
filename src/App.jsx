import './App.css'
import Nav from './components/nav';
import Info from './components/info'
import About from './components/about'
import Resume from './components/resume';
import Works from './components/works'
import Blogs from './components/blogs'
import Contact from './components/contact'
import { useState } from 'react'



function App() {
const [main, setMain] = useState(<About />)



  return (
    <>


      <div className='con-aside'>
        
        <Info />

      </div>

      <main>

        <Nav change = {setMain}/>

        { main }

      </main>
    

    
    
    </>
  )
}

export default App
