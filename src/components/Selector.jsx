import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Selector = () => {

  let [selector, setSelector] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories',
    headers: {
      accept: 'application/json',
      'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      'x-rapidapi-key': '1272c6971bmsh34e8d3c1bf22d59p14bc93jsn4b0e37fc06b2'
    }
  };

  useEffect(() => {

    const sendReq = async () => {
      await axios.request(options).then(function (response) {
        setSelector(response.data);
        console.log(selector);
      }).catch(function (error) {
        console.error(error);
      });
    }

    sendReq();
  }, [selector])

  return (
    <div >
      {
        selector.map((val, index) => {
          return (
            <>
              <button key={index} className="bg-blue-500 hover:from bg-blue-700 to bg-red-300 text-white font-bold py-2 px-4 rounded-full">{val}</button>
            </>
          )
        })
      }
    </div>
  )
}

export default Selector
