import { MdOutlineInbox } from "react-icons/md";
import { TbRefresh } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" h-[100vh] w-full flex flex-col justify-between bg-white dark:bg-[#111827] border-r border-gray-300 dark:border-gray-600 p-5">
      {/* top nav item  */}
      <div className="">
        <h2 className="text-4xl font-bold dark:text-white">
          <span className="text-rose-600">@</span>bot.
          <span className="text-rose-600">mail</span>
        </h2>
        <div className="mt-5">
          <ul>
            <Link to={'/'} className="flex gap-2 items-center font-semibold dark:text-gray-200 hover:bg-gray-100 rounded cursor-pointer p-2 dark:hover:text-gray-800">
              <MdOutlineInbox className="text-2xl text-gray-500" /> Inbox
            </Link>
            <li className="flex gap-2 items-center font-semibold dark:text-gray-200 dark:hover:text-gray-800 hover:bg-gray-100 rounded cursor-pointer p-2">
              <TbRefresh className="text-2xl text-gray-500" /> Refresh
            </li>
          </ul>
        </div>
      </div>

      {/* bottom Nav item  */}
      <div>

        <ul>
          <Link to={'/faq'} className="flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2">FAQ</Link>
          <Link to={'/privacy'} className="flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2">Privacy</Link>
          <Link to={'/feedback'} className="flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2">Feedback</Link>
          <Link to={'/contact'} className="flex gap-2 items-center font-semibold dark:hover:bg-[#1f2937] dark:text-gray-200 dark:hover:text-gray-400 hover:bg-gray-100 rounded cursor-pointer p-2">Contacts</Link>
          <Link to={'/'} className="flex gap-2 items-center font-bold dark:hover:bg-[#1f2937] hover:bg-gray-100 rounded cursor-pointer p-2 text-rose-500">Fake.mail</Link>

          <div className="px-2 mb-4">
            <p className="dark:text-blue-300">Expiring In...</p>
            <span className="w-full rounded-xl bg-blue-600 h-2 block my-1"></span>
            <span className="font-bold dark:text-blue-300 text-center block">7 days 19 hours 41 minutes 50 seconds </span>
          </div>

        <hr className="dark:bg-gray-500 h-[1px] border-0" />
            <p className="dark:text-gray-400 mt-4">@fake.mail</p>
        </ul>
      </div>
    </div>
  );
}
