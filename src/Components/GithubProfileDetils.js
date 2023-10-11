import React from 'react'

function GithubProfileDetils(props) {
  return (
    <React.Fragment>

      <div className='card'>
        <div className='card-header'>
          <span className='badge badge-success p-2 m-2'>{props.githubProfile.followers} Followers</span>
          <span className='badge badge-warning p-2 m-2'>{props.githubProfile.public_repos} Repos</span>
          <span className='badge badge-secondary p-2 m-2'>{props.githubProfile.public_gists} Gists</span>
          <span className='badge badge-danger p-2 m-2'>{props.githubProfile.following} Following</span>

        </div>
        <div className='card-body'>
          <ul className='list-group'>
            <li className='list-group-item'>
              Name: <span className='font-weight-bold m-2 p-2'>{props.githubProfile.name}</span>
              
            </li>
            <li className='list-group-item'>
            Location: <span className='font-weight-bold m-2 p-2'>{props.githubProfile.location}</span>
            </li>

            <li className='list-group-item'>
            Email: <span className='font-weight-bold m-2 p-2'>{props.githubProfile.email}</span>
            </li>

            <li className='list-group-item'>
            Bio: <span className='font-weight-bold m-2 p-2'>{props.githubProfile.bio}</span>
            </li>

            <li className='list-group-item'>
            Company: <span><a href={props.githubProfile.company} target="_blank">{props.githubProfile.company}</a></span>
            </li>

            <li className='list-group-item'>
              Blog: <span>< a href={props.githubProfile.blog} target="_blank">{props.githubProfile.blog}</a></span>
            </li>

             <li className='list-group-item'>
             Profile URL:<span> <a href={props.githubProfile.html_url} target="_blank">{props.githubProfile.blog}</a></span>
             </li>


          </ul>

        </div>
      </div>
    </React.Fragment>
  )
}

export default GithubProfileDetils