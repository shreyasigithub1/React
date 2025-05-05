import { useState } from 'react'

import UserClass from './UserClass'

import User from "./User"

function App() {
  

  return (
    <>
      <User name={"User1"} location={"Delhi"} />
      <UserClass name={"User2"} location={"Kolkata"}/>
    </>
  )
}

export default App
