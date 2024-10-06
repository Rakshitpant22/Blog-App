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
            Explore my profile
          </a>
        </Button>
      </div>
      <div className="p-6 flex-1">
        <img 
          src="https://res-console.cloudinary.com/dyeetjsrk/thumbnails/v1/image/upload/v1728213952/c3NzX2xydnJmMw==/preview" 
          className='w-full h-auto rounded-xl shadow-lg'
        />
      </div>
    </div>
  )
}