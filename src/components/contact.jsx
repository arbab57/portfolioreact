import './about.css'
import './works.css'
import './contact.css'
import MainHeading from './mainHeading'
import Copy from './copy'
import Clients from './about/clients'
import AboutSubtext from './about/aboutSubtext'
import Services from './about/aboutServices'

function Contact() {
    

    return (

   <div className='con-about'>

        <section className='section-01'>
          
            <MainHeading head='Contact' />

           

        </section>

        <section className='section-02'>

            <form action="">
                <p className='text-muted form-text'>I’M ALWAYS OPEN TO DISCUSSING PRODUCT
                <span className='makeWhite'>DESIGN WORK OR PARTNERSHIPS.</span> </p>

                <div className='con-inputs'>
                <input placeholder='Name *' type="text" />
                <input placeholder='Email *' type="email" />
                <input placeholder='Message *' type="text" />
              <button className='btn-submit'>Submit</button>
                </div>
            </form>


        </section>

        <section className='section-03'>

          
            
          
            <Copy />
            

        </section>


   </div>

    )

}

export default Contact