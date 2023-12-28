import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "react-toastify";

const schema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  number: z.string().min(4, "Too short"),
  message: z.string().min(1, "Required"),
});

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {

    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('full_name', data.name);
    formData.append('phone', data.number);
    formData.append('message', data.message);

    axios
      .post(
        "https://animade-production.up.railway.app/contact/",
        formData
      )
      .then(() => {
        reset();
        toast.success("Email sent successfully.", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message ?? 'Something went wrong.', {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast__fiy",
        });
      });
  };

  return (
    <section className="contact-bg py-20 relative z-50">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[400px]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[400px]"></div>
      <div className="custom-container flex flex-col justify-center relative z-10 ">
        <div className="text-center pb-20">
          <h2 className="text-center laptop:text-5.5xl tablet:text-4.4xl text-2xl text-white mb-4">
            <span className="gradient-text ">Contact</span> Us
          </h2>
          <p className="text-xl font-normal text-white w-1/2 mx-auto">
            Let us know what you think.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-aos="zoom-in"
          className="flex flex-col gap-8 max-w-[560px]  mx-auto text-white"
        >
          <div className="relative w-full" data-aos-duration="1000">
            <label
              htmlFor="name"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg  relative z-30 text-sm "
            >
              Full Name
            </label>
            <input
              {...register("name")}
              id="name"
              placeholder="Enter full name"
              className="bg-[#353B40] rounded-r-lg rounded-bl-lg px-10 py-5  border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 h-5 w-5 text-[#7D8992]"
            >
              <path
                d="M10.0002 10.0001C12.3013 10.0001 14.1668 8.1346 14.1668 5.83341C14.1668 3.53223 12.3013 1.66675 10.0002 1.66675C7.69898 1.66675 5.8335 3.53223 5.8335 5.83341C5.8335 8.1346 7.69898 10.0001 10.0002 10.0001Z"
                stroke="#8B8B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                stroke="#8B8B8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="relative w-full">
            <label
              htmlFor="number"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg  relative z-30 text-sm "
            >
              Phone Number
            </label>
            <input
              {...register("number")}
              id="number"
              placeholder="Enter phone number"
              className="bg-[#353B40] rounded-r-lg rounded-bl-lg px-10 py-5  border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="absolute left-3 top-1/2 h-5 w-5 text-[#7D8992]"
            >
              <g clipPath="url(#clip0_129_1619)">
                <path
                  d="M4.16667 3.33325H7.5L9.16667 7.49992L7.08333 8.74992C7.9758 10.5595 9.44039 12.0241 11.25 12.9166L12.5 10.8333L16.6667 12.4999V15.8333C16.6667 16.2753 16.4911 16.6992 16.1785 17.0118C15.866 17.3243 15.442 17.4999 15 17.4999C11.7494 17.3024 8.68346 15.922 6.38069 13.6192C4.07792 11.3165 2.69754 8.25053 2.5 4.99992C2.5 4.55789 2.67559 4.13397 2.98816 3.82141C3.30072 3.50885 3.72464 3.33325 4.16667 3.33325Z"
                  stroke="#8B8B8B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_129_1619">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg  relative z-30 text-sm "
            >
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              placeholder="Enter email address"
              className="bg-[#353B40] rounded-r-lg rounded-bl-lg px-10 py-5  border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="absolute left-3 top-1/2 h-5 w-5 text-[#7D8992]"
            >
              <g clipPath="url(#clip0_129_1624)">
                <path
                  d="M2.5 5.83341C2.5 5.39139 2.67559 4.96746 2.98816 4.6549C3.30072 4.34234 3.72464 4.16675 4.16667 4.16675H15.8333C16.2754 4.16675 16.6993 4.34234 17.0118 4.6549C17.3244 4.96746 17.5 5.39139 17.5 5.83341V14.1667C17.5 14.6088 17.3244 15.0327 17.0118 15.3453C16.6993 15.6578 16.2754 15.8334 15.8333 15.8334H4.16667C3.72464 15.8334 3.30072 15.6578 2.98816 15.3453C2.67559 15.0327 2.5 14.6088 2.5 14.1667V5.83341Z"
                  stroke="#8B8B8B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 5.83325L10 10.8333L17.5 5.83325"
                  stroke="#8B8B8B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_129_1624">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="relative w-full">
            <label
              htmlFor="message"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg  relative z-30 text-sm "
            >
              How can we help?
            </label>
            <textarea
              {...register("message")}
              id="message"
              placeholder="Type your message..."
              className="bg-[#353B40] rounded-r-lg rounded-bl-lg px-4 py-4  border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light"
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:text-primary  hover:bg-transparent border-2 border-primary duration-300 font-bold   w-1/2 px-6 py-5 rounded-lg font-body text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
