 import { ways } from "../data"
 import '../styles/section.scss'

 function WayToTeach ({ title, text }) {
    return(
        <div>
            <h1>
            {title}
            </h1>
            <p>{text}</p>
        </div>
    )
 }

const Section = () => {
    
    return(
    <div className="component-3">
        <div className='banner'>
        <WayToTeach {...ways[0]}/>
        <WayToTeach {...ways[1]}/>
        <WayToTeach {...ways[2]}/>
        <WayToTeach {...ways[3]}/>
        </div>
        <h1 className='design' id='personal'>Effortless design without the extra creative lift</h1>
    </div>
    )
}

export default Section