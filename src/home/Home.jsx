// import React from 'react'
import propTypes from 'prop-types'
export default function Home({appCount,setCount}) {
  return (
    <div>
      <div className="container bg-dark text-white p-2 rounded-3">
      <p>Count Here is: {appCount} </p>
    <button className="btn btn-secondary" onClick={() => setCount(appCount - 1)}>Decrease Count</button>
      </div>
    </div>
  )
}
Home.propTypes = {
  appCount: propTypes.number.isRequired,
}
Home.propTypes = {
  setCount: propTypes.number.isRequired,
}
