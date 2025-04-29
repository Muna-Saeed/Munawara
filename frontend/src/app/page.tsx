// src/app/page.tsx <div className="flex items-center justify-center mb-6">  flex-col
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">  
    
      <Hero />
      <Solutions />
    
      {/* Start Your Digital Journey Section */}
      <div className="mt-12 bg-white p-8 rounded shadow-md max-w-3xl">
        <h2 className="text-3xl font-semibold text-black">Start Your Digital Journey</h2>
        <p className="mt-4 text-lg text-black">
          Transform your business with Munawara’s streamlined process:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Sign Up */}
          <div className="p-4 border rounded flex flex-col items-center">
            <Image src="/icons/signup.svg" alt="Sign Up" width={50} height={50} />
            <h3 className="text-xl font-semibold mt-4">Sign Up</h3>
            <p className="text-black text-center">
              Create your account in minutes with some basic information.
            </p>
          </div>

          {/* Select */}
          <div className="p-4 border rounded flex flex-col items-center">
            <Image src="/icons/select.svg" alt="Select Services" width={50} height={50} />
            <h3 className="text-xl font-semibold mt-4">Select</h3>
            <p className="text-black text-center">
              Browse our catalog of digital services and pick what fits your needs.
            </p>
          </div>

          {/* Transform */}
          <div className="p-4 border rounded flex flex-col items-center">
            <Image src="/icons/transform.svg" alt="Transform Business" width={50} height={50} />
            <h3 className="text-xl font-semibold mt-4">Transform</h3>
            <p className="text-black text-center">
              Our expert team customizes the selected services and helps your business grow online.
            </p>
          </div>
        </div>
      </div>
  





    
    </section>
  );
}

