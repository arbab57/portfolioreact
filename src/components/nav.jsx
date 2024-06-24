import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { faTableCells } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import './nav.css'
import Resume from './resume'
import About from './about'
import Works from './works'
import Blogs from './blogs'
import Contact from './contact'
import { useState } from 'react'
import Info from './info'


function Nav(props) {
const [pageNum, setPageNum] = useState(1)


 

function pageF(page) {

  if (page === 1) {
    props.change(<About />);
    classChange("about")
  }
  if (page === 2) {
    props.change(<Resume />);
    classChange("resume")
  }
  if (page === 3) {
    props.change(<Works />);
    classChange("works")
  }
  if (page === 4) {
    props.change(<Blogs />);
    classChange("blogs")
  }
  if (page === 5) {
    props.change(<Contact />);
    classChange("contact")
  }
  
}

function classChange(element) {
  const about = document.querySelector('#about')
  const resume = document.querySelector('#resume')
  const works = document.querySelector('#works')
  const blogs = document.querySelector('#blogs')
  const contact = document.querySelector('#contact')
  

  about.classList.remove('active');
  resume.classList.remove('active');
  works.classList.remove('active');
  blogs.classList.remove('active');
  contact.classList.remove('active');
  

  const add = document.querySelector("#" + element)
  add.classList.add('active')
 


}


function menuF(x) {
  if (x === 1) {
const menu = document.querySelector('.menu-mobile');
menu.style.display = "block"


  }else {
const menu = document.querySelector('.menu-mobile');
menu.style.display = "none"


  }
  
}
 


  return (

<nav>



<div id='about' onClick={() => pageF(1)}  className='nav-link-con active'>
  <FontAwesomeIcon className='nav-icon' icon={faUser} />
  <p>About</p>
</div>

<div id='resume' onClick={() => pageF(2)} className='nav-link-con'>
  <FontAwesomeIcon className='nav-icon' icon={faFile} />
  <p>Resume</p>
</div>

<div id='works' onClick={() => pageF(3)} className='nav-link-con'>
  <FontAwesomeIcon className='nav-icon' icon={faSquareCheck} />  
  <p>Works</p>
</div>

<div id='blogs' onClick={() => pageF(4)} className='nav-link-con'>
  <FontAwesomeIcon className='nav-icon' icon={faTableCells} />
  <p>Blogs</p>
</div>

<div id='contact' onClick={() => pageF(5)} className='nav-link-con'>
  <FontAwesomeIcon className='nav-icon' icon={faAddressBook} />
  <p>Contact</p>
</div>

<div id='info' onClick={() => menuF(1)} className='nav-link-con'>
  <FontAwesomeIcon className='nav-icon' icon={faInfo} />
  <p>Info</p>
</div>


<div className='menu-mobile'>
<div className="con-menu">  <Info />
</div>
<div onClick={() => menuF(2)} className='cross-icon'>X</div>

</div>

</nav>
    


    

  )
}

export default Nav;
