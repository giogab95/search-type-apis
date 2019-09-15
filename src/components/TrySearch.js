import React, { useState, useEffect } from 'react'
import axios from 'axios'
const TrySearch = () => {
  const [users, setUsers] = useState({
    dati: []
  })

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data
        setUsers({ dati: data })
      })
      .catch(errors => {
        console.log(errors.resend)
      })
  }, [])
  return (
    <>
      <ul className='list-group'>
        {users.dati.map(res => (
          <li
            className='list-group-item list-group-item-action '
            key={res.id}
            style={{ cursor: 'pointer' }}
          >
            Username: {res.username}{' '}
            <span className='d-flex'>Name: {res.name}</span>
            <span className='d-flex'>Email: {res.email}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
export default TrySearch
