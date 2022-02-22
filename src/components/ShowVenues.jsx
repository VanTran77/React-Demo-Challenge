import React from 'react'

function ShowVenues(props) {

  // console.log(props);
  return (
  <div>  
    <ul className="list-group list-group-flush">
      {props.list.map((value, index)=>{
        return(
          <li className="list-group-item" key={value.fsq_id}>{index + 1}{`.  `}{value.categories[0].name} - Address: {value.location.formatted_address} - Location: {value.location.locality}</li>
        )
      })}
    </ul>
  </div>
  )
}

export default ShowVenues