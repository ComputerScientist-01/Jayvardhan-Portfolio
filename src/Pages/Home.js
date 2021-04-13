import {LightBtn} from '../Components'
import heroLogo from '../Images/virtual-reality.svg'
import './pages.scss'

const Home = () => {
    return (
        <div style={{display:'flex', height:'90vh'}}>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 my-auto' style={{paddingTop:'2em', paddingLeft:'4em'}}>
                        <h3>This is</h3>
                        <h1>JAYVARDHAN RATHI</h1>
                        <p>Hey there ! I am a Computer Science Engineering Student and my hobby is to make cross platform apps in my free time.</p><br/>
                        <a href='https://github.com/ComputerScientist-01' className='myworkLink'><LightBtn>My works</LightBtn></a>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 my-auto' style={{paddingTop:'2em', paddingLeft:'4em', paddingRight:'4em'}}>
                        <img src={heroLogo} alt='hero img not found' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home