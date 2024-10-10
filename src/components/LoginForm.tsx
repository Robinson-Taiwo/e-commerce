// components/LoginForm.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const LoginForm = () => {
    return (
        <form className="grid px-6 lg:px-0 gap-4">

            <div className="w-full items-center mb-10 justify-center flex flex-col" >
                <p className="text-2xl font-bold ">Login to account</p>
                <p className="text-sm  lg:text-base "  >
                    Enter your details below
                </p>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                    >
                        Forgot your password?
                    </Link>
                </div>
                <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
                Login
            </Button>
            <Button variant="outline" className="w-full">
                Login with Google
            </Button>
            {/* <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/authentication/signup" className="underline">
                    Sign up
                </Link>
            </div> */}
        </form>
    )
}
