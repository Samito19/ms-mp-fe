export default function RegistrationPage() {
  return (
    <h1 className="h-screen w-screen">
      <nav className="h-[4rem] w-full flex items-center mt-4">
        <img
          src="/msu-logo.svg"
          alt="Picture of the author"
          className="h-[3.5rem] ml-5 mr-2"
        />
        <img
          src="/msu-marketplace-logo.svg"
          alt="Picture of the author"
          className="h-[2.5rem]"
        />
        <span className="ml-auto mr-4 font-medium text-[1.1em] cursor-pointer select-none hover:text-main-red transition-all">Explore</span>
        <button className="h-[2.2rem] w-[6rem] bg-main-red mr-8 text-white rounded-[5px] font-medium">
          Log In 
        </button>
      </nav>
    </h1>
  );
}
