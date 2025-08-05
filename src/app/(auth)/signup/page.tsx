"use client"

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { Signup }  from "./actions";
import { LabelInput } from "@/components/LabelInput";

export default function SignupPage() {

    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
      const name = formData.get("Name") as string;
      const email = formData.get("Email") as string;
      const password = formData.get("Password") as string;

      if(!email || !password) {
        //Show better errors.
        throw new Error("Email or password are required!")
      }

      await Signup({name, email, password})
      router.push("/")
    }

    return <div>
        <div className="bg-slate-200 h-screen flex justify-center items-center">
              <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-md">
                <h1 className="font-bold text-4xl text-center mb-6">Sign up</h1>
                {/* see the submit button bug */}
                <form action={handleSubmit} className="flex flex-col gap-4">
                  <LabelInput name="Name" type="text" placeholder="Enter your name"/>
                  <LabelInput name="Email" type="email" placeholder="Enter your email" />
                  <LabelInput name="Password" type="password" placeholder="Enter your password" />
                  <Button text="Sign Up" />
                </form>
                <div>
                    <p className="text-slate-400 mt-3 text-center">Alreadt have an account? <span onClick={()=> {
                        router.push("/login")
                    }} className="text-slate-800 cursor-pointer font-semibold">Login</span></p>
                </div>
              </div>
        </div>
    </div>
}

