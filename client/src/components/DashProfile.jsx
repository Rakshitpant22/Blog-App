import { Button, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';
export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
  <div className='max-w-lg mx-auto p-3 w-full'>
    <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
    <form className='flex flex-col gap-4'>
      <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
        <img
          src={currentUser.profilePicture}
          alt='user'
          className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'
        />
      </div>
      <TextInput
        type='text'
        id='username'
        placeholder='username'
        defaultValue={currentUser.username}
      />
      <TextInput
        type='email'
        id='email'
        placeholder='email'
        defaultValue={currentUser.email}
      />
      <TextInput type='password' id='password' placeholder='password' />
      <Button type='submit' gradientDuoTone='purpleToBlue' outline>
          Update
      </Button>
    </form>
    {/* <div className="text-black-400 flex justify-between mt-5 transition-colors duration-400 hover:text-red-500">
      <span className='cursor-pointer'>Delete Account</span>
      <span className='cursor-pointer'>Sign Out</span>
    </div> */}

    <div className="flex justify-between mt-5">
  <span className="cursor-pointer bg-red-600 text-white py-2 px-3 rounded-full transition-colors duration-400 hover:bg-red-700 text-sm">
    Delete Account
  </span>
  <span className="cursor-pointer bg-blue-500 text-white py-2 px-3 rounded-full transition-colors duration-400 hover:bg-blue-600 text-sm">
    Sign Out
  </span>
</div>

  </div>
);
}