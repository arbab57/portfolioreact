import './about.css'
import './resume.css'
import MainHeading from './mainHeading'
import Copy from './copy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'


function About() {
    

    return (

   <div className='con-about'>

        <section className='section-01'>
          
            <MainHeading head='Resume' />

        </section>

        <section className='section-02'>

          <div className='con-resume-cards'>


            <div className='resume-card-01'>

              <div className='resume-card-heading'>
                <FontAwesomeIcon className='icon-edu' icon={faBook} />
                <h3 >Education</h3>
              </div>

              <div className='cards-edu'>

                
                <div className='card-edu'>
                  <p className='text-muted'>2021-2023
                  </p>
                  <p className='text-main'>Ph.D in Horriblensess <span className='text-muted'>- ABC University,</span></p>
                  <p className='text-muted' >Los Angeles, CA</p>
                </div>

                <div className='card-edu'>
                  <p className='text-muted'>2021-2023
                  </p>
                  <p className='text-main'>Ph.D in Horriblensess <span className='text-muted'>- ABC University,</span></p>
                  <p className='text-muted' >Los Angeles, CA</p>
                </div>

                <div className='card-edu'>
                  <p className='text-muted'>2021-2023
                  </p>
                  <p className='text-main'>Ph.D in Horriblensess <span className='text-muted'>- ABC University,</span></p>
                  <p className='text-muted' >Los Angeles, CA</p>
                </div>

              

              </div>

              

            </div>


            <div className='resume-card-01'>

              <div className='resume-card-heading'>
                <FontAwesomeIcon className='icon-edu' icon={faBook} />
                <h3 >Education</h3>
              </div>

              <div className='cards-edu'>

                
                <div className='card-edu'>
                  <p className='text-muted'>2021-2023
                  </p>
                  <p className='text-main'>Ph.D in Horriblensess <span className='text-muted'>- ABC University,</span></p>
                  <p className='text-muted' >Los Angeles, CA</p>
                </div>

                <div className='card-edu'>
                  <p className='text-muted'>2021-2023
                  </p>
                  <p className='text-main'>Ph.D in Horriblensess <span className='text-muted'>- ABC University,</span></p>
                  <p className='text-muted' >Los Angeles, CA</p>
                </div>

                <div className='card-edu'>
                  <p className='text-muted'>2021-2023
                  </p>
                  <p className='text-main'>Ph.D in Horriblensess <span className='text-muted'>- ABC University,</span></p>
                  <p className='text-muted' >Los Angeles, CA</p>
                </div>

              

              </div>

              

            </div>








          </div>

            

        </section>

        <section className='section-03'>

          <div className='con-skills'> 

            <div className='con-work-skill'>

              <h3 className='skill-h3'>Working Skills</h3>

              <div className='skill'>

                <div className='con-skill-name'> 
                  <h4>Web Design</h4>
                  <span>84%</span>
                </div>

                <div className='con-progress-skill'>

                  <div className='bar-skill'>

                  </div>

                </div>

              </div>

               <div className='skill'>

                <div className='con-skill-name'> 
                  <h4>Web Design</h4>
                  <span>84%</span>
                </div>

                <div className='con-progress-skill'>

                  <div className='bar-skill'>

                  </div>

                </div>

              </div>

               <div className='skill'>

                <div className='con-skill-name'> 
                  <h4>Web Design</h4>
                  <span>84%</span>
                </div>

                <div className='con-progress-skill'>

                  <div className='bar-skill'>

                  </div>

                </div>

              </div>

               <div className='skill'>

                <div className='con-skill-name'> 
                  <h4>Web Design</h4>
                  <span>84%</span>
                </div>

                <div className='con-progress-skill'>

                  <div className='bar-skill'>

                  </div>

                </div>

              </div>

            </div>

            <div className="con-knowledge">

                <h3 className='skill-h3'>Knowledge</h3>

                <div className="con-keyword">
                  <p className='keyword'>Digital Design</p>
                  <p className='keyword'>Marketing</p>
                  <p className='keyword'>Communication</p>
                  <p className='keyword'>Social Media</p>
                  <p className='keyword'>Time Management</p>
                  <p className='keyword'>Flexibility</p>
                  <p className='keyword'>Print</p>


                </div>



            </div>




          </div>


          
          
            
            

        </section>
        <Copy />


   </div>

    )

}

export default About