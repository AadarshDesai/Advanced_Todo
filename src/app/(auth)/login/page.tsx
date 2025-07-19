"use client"
import { Button } from "@/components/Button";
import { LabelInput } from "@/components/LabelInput";
import { useRouter } from "next/navigation";
import { Login } from "./actions";

export default function LoginPage() {

    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {
      const email = formData.get("Email") as string;
      const password = formData.get("Password") as string;

      if(!email || !password){
        throw new Error("Email or Password is missing.");
      }

      await Login({email, password});
      router.push("/");
    }

    return <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-md">
        <h1 className="font-bold text-4xl text-center mb-6">Login</h1>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <LabelInput name="Email" type="email" placeholder="Enter your email" />
          <LabelInput name="Password" type="password" placeholder="Enter your password" />
          <Button text="Login" />
        </form>
        <div>
            <p className="text-slate-400 mt-3 text-center">Create an account? <span onClick={()=> {
                router.push("/signup")
            }} className="text-slate-800 cursor-pointer font-semibold">Sign Up</span></p>
        </div>
      </div>
    </div>
}

