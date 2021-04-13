import './projectCard.scss'
import {ProjectsGithubIcon, ProjectsShareIcon} from '../../Images'


const ProjectCard = ({title, gitHubLink, siteLink, imgSrc}) => {
  return (
      <div className='projCard_container'>
        <div className='projCard_header'>
            <span className='projCard_title'>{title}</span>
            <span className='projCard_links'><a href={siteLink}><ProjectsShareIcon/></a><a href={gitHubLink}><ProjectsGithubIcon/></a></span>
        </div>
        <img className='projCard_image' src={imgSrc} alt='img not found'/>
      </div>
  )
}


export default ProjectCard