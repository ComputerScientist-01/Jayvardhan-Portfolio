import './initiativeCard.scss'


const InitiativeCard = ({company, post, duration, desc}) => {
  return (
      <div className='initiative_container'>
        <div className='initiative_work'>
            <span className='initiative_company'>{company}</span>
            <span className='initiative_post'>{post}</span>
        </div>
        <p className='initiative_duration'>{duration}</p>
        <p className='initiative_desc'>{desc}</p>
      </div>
  )
}


export default InitiativeCard