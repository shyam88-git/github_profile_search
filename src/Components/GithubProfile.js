import React from 'react'
import GithubProfileCard from './GithubProfileCard'
import GithubProfileDetils from './GithubProfileDetils'

function GithubProfile(props) {
  return (
    <React.Fragment>

       <div className='row'>
        <div className='col-md-3'>
          <GithubProfileCard githubProfile={props.githubProfile}/>
          
        </div>

        <div className='col-md-9'>
          <GithubProfileDetils githubProfile={props.githubProfile}/>
        </div>
       </div>
    </React.Fragment>
  )
}

export default GithubProfile