import './info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'



function Info() {


  return (
    

<aside>

    <div className="pp">240 x 240</div>

    <div className='con-name'>
        <h2 className="name">Arbab Bashir</h2>
        
        <span className="profession">UI/UX Designer</span>

        <div className="con-social">

            <div className='con-social-icon'>
            <FontAwesomeIcon className='social-icon facebook-icon' icon={faFacebookF} />
            </div>

            <div className='con-social-icon'>
            <FontAwesomeIcon className='social-icon facebook-icon' icon={faFacebookF} />
            </div>

            <div className='con-social-icon'>
            <FontAwesomeIcon className='social-icon facebook-icon' icon={faFacebookF} />
            </div>

            <div className='con-social-icon'>
            <FontAwesomeIcon className='social-icon facebook-icon' icon={faFacebookF} />
            </div>

        </div>
    </div>



    <div className='con-contacts'>

        <div className='con-contact con-phone'>

            <div className='con-contact-icon'>

                <FontAwesomeIcon className='contact-icon phone-icon' icon={faPhone} />
        
            </div>

            <div className='con-contact-text'>
                <span className='contact-name'>
                Phone
                </span>
                <span className='contact-value'>
                +123-456-789
                </span>

            </div>

        </div>


        <div className='con-contact con-phone'>

            <div className='con-contact-icon'>
                
                <FontAwesomeIcon className='contact-icon phone-icon' icon={faPhone} />
        
            </div>

            <div className='con-contact-text'>
                <span className='contact-name'>
                Phone
                </span>
                <span className='contact-value'>
                +123-456-789
                </span>

            </div>

        </div>


        <div className='con-contact con-phone'>

            <div className='con-contact-icon'>
                
                <FontAwesomeIcon className='contact-icon phone-icon' icon={faPhone} />
        
            </div>

            <div className='con-contact-text'>
                <span className='contact-name'>
                Phone
                </span>
                <span className='contact-value'>
                +123-456-789
                </span>

            </div>

        </div>

        <div className='con-contact con-phone'>

            <div className='con-contact-icon'>
                
                <FontAwesomeIcon className='contact-icon phone-icon' icon={faPhone} />
        
            </div>

            <div className='con-contact-text'>
                <span className='contact-name'>
                Phone
                </span>
                <span className='contact-value'>
                +123-456-789
                </span>

            </div>

        </div>


    </div>

   

    
<div className='con-download'>

    <button className='btn-dwn'>Download Cv</button>

</div>





    
    









    

</aside>

  )
}

export default Info;
