/* eslint-disable react/prop-types */

export default function Messages({message}) {
    const text = message.text
    const userName = message.userName
    //const timeStamp = message.timeStamp

  return (
    <div>
        <div className='flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full'>
            <p className='fixed mt-[-4rem] text-gray-600 text-xs'>{userName}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}
