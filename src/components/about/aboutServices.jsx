import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
<>
<h2>What I do!</h2>

            <div className='con-service-cards'>

                <div className='service-card'>

                    <div>
                        <FontAwesomeIcon className='icon-service' icon={faBook} />
                    </div>

                    <div>
                        <h3>UI/UX Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                </div>

                <div className='service-card'>

                    <div>
                        <FontAwesomeIcon className='icon-service' icon={faBook} />
                    </div>

                    <div>
                        <h3>UI/UX Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                </div>

                <div className='service-card'>

                    <div>
                        <FontAwesomeIcon className='icon-service' icon={faBook} />
                    </div>

                    <div>
                        <h3>UI/UX Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                </div>

                <div className='service-card'>

                    <div>
                        <FontAwesomeIcon className='icon-service' icon={faBook} />
                    </div>

                    <div>
                        <h3>UI/UX Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                </div>

            </div>
</>


        
    )
}

export default Services