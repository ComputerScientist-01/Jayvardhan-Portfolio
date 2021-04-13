import {InitiativeCard} from '../Components'
import initiativeLogo from '../Images/collaboration2.svg'
import './pages.scss'


const Initiatives = () => {

    const initiativeValues = [
        {company:'Technocolabs', post:'Python Developer', duration:'JULY 2020 - AUGUST 2020', desc:'Worked on OpenWeatherMap API using Python. Used this powerful API to get all kinds of weather data, from temp, to wind speeds, to humid levels'},
        {company:'Next Tech Lab', post:'Member', duration:'JULY 2020 - AUGUST 2020', desc:'Worked on OpenWeatherMap API using Python. Used this powerful API to get all kinds of weather data, from temp, to wind speeds, to humid levels'},
        {company:'GenY', post:'Associate', duration:'JULY 2020 - AUGUST 2020', desc:'Worked on OpenWeatherMap API using Python. Used this powerful API to get all kinds of weather data, from temp, to wind speeds, to humid levels'}
    ]

    return (
        <div style={{display:'flex'}}>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col mt-5 mb-2'>
                        <p>A collection of initiatives I took on on my journey. Check out the github repo for further information. Lorem Ipson text added here. collection of initiatives I took on on my journey. Check out the github repo for further information. Lorem Ipson text added here.</p>
                    </div>
                    <div className='col-2'></div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6 my-auto initiativeSVG'>
                        <img src={initiativeLogo} alt='initiative img not found' />
                    </div>
                    <div className='col-sm-12 col-lg-6 my-auto' style={{paddingTop:'2em', paddingLeft:'4em'}}>
                        {initiativeValues.map(({company, post, duration, desc}) => <InitiativeCard company={company} post={post} vertical={duration} desc={desc} /> )}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Initiatives