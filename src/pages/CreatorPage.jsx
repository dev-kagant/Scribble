import { SocialIcon } from 'react-social-icons';

const CreatorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center p-6'>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 my-4 bg-teal-mute'>
        <img src="../../public/smilePic2.jpg" className='w-1/3 my-6 rounded-full'></img>
        <h1 className='font-thick text-5xl text-teal-800'>Kerri Gant</h1>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-8 my-4 bg-teal-mute'>
        <h3 className='font-thick text-3xl text-teal-800 mb-4'>About</h3>
        <p className='text-center text-lg'>Kerri has been developing for the since 2019, professionally for the since 2021. Working with both frontend and backend development. She created Scribble to help organizing the never end list she is constantly making.</p>
      </div>
      <div className='flex flex-col justify-center items-center w-full rounded-4xl p-8 my-4 bg-teal-mute'>
        <h3 className='font-thick text-3xl text-teal-800 mb-4'>Other Projects</h3>
        <div></div>
      </div>
      <div className='flex flex-col justify-center items-center w-full rounded-4xl p-4 my-4 bg-teal-mute'>
        <h3 className='font-thick text-3xl text-teal-800 mb-4'>Socials</h3>
        <div className='flex flex-row justify-between sm:justify-evenly w-full'>
          <SocialIcon url="https://github.com/dev-kagant" borderRadius="50%"/>
          <SocialIcon url="https://www.linkedin.com/in/kerrigant/" borderRadius="50%"/>
          <SocialIcon url="https://x.com/kashm0ni" borderRadius="50%"/>
          <SocialIcon url="https://discord.com/users/kagant" borderRadius="50%"/>
          <SocialIcon url="https://www.google.com" network="sharethis" borderRadius="50%"/>
        </div>
      </div>
    </div>
  )
}

export default CreatorPage