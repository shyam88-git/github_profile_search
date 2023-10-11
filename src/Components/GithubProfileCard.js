import React from 'react'

function GithubProfileCard(props) {
  
  return (
    <React.Fragment>
      <div className='card'>
        
          <img src={props.githubProfile.avatar_url} alt=""className='img-fluid'/>
          <div className='card-body'>
          <p className='lead'>{props.githubProfile.name}</p>
          <small>{props.githubProfile.bio}</small>
          <a href={props.githubProfile.html_url} target='_blank' className='btn btn-success btn-sm'>Profile</a>
          </div>
      </div>
    </React.Fragment>
  )
}

export default GithubProfileCard;