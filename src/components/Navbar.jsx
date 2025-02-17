import { UserAuth } from "../context/AuthContext";
import LogOut from "./LogOut";
import SignIn from "./SignIn";


const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl font-sans`,
}

export default function Navbar() {
    const {user} = UserAuth()
    
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>
            Chat App
        </h1>
        {user ? 
          <LogOut/>
            :
          <SignIn /> 
        }
    </div>
  )
}
