import { useState } from "react";

export function RegistrationForm() {
  const [emailAddress, setEmailAddress] = useState<string>("");

  return (
    <div className="flex flex-col h-[40rem] w-[29rem] bg-white shadow-n5 rounded-[5px] self-center mt-[5rem] ml-[7rem] absolute z-10 items-center">
      <h2 className="mt-[1rem] font-semibold text-[1.8em] border-b-4 h-fit border-main-red">
        Join us !
      </h2>
      <div className="mt-[2rem] h-[4.5rem] w-full flex justify-center gap-4">
        <div className="w-[45%] flex flex-col gap-1 ">
          <label className="font-medium">
            First name<span className="text-red-500"> *</span>
          </label>
          <input
            className="h-[2.8rem] w-full border-[1.5px] border-[#cdcfd1] rounded-[5px] indent-3 placeholder:indent-3 outline-none focus:border-main-red"
            placeholder="John"
          />
        </div>
        <div className="w-[45%] flex flex-col gap-1">
          <label className="font-medium">
            Last name<span className="text-red-500"> *</span>
          </label>
          <input
            className="h-[2.8rem] w-full border-[1.5px] border-[#cdcfd1] rounded-[5px] indent-3 placeholder:indent-3 outline-none focus:border-main-red"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="h-[4.5rem] w-full flex flex-col mt-[0.8rem] gap-1">
        <label className="font-medium ml-4">
          Montclair email address<span className="text-red-500"> *</span>
        </label>
        <input
          className="h-[2.8rem] w-[94%] self-center border-[1.5px] border-[#cdcfd1] rounded-[5px] indent-3 placeholder:indent-3 outline-none focus:border-main-red"
          placeholder="doej@montclair.edu"
        />
      </div>
      <div className="h-[4.5rem] w-full flex flex-col mt-[0.8rem] gap-1">
        <label className="font-medium ml-4">
          Choose a password<span className="text-red-500"> *</span>
        </label>
        <input
          className="h-[2.8rem] w-[94%] self-center border-[1.5px] border-[#cdcfd1] rounded-[5px] indent-3 placeholder:indent-3 outline-none focus:border-main-red"
          placeholder="*********"
        />
      </div>
      <div className="h-[4.5rem] w-full flex flex-col mt-[0.8rem] gap-1">
        <label className="font-medium ml-4">
          Confirm your password<span className="text-red-500"> *</span>
        </label>
        <input
          className="h-[2.8rem] w-[94%] self-center border-[1.5px] border-[#cdcfd1] rounded-[5px] indent-3 placeholder:indent-3 outline-none focus:border-main-red"
          placeholder="*********"
        />
      </div>
      <div className="mt-[0.8rem] h-[4.5rem] w-full flex justify-center gap-4">
        <div className="w-[45%] flex flex-col gap-1 ">
          <label className="font-medium">Grade</label>
          <input
            className="h-[2.8rem] w-full border-[1.5px] border-[#cdcfd1] rounded-[5px] indent-3 placeholder:indent-3 outline-none focus:border-main-red"
            placeholder="Junior"
          />
        </div>
        <div className="w-[45%] flex flex-col gap-1">
          <label className="font-medium">
            Major<span className="text-red-500"> *</span>
          </label>
          <input
            className="h-[2.8rem] w-full border-[1.5px] border-[#cdcfd1] rounded-[5px] indent-3 placeholder:indent-3 outline-none focus:border-main-red"
            placeholder="Computer Science"
          />
        </div>
      </div>
      <div className="w-full h-[2rem] mt-[1rem] flex items-center gap-2">
        <input
          type="checkbox"
          className=" ml-[1rem] h-[1.2rem] w-[1.2rem] accent-main-red"
        />
        <span>I agree to our Terms, Privacy Policy and Cookies Policy.</span>
      </div>
      <button className="w-[94%] h-[3rem] bg-main-red text-white font-semibold rounded-[7px] mt-auto mb-5">
        CREATE MY ACCOUNT NOW !
      </button>
    </div>
  );
}
