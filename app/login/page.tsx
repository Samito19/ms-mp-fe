import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-[#f9fafb]">
      <img
        src="/landing-page/msu-logo.svg"
        alt="Montclair State University Shield Logo"
        className="h-[4rem] ml-5 mr-2 mt-[5rem]"
      />
      <h1 className="text-[2.2em] font-bold font-manrope">
        Log in to your account
      </h1>
      <span className=" text-slate-500 font-normal">
        Don't have an account ?{" "}
        <span className="text-main-red font-medium cursor-pointer">
          Sign Up
        </span>
      </span>
      <LoginForm/>
    </div>
  );
}

export default LoginPage;
