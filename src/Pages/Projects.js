import {ProjectCard} from '../Components'
import proj1 from '../Images/ProjectImgs/proj1.jpg'
import proj2 from '../Images/ProjectImgs/proj2.jpg'
import proj3 from '../Images/ProjectImgs/proj3.jpg'
import proj4 from '../Images/ProjectImgs/proj4.jpg'


const Projects = () => {

    const projectValues = [
        {title:'Neural Network Cat Classifier ', gitHubLink:'#', siteLink:'#', imgSrc:proj1},
        {title:'Neural Network Cat Classifier ', gitHubLink:'#', siteLink:'#', imgSrc:proj2},
        {title:'Neural Network Cat Classifier ', gitHubLink:'#', siteLink:'#', imgSrc:proj3},
        {title:'Neural Network Cat Classifier ', gitHubLink:'#', siteLink:'#', imgSrc:proj4}
    ]

    return (
        <div style={{display:'flex'}}>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col mt-5 mb-2'>
                        <p>A collection of Projects I took on on my journey. Check out the github repo for further information. Lorem Ipson text added here. collection of initiatives I took on on my journey. Check out the github repo for further information. Lorem Ipson text added here.</p>
                    </div>
                    <div className='col-2'></div>
                </div>
                <div className='row' style={{margin:'30px'}}>
                    {projectValues.map(({title, gitHubLink, siteLink, imgSrc}) => <div className='col-xs-12 col-sm-12 col-md-6'><ProjectCard title={title} gitHubLink={gitHubLink} siteLink={siteLink} imgSrc={imgSrc} /></div> )}                        
                </div>
            </div>
        </div>
    )
}


export default Projects