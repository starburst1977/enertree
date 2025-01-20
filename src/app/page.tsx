import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function Home() {
  return (
    <div className="bg-white">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-6 lg:py-0 sm:px-0">
          <form className="w-full max-w-xs space-y-4 md:space-y-6 xl:max-w-sm" action="#">
            <h1 className="text-2xl font-bold text-blue-600">Welcome back</h1>
            <p className="text-base font-light text-gray-500">
              Please enter the login credentials you received. In case of problems please contact your administrator.
            </p>
            <div>
                <Label htmlFor="email" className="block mb-2 text-base font-light text-blue-600 dark:text-gray-300">Username</Label>
                <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Enter your email" />
            </div>
            <div>
                <Label htmlFor="password" className="block mb-2 text-base font-light text-blue-600 dark:text-gray-300">Password</Label>
                <Input placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
              </div>
              <a href="room" className="text-sm font-medium text-gray-500 underline hover:text-blue-600">Forgot password?</a>
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-base px-5 py-2.5 text-center">Sign in to your account</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account? <a href="room" className="font-medium text-gray-500 underline hover:text-blue-600">Sign up</a>
            </p>
          </form>
        </div>  
        <div className="flex items-center justify-center px-4 bg-blue-600 lg:py-0 sm:px-0">
          <div className="max-w-sm xl:max-w-md">
            <a href="#" className="flex items-center mb-8 text-2xl font-bold text-blue-200">
              <Image className="w-12 h-12 mr-6" src="/images/logo.svg" alt="logo" width={32} height={32} />
                  Enertree    
            </a>
            <h1 className="mb-8 text-4xl font-light text-white leading-tight">Solutions for High-Performance Technologies.</h1>
            <p className=" font-light text-blue-300 mb-8">Our PDUs support a wide range of applications, from AI, HPC, ML, and IoT to GPU-intensive workloads from Nvidia, AMD, Intel, Graphcore, and AWS. </p>
            
            <p className=" font-light text-blue-300">More Information available here: <a href="room" className="font-medium text-blue-200 underline hover:text-white">www.enertree.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}


