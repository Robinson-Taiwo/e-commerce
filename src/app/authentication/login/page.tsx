"use client" 
import { useState } from "react"
import Image from "next/image"
import { LoginForm } from "@/components/LoginForm"
import { SignupForm } from "@/components/SignupForm"

export default function Dashboard() {
  const [isLogin, setIsLogin] = useState(true) // State to toggle between login and signup

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full px-8 lg:px-0 lg:grid lg:min-h-[600px] max-w-6xl lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-4">
          

            {/* Conditionally render LoginForm or SignupForm based on isLogin state */}
            {isLogin ? <LoginForm /> : <SignupForm />}

            {/* Toggle between forms */}
            <div className="text-center mt-2 text-sm">
              {isLogin ? (
                <p>
                  Don&apos;t have an account?{" "}
                  <button
                    className="underline text-blue-500"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    className="underline text-blue-500"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="hidden bg-muted lg:block">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  )
}
