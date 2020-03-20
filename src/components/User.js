import React from 'react'

export default ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
      </div>
    </div>
  )
}