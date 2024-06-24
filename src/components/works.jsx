import './about.css'
import './works.css'
import MainHeading from './mainHeading'
import Copy from './copy'
import Clients from './about/clients'
import AboutSubtext from './about/aboutSubtext'
import Services from './about/aboutServices'


function About() {
    

    return (

   <div className='con-about'>

        <section className='section-01'>
          
            <MainHeading head='Portfolio' />

          

        </section>

        <section className='section-02'>

            <div className='con-nav-projects'>
                <ul>
                    <li ><a className='link-active' href="">All</a></li>
                    <li><a href="">Mockup</a></li>
                    <li><a href="">Graphic Design</a></li>
                    <li><a href="">Logo</a></li>
                </ul>
            </div>

            <div className='con-projects'>
                <div className='projects project-left'>

                    <div className="card-project">
                        <div className='project-img'>370 x 170</div>
                        <p className='text-muted'>Travel Landing , UX/UI </p>
                        <p className='project-title'>Chul urina</p>
                        
                    </div>

                    <div className="card-project">
                        <div className='project-img'>370 x 170</div>
                        <p className='text-muted'>Travel Landing , UX/UI </p>
                        <p className='project-title'>Chul urina</p>
                        
                    </div>

                    <div className="card-project">
                        <div className='project-img'>370 x 170</div>
                        <p className='text-muted'>Travel Landing , UX/UI </p>
                        <p className='project-title'>Chul urina</p>
                        
                    </div>

                </div>

                <div className='projects project-right'>

                    <div className="card-project">
                        <div className='project-img'>370 x 170</div>
                        <p className='text-muted'>Travel Landing , UX/UI </p>
                        <p className='project-title'>Chul urina</p>
                        
                    </div>

                    <div className="card-project">
                        <div className='project-img'>370 x 170</div>
                        <p className='text-muted'>Travel Landing , UX/UI </p>
                        <p className='project-title'>Chul urina</p>
                        
                    </div>

                    <div className="card-project">
                        <div className='project-img'>370 x 170</div>
                        <p className='text-muted'>Travel Landing , UX/UI </p>
                        <p className='project-title'>Chul urina</p>
                        
                    </div>

                </div>

            </div>

           

        </section>

        <section className='section-03'>

          
        
          
            <Copy />
            

        </section>


   </div>

    )

}

export default About