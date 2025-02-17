import { useState } from "react"


export default function SendMessage() {
    const [input, setInput] = useState("")
  return (
    <form className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0">
        <input className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none" type="text" placeholder="Message" onChange={(e) => setInput(e.target.value)}/>
        <button className="w-[20%] bg-green-500" type="submit">Send</button>
    </form>
  )
}
