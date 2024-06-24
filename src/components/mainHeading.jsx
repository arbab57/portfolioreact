import './about.css'
import '../App.css'


function MainHeading(props) {

    const heading = props.head
    

    return (

        <div className='con-heading'>

        <h2 className='main-heading'>{heading}</h2>

        <div className='line'>

        </div>

    </div>

    )
}

export default MainHeading


