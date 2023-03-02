import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from './Quiz.jsx';


const App = () => {
  const [status, setStatus] = useState(0);
  const [name, setName] = useState('');
  const [language, setLanguage] = useState(0);
  const [type, setType] = useState(0);
  const [source, setSource] = useState([]);
  const [id, setId] = useState([]);

  const getSelectedQuiz = ()=>{
    let url = 'http://localhost:3010/source';
    axios.get(url, {params:{language: language, type: type}})
    .then((results)=>{
      setSource(results.data);
      // console.log('get from db', results.data);
    }).catch((err) => {
      console.log('get source from db err', err);
    });
  }
  useEffect(()=>{
    getSelectedQuiz()
  },[language,type]);

  const handleSubmitButtonClick = (e) => {
    e.preventDefault();
    let url = 'http://localhost:3010/quiz'
    let formData = {};
    formData.name = name;
    formData.language = language;
    formData.type = type;
    axios.post(url, formData)
      .then((results) => {
        // console.log('results after submit', results);
        setId(results.data._id);
        setStatus(1);
      })
      .catch((err) => {
        console.log('get data from server err', err);
      })
  }

  const handleName = (e)=>{
    setName(e.target.value);
  }
  const handleLanguage = (e)=>{
    if(e.target.value === 'Chinese'){
      setLanguage(1);
    }
  }
  const handleType = (e)=>{
    if(e.target.value === 'Physics'){
      setType(1);
    }else if(e.target.value==='Geography'){
      setType(2);
    }
  }
  console.log('source', source);
  return (
    <>
      {status === 0 &&
        <form onSubmit={(e) => handleSubmitButtonClick(e)}>
          <h3>Please choose your preference </h3>
          <div>
            <label>Nick Name</label>
            <input id='name' type='text' name='name' required onChange = {handleName}/>
          </div>
          <div>
            <label>Language</label>
            <select id='language' onChange = {handleLanguage}>
              <option>English</option>
              <option>Chinese</option>
            </select>
          </div>
          <div>
            <label>Quiz type</label>
            <select id='type' onChange = {handleType}>
              <option>Music</option>
              <option>Physics</option>
              <option>Geography</option>
            </select>
          </div>
          <button>Start</button>
        </form>}
      {
        status === 1 && <Quiz source={source} id = {id}/>
      }

    </>

  );
}

export default App;
