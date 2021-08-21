import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JokeBox from './JokeBox'

const Selector = () => {

  let [selector, setSelector] = useState([]);
  let [jokeCat, setJokeCat] = useState('animal');

  function handleClick(e) {
    let category = e.currentTarget.value;
    setJokeCat(category);
    console.log(category);
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories',
      headers: {
        accept: 'application/json',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': '1272c6971bmsh34e8d3c1bf22d59p14bc93jsn4b0e37fc06b2'
      }
    };
    const sendReq = async () => {
      try {
        let response = await axios.request(options);
        setSelector(response.data);

      } catch (err) {
        console.error(err);
      }
    }
    sendReq();
  }, []);


  return (
    <div className="container mx-auto px-10">
      <h1 className="text-white py-10 text-2xl subpixel-antialiased
      font-mono">Select a category</h1>
      {
        selector.map((val, index) => {
          return (
            <button onClick={handleClick} key={index} value={val.toString()} className="bg-red-500 hover:bg-blue-500 mx-2 capitalize my-3 text-white font-bold font-serif py-2 px-4 rounded">{val}</button>
          )
        })
      }
      <JokeBox category={jokeCat} />
    </div>
  )
}

export default Selector
