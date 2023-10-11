import React, { useState } from 'react';

import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from './GithubCredential';
import GithubProfile from './GithubProfile';
import GithubResponse from './GithubResponse';

function GithubSearchApp(props) {
  const [githubUserName, setGithubUserName] = useState('');
  const [githubProfile, setGithubProfile] = useState({});
  const [githubRepos, setGithubRepos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  let handleSearchUser = (e) => {

    e.preventDefault();
    serchProfile(githubUserName);
    searchRepos(githubUserName);
  };


  //Search Github profile

  let serchProfile = (githubUserName) => {
    let dataURL = `https://api.github.com/users/${githubUserName}?client_id=${CLIENT_ID}& client_secrete=${CLIENT_SECRET}`;
    axios.get(dataURL).then((response) => {

      setGithubProfile(response.data);


    }).catch((errorMessage) => {
      console.error(errorMessage);
      setErrorMessage(errorMessage);



    });


  }

  //search Repos

  let searchRepos = (githubUserName) => {

    let dataURL = `https://api.github.com/users/${githubUserName}/repos?client_id=${CLIENT_ID}& client_secret=${CLIENT_SECRET}`;
    axios.get(dataURL).then((response) => {
      setGithubRepos(response.data);

    }).catch((errorMessage) => {
      console.error(errorMessage);

      setErrorMessage(errorMessage);
    });


  }

  return (
    <React.Fragment>

      <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-header bg-secondary text-white'>
                <p className='h4'>Github Profile Search</p>
              </div>
              <div className='card-body bg-light'>
                <form className='form-inline' onSubmit={handleSearchUser}>
                  <div className='form-group mr-2'>
                    <input onChange={e => {
                      setGithubUserName(e.target.value);

                    }} type="text" value={githubUserName} size="30" className='form-control' placeholder='Github User Name' />
                  </div>
                  <div className='form-group'>
                    <input type='submit' value='Search' className='btn btn-secondary btn-lg' />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            {

              Object.keys(githubProfile).length > 0 ?
                <>
                  <GithubProfile githubProfile={githubProfile} />
                </> : null

            }

          </div>
        </div>

        <div className='row mt-3'>
          <div className='col'>

            {

              githubRepos.length>0?
              <>

                <GithubResponse githubRepos={githubRepos}/>
              </>:null
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GithubSearchApp;
