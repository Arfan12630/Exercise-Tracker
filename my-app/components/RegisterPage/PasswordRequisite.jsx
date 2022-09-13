import React from 'react'

const PasswordRequisite = ({
    capsLetterFlag,
    lowerCaseLetterFlag,
    passwordLengthCheckFlag,
    specialCharacterLengthFlag,
    passwordNumberCheckFlag

}) => {
  return (
    <div>
   <p className={capsLetterFlag}> Must be one capital letter </p>
   <p className={lowerCaseLetterFlag}> Must have one lower case letter</p>
   <p className={passwordLengthCheckFlag}> Must be over 8 characters </p>
   {/* <p className={specialCharacterLengthFlag}> Must have a special character</p> */}
   <p className={passwordNumberCheckFlag}> Must include a number </p>
    </div>
  )
}

export default PasswordRequisite