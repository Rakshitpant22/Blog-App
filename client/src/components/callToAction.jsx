import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
<div className='flex flex-col sm:flex-row p-6 border border-cyan-400 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-gradient-to-r  from-pink-500 via-cyan-200 to-indigo-400'><div className="flex-1 justify-center flex flex-col">
<h2 className='text-3xl font-bold text-gray-600 mb-4 animate-fadeIn '>
“No cap, this is where thoughts turn viral!”
        </h2>
        <p className='text-gray-600 text-lg mb-5'>
        Publish your passions, your way!
        </p>
        <p className='text-gray-600 text-lg mb-4'>
        Give multiple writers and editors access to your blog platform so they can help manage your content.
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-full text-lg px-6 py-2'>
          <a href="https://leetcode.com/u/rakshit2003/" target='_blank' rel='noopener noreferrer'>
            Explore Projects
          </a>
        </Button>
      </div>
      <div className="p-6 flex-1">
        <img 
          src="https://img.freepik.com/free-vector/smartphone-users-chatting-online_74855-4572.jpg?t=st=1728209279~exp=1728212879~hmac=dc78652be9dc3f4703b1ae3eba87a2fbd187b40e04006154b2e929ce69d18f2f&w=2000" 
          alt="Blog CTA Graphic" 
          className='w-full h-auto rounded-xl shadow-lg'
        />
      </div>
    </div>
  )
}