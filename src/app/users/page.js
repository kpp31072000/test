'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../components/store/reducer';


export default function Users() {
  const [data, setData] = useState([]);

  async function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      setData(json)
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData()
  }, []);


  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      <div>Users List</div>


      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>

      {/* <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
        {data.length ? data.map((item) => <tr>
          <td>{item.userId}</td>
          <td>{item.title}</td>
          <td>{!item.completed ?
            <span style={{ background: 'red', color: 'white', paddingLeft: '2px', paddingRight: '2px', borderRadius: '5px' }} >Not Completed</span> : <span
              style={{ background: 'green', color: 'white', paddingLeft: '2px', paddingRight: '2px', borderRadius: '5px' }} >Completed  </span>}
          </td>
        </tr>) : <tr>
          <td>No data</td>
        </tr>}

      </table> */}
    </>
  )
}
