import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = ({ source, id }) => {
  // console.log('id', id);
  const [page, setPage] = useState(0);
  //const [flag, setFlag] = useState(0);//a subject already been answered or not
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
  const getScore = () => {
    if (page === 10) {
      axios.get(url, { params: { id: id } }).then((results) => {
        setInfo(results.data);
        // console.log('get score success', results);
      }).catch((err) => {
        console.log('get score err', err);
      })
    }
  }

  var timeSet;
  const handleTime = (e) => {
    e.persist();
    // console.log('handleTime???', e.target.currentTime);

    timeSet = setTimeout(function () {
      // console.log('now???', e.target.currentTime);
      if (page < 10) {
        setPage(page + 1);
      }
    }, 15000);
  }

  const handleAnswer = (e) => {
    clearTimeout(timeSet);
    if (source[page].answer == e.target.value) {
      //update the score in db
      updateScore();
      e.target.style.background = 'green';
    }else{
      e.target.style.background = 'red';
    }
    setTimeout(function(){
      if (page < 10) {
        setPage(page + 1);
      }
    }, 500);

  }

  useEffect(() => {
    getScore();
  }, [page]);

  console.log('page', page);

  return (
    <div>
      {
        page === 0 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay={handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay={handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay={handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay={handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay={handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
        page === 5 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
        page === 6 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
        page === 7 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
        page === 8 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
        page === 9 &&
        <div className='subject'>
          {
            source[page].type === 0 ? (<audio id="musicplayer" controls autoPlay onCanPlay = {handleTime}>
              <source src={path} />
            </audio>) : (<div className='title'><h1>{source[page].src}</h1></div>)
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
        page === 10 && <div id = 'finalPage'>{info.name} good job!!! your score is {info.score}</div>
      }

    </div>
  );
};

export default Quiz;