import React from 'react'

const PasswordRequisite = (props) => {

  return (
    <div style={{color:'white', margin:0}}>
      <p className={props.capsLetterFlag}> Must Contain 1 Capital Letter </p>
      <p className={props.numberCheckFlag}> Must contain a number</p>
      <p className={props.pwdLengthCheckFlag}> Must be 8 characters Long</p>
      <p className={props.specialCharCheckFlag}> Must contain a special character</p>
      

    </div>
  )
}

export default PasswordRequisite