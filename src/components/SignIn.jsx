/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { GoogleButton } from "react-google-button"
import { auth } from '../config/firebase-config'
import { UserAuth } from '../context/AuthContext'

const style = {
    wrapper: `flex justify-between`,
}


export default function SignIn() {
    const {googleSignIn, user} = UserAuth()

    async function handleGoogleSignIn() {
        try {
          await googleSignIn();
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={() => handleGoogleSignIn()}/>
    </div>
  )
}
