import React from 'react'

const Login = () => {
  return (
    <div className="login py-20">
        <h1 className="text-4xl text-[#F0F1F1] font-medium text-center">Prijavi se</h1>
        <div className="login-form">
            <form id="loginForm" className="flex flex-col gap-5 items-center mt-6">
                <div className="w-full flex flex-col gap-3 items-center">
                    <input className="w-full max-w-[300px] py-1.5 px-3 rounded-[12px] border border-[#494D59] bg-[#333740] text-[#F0F1F1] placeholder:text-[#6C727E] outline-none" type="text" id="emailUsername" placeholder="Email ili korisničko ime" />
                    <input className="w-full max-w-[300px] py-1.5 px-3 rounded-[12px] border border-[#494D59] bg-[#333740] text-[#F0F1F1] placeholder:text-[#6C727E] outline-none" type="password" id="password" placeholder="Lozinka" />
                </div>
                <button className="w-fit py-2 px-12 bg-[#D6831C] rounded-[6px] text-[#F0F1F1] text-center">Prijavi se</button>
            </form>
        </div>
        <div className="flex items-center gap-2.5 mt-10">
            <div className="w-full h-0.25 bg-[#6C727E]"></div>
            <p className="text-[#6C727E] font-medium shrink-0">IP Delivery Platforma</p>
            <div className="w-full h-0.25 bg-[#6C727E]"></div>
        </div>
    </div>
  )
}

export default Login