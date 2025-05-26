import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlug, faGlobe } from "@fortawesome/pro-regular-svg-icons"
export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-6 lg:py-0 sm:px-0">
          <form className="w-full max-w-xs space-y-4 md:space-y-6 xl:max-w-sm" action="#">
            <h1 className="text-2xl font-bold text-blue-600">Welcome back to</h1>
            <div className="border border-blue-200 bg-blue-50 my-4 px-8 py-4 rounded-xl flex items-center justify-start gap-6">
              <FontAwesomeIcon icon={faPlug} className="text-blue-600" size="2xl"/>
              <div><h1 className="font-bold text-blue-600 text-lg leading-5">129.168.2.1</h1>
              <h2 className="font-normal text-blue-400 text-sm">PDU5</h2></div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 my-4 px-8 py-4 rounded-xl flex items-center justify-start gap-6">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-600" size="2xl"/>
              <div><h1 className="font-bold text-blue-600 text-lg leading-5">Unnamed Installation</h1>
              <h2 className="font-normal text-blue-400 text-sm">Enertree Platform</h2></div>
            </div>
            
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
            
          </form>
        </div>  
        <div className="flex items-center justify-center px-4 lg:py-0 sm:px-0 login-bg">
          <div className="max-w-sm xl:max-w-md">
            <a href="#" className="flex items-center mb-8 text-2xl font-bold text-yellow-400">
              <Image className="w-12 h-12 mr-6" src="/images/logo.svg" alt="logo" width={32} height={32} />
              Enertree    
            </a>
            <h1 className="mb-8 text-5xl font-bold text-white leading-tight">Solutions for<br /> High-Performance <br /> Technologies.</h1>
            <p className=" font-light text-blue-200 mb-8">Our PDUs support a wide range of applications, from AI, HPC, ML, and IoT to GPU-intensive workloads from Nvidia, AMD, Intel, Graphcore, and AWS. </p>
            
            <p className=" font-light text-blue-400">More Information available here: <a href="room" className="font-medium text-blue-200 underline hover:text-white">www.enertree.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}


