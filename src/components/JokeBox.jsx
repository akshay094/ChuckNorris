import React, { useState, useEffect } from 'react'
import axios from 'axios'


const JokeBox = ({ category }) => {

  let [jokeBody, setJokeBody] = useState([]);

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
        setJokeBody((response.data).result);
        console.log(jokeBody);
      } catch (err) {
        console.error(err);
      }
    }
    sendReq();
  }, [category]);



  function prev(e) {

  }
  function next(e) {
    const nextBtn = document.getElementById("next");

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
      <div className="justify-self-center">
        <div id="jokeText" className="bg-white rounded-md p-3" cols="10" rows="10">{jokeBody.length ? jokeBody[0].value : ''}</div>
      </div>

      <div className="text-white my-2 justify-self-center">
        <button id="prev" onClick={prev} className="bg-green-500 hover:bg-blue-500 mx-2 capitalize my-3 text-white font-bold font-serif py-2 px-4 rounded">Prev</button>
        <button counter="0" id="next" onClick={next} className="bg-green-500 hover:bg-blue-500 mx-2 capitalize my-3 text-white font-bold font-serif py-2 px-4 rounded">Next</button>
      </div>
    </div >
  )
}

export default JokeBox
