import React from 'react'
import '../App.css'

function SearchVenue(props) {
  return (

  <div style={{margin:"20px", width:"700px" }}>
    <form>
      <div className="mb-3">
        <input type="text" className="form-control" name="topic" value={props.topic} placeholder="Please enter your topic" onChange={props.onChange} />
      </div>
      <button type="button" className="btn btn-primary" onClick={props.onClick}>Submit</button>
    </form>

  </div>
  )
}

export default SearchVenue