import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { parse } from 'postcss';


const JokeBox = ({ category }) => {

  let [jokeBody, setJokeBody] = useState([]);
  let [i, setI] = useState(0);
  let [blur, setBlur] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',
      params: { query: category },
      headers: {
        accept: 'application/json',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': '1272c6971bmsh34e8d3c1bf22d59p14bc93jsn4b0e37fc06b2'
      }
    }
    const sendReq = async () => {
      try {
        let response = await axios.request(options);
        setI(0);
        setJokeBody((response.data).result);
        console.log(jokeBody);
      } catch (err) {
        console.error(err);
      }
    }
    sendReq();
  }, [category]);


  function prev(e) {
    if (i < jokeBody.length && i > 0) {
      setI(--i);
      console.log(jokeBody.length + ' ' + i);
    }
  }
  function next(e) {
    if (i < jokeBody.length - 1) {
      setI(++i);
      console.log(jokeBody.length + ' ' + i);
    }

  }

  // <ul>
  //   {
  //     jokeBody.map((val, id) => {
  //       return <li key={id}>{val.value}</li>
  //     })
  //   }
  // </ul>

  return (
    <div className="grid my-10">
      <div className="justify-self-center grid">
        <div id="jokeText" className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-md p-3 grid" cols="10" rows="10">
          <div className="justify-self-center p-3">
            <h1 className="text-center font-bold font-mono text-2xl bg-gray-50 rounded p-2 border-4 border-indigo-300">category : {category}</h1>
            <img className="mx-auto p-3" src={jokeBody.length ? jokeBody[i].icon_url : ''} alt="" />
          </div>
          <div className="text-center text-xl bg-gray-50 rounded p-2 border-4 border-indigo-300">
            {jokeBody.length ? jokeBody[i].value : ''}</div>
        </div>
      </div>

      <div className="text-white my-2 justify-self-center">
        <button id="prev" onClick={prev} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-2 capitalize my-3 text-white text-xl font-bold font-serif py-2 px-4 rounded">Prev</button>
        <button counter="0" id="next" onClick={next} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-2 capitalize my-3 text-white font-bold text-xl font-serif py-2 px-4 rounded">Next</button>
      </div>
    </div >
  )
}

export default JokeBox
