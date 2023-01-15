function LoginForm() {
  return (
    <form className="mt-[3rem] w-[32rem] h-[22rem] shadow-n4 rounded-[8px] bg-white flex flex-col items-center gap-4">
      <div className="w-[27rem] flex flex-col gap-2 mt-[2.2rem]">
        <label className="font-medium self-start">Email address</label>
        <input className="h-[2.5rem] w-full border-[1px] border-[#c2bdbd] rounded-[5px] indent-3 outline-none focus:border-main-red focus:border-[2px]" />
      </div>
      <div className="w-[27rem] flex flex-col gap-2">
        <label className="font-medium self-start">Password</label>
        <input className="h-[2.5rem] w-full border-[1px] border-[#c2bdbd] rounded-[5px] indent-3 outline-none focus:border-main-red focus:border-[2px]" />
      </div>
      <div className="w-[27rem] h-[3rem] flex items-center gap-2">
        <input
          type="checkbox"
          className="h-[1.2rem] w-[1.2rem] accent-main-red"
        />
        <span className="font-normal">Remember me</span>
        <span className="text-[0.9em] ml-auto text-main-red font-medium cursor-pointer">
          Forgot your password ?
        </span>
      </div>
      <button className="h-[2.7rem] w-[27rem] bg-main-red text-white font-medium rounded-[8px]">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
