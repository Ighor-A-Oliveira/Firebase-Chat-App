import { UserAuth } from "../context/AuthContext"

export default function LogOut() {
    const {logOut} = UserAuth()

    function handleGoogleSignOut(){
        try {
            logOut()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <button className="bg-gray-200 px-4 py-2 hover:bg-gray100" onClick={handleGoogleSignOut}>Logout</button>
  )
}
