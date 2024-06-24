import './about.css'
import './blogs.css'
import './works.css'
import MainHeading from './mainHeading'
import Copy from './copy'
import Clients from './about/clients'
import AboutSubtext from './about/aboutSubtext'
import Services from './about/aboutServices'

function Blogs() {
    

    return (

   <div className='con-about'>

        <section className='section-01'>
          
            <MainHeading head='Blogs' />

           

        </section>

        <section className='section-02'>

          <div className="con-blogs">

            <div className="card-blog">
                <div className='blog-img'>310 x 310</div>
                <div className='con-date'>
                    <p className='text-muted'>
                    27 April
                    </p>
                    <p className='text-muted'>.</p>
                    <p className='text-muted'>
                    Inspiration
                    </p>
                        </div>
                <h4 className='project-title'>How to Own Your Audience by 
                Creating an Email List.</h4>
            </div>

            <div className="card-blog">
                <div className='blog-img'>310 x 310</div>
                <div className='con-date'>
                    <p className='text-muted'>
                    27 April
                    </p>
                    <p className='text-muted'>.</p>
                    <p className='text-muted'>
                    Inspiration
                    </p>
                        </div>
                <h4 className='project-title'>How to Own Your Audience by 
                Creating an Email List.</h4>
            </div>

            <div className="card-blog">
                <div className='blog-img'>310 x 310</div>
                <div className='con-date'>
                    <p className='text-muted'>
                    27 April
                    </p>
                    <p className='text-muted'>.</p>
                    <p className='text-muted'>
                    Inspiration
                    </p>
                        </div>
                <h4 className='project-title'>How to Own Your Audience by 
                Creating an Email List.</h4>
            </div>

            <div className="card-blog">
                <div className='blog-img'>310 x 310</div>
                <div className='con-date'>
                    <p className='text-muted'>
                    27 April
                    </p>
                    <p className='text-muted'>.</p>
                    <p className='text-muted'>
                    Inspiration
                    </p>
                        </div>
                <h4 className='project-title'>How to Own Your Audience by 
                Creating an Email List.</h4>
            </div>

            
          </div>

        </section>

        <section className='section-03'>

          
          
          
            <Copy />
            

        </section>


   </div>

    )

}

export default Blogs