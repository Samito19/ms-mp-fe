import { RegistrationForm } from "../components/landing-page/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <div className="h-screen w-screen absolute background-pattern -z-10"></div>
      <nav className="h-[4rem] w-full flex items-center mt-4">
        <img
          src="/landing-page/msu-logo.svg"
          alt="Montclair State University Shield Logo"
          className="h-[3.5rem] ml-5 mr-2"
        />
        <img
          src="/landing-page/msu-marketplace-logo.svg"
          alt="Montclair State University Marketplace Logo"
          className="h-[2.5rem]"
        />
        <span className="ml-auto mr-4 font-medium text-[1.1em] cursor-pointer select-none hover:text-main-red transition-all">
          Explore
        </span>
        <button className="h-[2.2rem] w-[6rem] bg-main-red mr-8 text-white rounded-[5px] font-medium">
          Log In
        </button>
      </nav>
      <section className="h-[40rem] w-full flex">
        <div className="w-[50rem] overflow-x-visible float-left">
          <h1 className="text-[3.3em] w-[47rem] mt-[7rem] ml-[5rem] font-semibold leading-[65px]">
            Selling and buying used goods on campus {""}
            <span className="text-main-red">has never been easier</span> !
          </h1>
          <div className="mt-[1.8rem] ml-[5rem] w-[44rem]">
            <span className=" w-fit text-left text-[1.4em] italic">
              Create an account today with your @montclair.edu email address and
              start buying or selling !
            </span>
          </div>
          <div className="h-[15rem] w-full flex justify-center gap-7 ml-[2rem] mt-[2.2rem]">
            <div className="h-full w-[30%] flex flex-col items-center justify-center gap-[1rem]">
              <img src="/landing-page/security-icon.svg" />
              <p className="text-center font-semibold">
                Our services are only accessible to identifiable MSU students
              </p>
            </div>
            <div className="h-full w-[30%] flex flex-col items-center justify-center gap-[1rem]">
              <img src="/landing-page/network-icon.svg" />
              <p className="text-center font-semibold">
                Benefit from a large network of students to sell to or buy goods
                from
              </p>
            </div>
            <div className="h-full w-[30%] flex flex-col items-center justify-center gap-[1rem]">
              <img src="/landing-page/security-icon.svg" />
              <p className="text-center font-semibold">
                Our platform is very intuitive and provides all the features you
                need.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full flex grow">
          <img
            src="/landing-page/msu-hawk.svg"
            className="h-[15rem] ml-[1rem] -mt-[7rem] absolute z-20"
            alt="Montclair State University Hawk"
          />
          <img
            src="/landing-page/red-registration-blob.svg"
            className="h-[48rem] ml-[4rem] mt-[2rem]"
          />
          <RegistrationForm/>
        </div>
      </section>
    </div>
  );
}
