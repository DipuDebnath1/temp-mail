import { FaAngleLeft } from "react-icons/fa6";

const Faq = () => {

    const info = [
        {
        queation :`What is a temporary / disposable / anonymous mail?`,
        ans:`
        A temporary, completely anonymous email address that does not require any registration. Delete your mail as fast as you receive it and never worry about spam. It's that simple!`
    },
        {
        queation :`Why do you need a temporary email address?`,
        ans:`
        Whether you're signing up for a new online account and don't want the email address you have associated with your profile, or you're sharing some private thoughts with someone online. It's that easy.`
    },
        {
        queation :`How is it different from usual mail?`,
        listAns:[
            `Does not require registration`,
            `It is completely anonymous: personal data, address itself and emails are deleted after 10 minutes.`,
            `Messages are delivered instantly`,
            `Email address is generated automatically.`,
            `The mailbox is protected from spam, hacking, exploits.`
        ]
    },
        {
        queation :`How do I send an email?`,
        ans:`
        Unfortunately, we do not provide this feature.`
    },
        {
        queation :`How to extend the life time of temporary mail?`,
        ans:`Unfortunately, we do not provide this feature.`
    },
        {
        queation :`How long do you store incoming messages?`,
        ans:`We do store messages for only 10 minutes.`
    },
        {
        queation :`How can I change the password?`,
        ans:`Unfortunately, we do not provide this feature.`
    },
        {
        queation :`Do you keep and renew your domains used by this service?`,
        ans:`No, we aren't renewing domains that were used by this service. If you need a constant account just use Mail.tm.`
    },
        {
        queation :`I forgot my password, is there a way you can reset it?`,
        ans:`No, there is no way we could reset your password.`
    },
]
const length = info.length

    return (
        <div className="px-3 md:px-10 py-6 space-y-2">
            <span className="flex items-center dark:text-white text-gray-700"> <FaAngleLeft />Back</span>
            <h2 className="text-2xl font-bold py-2 dark:text-white text-gray-800" >Frequently Asked Questions</h2>
            <div className="bg-white dark:bg-[#1f2937] dark:border-gray-700  w-full border-2 border-gray-200 rounded-xl">
              <ul className="md:px-5 ">
                {
                    info.map((item,i)=><li key={i}>
                        <li className={`flex flex-col md:flex-row gap-5 px-5 py-7 items-center  text-lg ${length-1==i ? `` : 'border-b-2 dark:border-gray-700'}`}>
                            <h4 className="md:w-5/12 dark:text-white font-semibold text-start text-gray-800">{item.queation}</h4>
                            <p className="md:w-7/12 text-gray-600 dark:text-white">{item.ans? item.ans : <ul className="px-5">
                                {
                                    item.listAns.map((ansItem,i)=><li className="list-disc" key={i}>
                                        {ansItem}
                                    </li>)
                                }
                                </ul>}</p>
                        </li>
                    </li>)
                }
              </ul>
            </div>
        </div>
    );
};

export default Faq;