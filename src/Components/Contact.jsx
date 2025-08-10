import React from 'react'
import { toast } from 'react-toastify';


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "89b8e692-42a0-40d1-8fca-6c15bc6e38f5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form submitted");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult("");
        }
    };

    return (
        <div className="text-center p-6 py-20 lg:px-30 w-full
     overflow-hidden" id='contact'>
            <h1 className="text-2xl sm:text-4xl 
      font-bold mb-2 text-center">Contact <span className='underline 
      underline-offset-4
      decoration-1 font-light'> Us</span></h1>
            <p className='text-center
             mb-8 mx-auto max-w-80'>
                Facing any problem in the products delivered by us?
                Contact us right now.
            </p>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto pt-13">
                <div className='flex flex-wrap'>
                    <div className="w-full md:w-1/2 text-left"> Your Name
                        <input className="w-full border border-gray-300 py-3 rounded md:px-4 mt-2" name='Name' type='text' placeholder="Enter your Name..." required />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4"> Your Email
                        <input className="w-full border border-gray-300 py-3 rounded md:px-4 mt-2" name='Email' type='email' placeholder="Enter your email..." required />
                    </div>

                </div>
                <div className="my-6 text-left">
                    Message
                    <textarea className='w-full border border-gray-300 rounded 
                    py-3 px-4 mt-2 h-48 resize-none'
                        name="Message" placeholder="Enter your message" required>

                    </textarea>
                </div>
                <button className="px-12 py-2 bg-blue-400 text-white 
                mb-12 hover:bg-blue-600 rounded-lg
                ">{result ? result : "Send"}</button>
            </form>


        </div>
    )
}

export default Contact
