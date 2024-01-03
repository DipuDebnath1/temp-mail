import { Button } from "flowbite-react";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleUp, FaMinus, FaPlus, FaShare } from "react-icons/fa6";


export default function Feedback() {
  const [plus, setPlus] = useState(false)
  const handlePlusMinus =() =>{
    setPlus(!plus)
  }
  return (
    <div className="px-3 md:px-10 py-6 space-y-2">
      <span className="flex items-center text-gray-700 dark:text-white"> <FaAngleLeft />Back</span>
      <h2 className="text-2xl font-bold py-2 text-gray-800 dark:text-white" >Privacy Policy</h2>
      <div className="bg-white dark:bg-[#1f2937] dark:border-gray-700 w-full border-2 border-gray-200 rounded-xl text-lg py-10 px-5 text-gray-500 dark:text-white space-y-5">
        <p>10 minute mail offers a unique email experience with optimized servers for swift message delivery.</p>

        <p>We are grateful for your use of our anonymous email service. In line with our dedication to ongoing improvement, we strongly encourage you to share your thoughts and provide us with suggestions for enhancing 10 minute mail.
          <br />
          <span className="block text-end font-bold "><button className="dark:text-gray-300 ">Login</button></span>
        </p>
        <textarea name="commentbox" placeholder="Add Comment ..." id="" className="w-full rounded dark:bg-[#1f2937] border border-gray-300 dark:border-gray-700" rows="5"></textarea>
        <p className="flex justify-end">
          <Button color="blue">Add Comment</Button>
        </p>
        <p className="text-end text-sm space-x-2">
          <span>Upvotes</span>
          <span>Newest</span>
          <span>Oldest</span>
        </p>

        <div className="flex justify-between rounded-xl border-t-[3px] dark:border-t-gray-700 border-l-[2px] border-l-blue-800 py-3 px-3">
          <div>
            <div className="flex gap-3 items-center">
              <figure>
                <img src="https://i.ibb.co/TLNKqt4/images.jpg" className="w-16 h-16 rounded-full  object-cover" alt="user" />
              </figure>
              <div>
                <h3>Александр</h3>
                <span className="text-[12px]">0 points.  13months ago</span>
              </div>
            </div>
            <p className="text-[15px]">Как это вообще работает?</p>
          </div>
          <div className="flex gap-4 items-center">
            <span><FaShare /></span>
            <span><FaAngleDown /></span>
            <span><FaAngleUp /></span>
            <span>{plus ? <FaMinus onClick={handlePlusMinus} /> : <FaPlus onClick={handlePlusMinus} />}</span>
          </div>
        </div>

      </div>
    </div>
  )
}
