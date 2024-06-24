import './about.css'
import MainHeading from './mainHeading'
import Copy from './copy'
import Clients from './about/clients'
import AboutSubtext from './about/aboutSubtext'
import Services from './about/aboutServices'

function About() {
    

    return (

   <div className='con-about'>

        <section className='section-01'>
          
            <MainHeading head='About Me' />

           <AboutSubtext />

        </section>

        <section className='section-02'>

            <Services />

        </section>

        <section className='section-03'>

          
            <Clients />
          
            
            

        </section>
        
        <Copy />


    </div>

    )

}

export default About