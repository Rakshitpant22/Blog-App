// import { Button } from 'flowbite-react';

// export default function CallToAction() {
//   return (

// <div className='flex flex-col sm:flex-row p-6 border border-cyan-400 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-gradient-to-r  from-pink-500 via-cyan-200 to-indigo-400'><div className="flex-1 justify-center flex flex-col">
// <h2 className='text-3xl font-bold text-gray-600 '>
// “No cap, this is where thoughts turn viral!”
//         </h2>
//         <p className='text-gray-600 text-lg mb-5'>
//         Publish your passions, your way!
//         </p>
//         <p className='text-gray-600 text-lg mb-4'>
//         Give multiple writers and editors access to your blog platform so they can help manage your content.
//         </p>
//         <Button gradientDuoTone='purpleToPink' className='rounded-full text-lg px-6 py-2'>
//           <a href="https://leetcode.com/u/rakshit2003/" target='_blank' rel='noopener noreferrer'>
//             Explore my profile
//           </a>
//         </Button>
//       </div>
//       <div className="p-6 flex-1">
//         <img 
//           src="https://res-console.cloudinary.com/dyeetjsrk/thumbnails/v1/image/upload/v1728213952/c3NzX2xydnJmMw==/preview" 
      
//         />
//       </div>
//     </div>
//   )
// }

import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with 100 JavaScript Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                    100 JavaScript Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
        </div>
    </div>
  )