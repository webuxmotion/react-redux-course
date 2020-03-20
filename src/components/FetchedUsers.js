import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import User from './User'
import { fetchUsers } from '../redux/actions'

const FetchedUsers = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.fetchedUsers)
  
  if (!users.length) {
    return <button 
      className="btn btn-primary"
      onClick={() => dispatch(fetchUsers())}
    >Загрузить</button>
  }

  return users.map(user => <User user={user} key={user.id} />)
}

export default FetchedUsers