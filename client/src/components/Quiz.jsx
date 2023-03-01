import React, { useState, useEffect } from 'react';
import QuizEntry from './QuizEntry.jsx';
import axios from 'axios';

const Quiz = ({ source, id }) => {
  console.log('id', id);
  const [page, setPage] = useState(0);
  const [flag, setFlag] = useState(0);//a subject already been answered or not
  const [info, setInfo] = useState({});//user info, include score

  let path = `../../../${source[page].src}`;
  let options = source[page].options[0];
  let optionsArr = options.split(',');

  let url = 'http://localhost:3010/score';
  const updateScore = () => {
    axios.put(url, { id: id })
      .then((results) => {
        console.log('change score success', results);
      }).catch((err) => {
        console.log('change score err', err);
      })
  }
  const getScore = ()=>{
    if(page === 5){
      axios.get(url, {params:{id: id}}).then((results)=>{
        setInfo(results.data);
        console.log('change score success', results);
      }).catch((err)=>{
        console.log('change score err', err);
      })
    }
  }

  const handleAnswer = (e) => {
    setFlag(1);
    if (source[page].answer == e.target.value) {
      //update the score in db
      updateScore();
    }
    if (page < 5) {
      setPage(page + 1);
    }
  }
  const handleTime = (e) => {
    console.log('flag', flag);
    e.persist();
    console.log('handleTime???', e.target.currentTime);
    setTimeout(function(){
      console.log('now???', e.target.currentTime);
      if(flag === 0){//check use already click answer
        if (page < 5) {
          setPage(page + 1);
        }
      }
    }, 10000);
  }

  useEffect(()=>{
    setFlag(0);
    getScore();
  }, [page]);




  return (
    <div>
      {
        page === 0 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<h1>{source[page].src}</h1>)
          }
          <div className='answer'>
            <input type='button' onClick={handleAnswer} value={optionsArr[0]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[1]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[2]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[3]} />
          </div>
        </div>
      }
      {
        page === 1 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<h1>{source[page].src}</h1>)
          }
          <div className='answer'>
            <input type='button' onClick={handleAnswer} value={optionsArr[0]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[1]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[2]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[3]} />
          </div>
        </div>
      }
      {
        page === 2 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<h1>{source[page].src}</h1>)
          }
          <div className='answer'>
            <input type='button' onClick={handleAnswer} value={optionsArr[0]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[1]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[2]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[3]} />
          </div>
        </div>
      }
      {
        page === 3 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<h1>{source[page].src}</h1>)
          }
          <div className='answer'>
            <input type='button' onClick={handleAnswer} value={optionsArr[0]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[1]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[2]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[3]} />
          </div>
        </div>
      }
      {
        page === 4 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<h1>{source[page].src}</h1>)
          }
          <div className='answer'>
            <input type='button' onClick={handleAnswer} value={optionsArr[0]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[1]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[2]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[3]} />
          </div>
        </div>
      }
      {/* {
        page === 5 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<h1>{source[page].src}</h1>)
          }
          <div className='answer'>
            <input type='button' onClick={handleAnswer} value={optionsArr[0]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[1]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[2]} />
            <input type='button' onClick={handleAnswer} value={optionsArr[3]} />
          </div>
        </div>
      } */}
      {
        page === 5 && <div>{info.name}good job!!! your score is {info.score}</div>
      }

    </div>
  );
};

export default Quiz;