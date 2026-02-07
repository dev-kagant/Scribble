import { SocialIcon } from 'react-social-icons';
import Joker from '../assets/Joker.png';

const CreatorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center p-6 lg:py-12 xl:pt-20'>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 my-4 bg-teal-mute md:w-3/4'>
        <img src="./smilePic2.jpg" className='w-1/3 my-6 rounded-full lg:w-1/4 xl:w-1/5 md:p-2 lg:p-4'></img>
        <h1 className='font-thick text-5xl text-teal-800'>Kerri Gant</h1>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-8 my-4 bg-teal-mute md:w-3/4'>
        <h3 className='font-thick text-3xl text-teal-800 mb-4'>About</h3>
        <p className='text-center text-lg'>I’ve been building in the digital space since 2016, turning my passion into a professional career in 2021. While I am a capable Full Stack Developer, my heart lies in the Frontend. I specialize in creating seamless, interactive user interfaces that bridge the gap between complex logic and intuitive design.</p>
      </div>
      <div className='flex flex-col justify-center items-center w-full rounded-4xl p-8 my-4 bg-teal-mute md:w-3/4'>
        <h3 className='font-thick text-3xl text-teal-800 mb-4'>Other Projects</h3>
        <div className='flex flex-row justify-evenly items-center w-full'>
          <div className="flex flex-col justify-center items-center mx-4">
            <h4 className="font-base text-base mb-2 sm:text-xl lg:text-2xl lg:mb-4 text-teal-700 mb-1">JOKER</h4>
            <a href="https://dev-kagant.github.io/joker" className='h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px] border-3 border-teal-700 rounded-2xl cursor-pointer'>
              <img src={Joker} className='h-full w-full rounded-xl'/>
            </a>
          </div>
          {/* <div className="flex flex-col justify-center items-center mx-4">
            <h4 className="font-base text-base mb-2 sm:text-xl lg:text-2xl lg:mb-4 text-teal-700 mb-1">JOKER</h4>
            <a href="https://dev-kagant.github.io/joker" className='h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] lg:h-[250px] lg:w-[250px] border-2 border-white rounded-2xl cursor-pointer'>
              <img src={Joker} className='h-full rounded-2xl w-full'/>
            </a>
          </div> */}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full rounded-4xl p-4 my-4 bg-teal-mute md:w-3/4'>
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