
import React from 'react';


const Display = props => {
console.log(props)
  return (
    <div>
      <h3>Registered Donors</h3>
      {props.users.map(user => (
        <>
          First Name: {user.fName} <br />
          Middle Name: {user.mName} <br />
          Last Name: {user.lName} <br />
          Email: {user.email} <br />
          {/* Mailing List: {user.mList} <br /><br /><br /> */}
        </>
      ))}
    </div>
  )
};


export default Display;
