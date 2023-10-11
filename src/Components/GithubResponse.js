import React from 'react'

function GithubResponse(props) {
  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-header'>
          <p className='h4'>Your Repositories</p>
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            {

              props.githubRepos.map(repo => {

                return (

                  <React.Fragment>
                    <li className='list-group-item'>
                      <div className='d-flex justify-content-between'>
                        <span className='h5'>
                          <a href={repo.html_url} target='_blank'>{repo.name}</a>
                        </span>
                        <span className='ml-auto'>
                          <span className='badge badge-success mr-5'>{repo.stargazers_count} Stars</span>
                          <span className='badge badge-warning mr-2'>{repo.watchers_count} Watchers</span>
                        </span>
                      </div>
                    </li>
                  </React.Fragment>


                )
              })
            }
          </ul>
        </div>
      </div>
    </React.Fragment>

  )
}

export default GithubResponse;