
const AboutPage = () => {
  return (
    <div  className="h-full w-full lg:px-14">
      <h1 className='flex justify-center my-8 text-teal-800 font-thick text-4xl sm:text-5xl sm:my-12 md:text-6xl lg:text-8xl lg:my-20'>SCRIBBLE</h1>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 bg-teal-mute m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-thick text-xl text-teal-800 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>What Is it?</h2>
        <p className='text-justify text-lg sm:text-2xl lg:text-4xl'>Scribble is an application allowing users to create lists to organgize the life. These list can be organized by categories allowing users to go even deeper into organizing.</p>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 bg-teal-mute m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-thick text-xl text-teal-800 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Why Create It?</h2>
        <p className='text-justify text-lg sm:text-2xl lg:text-4xl'>I created this app because I am always making list and then leaving them at home when I need them or miss placing them. I created it the way I did so that I can have more control over the way I use them. For example I could create a shopping list or I can create multiple list around shopping and dividing it into different parts of the store, or different store I need to visit. Or I could make a packing list that separates the categories of packing, ie. day wear, night wear, swim, toilettries, etc. Example</p>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 bg-teal-mute m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-thick text-xl text-teal-800 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Tech Stack and Key Details</h2>
        <div className='text-left w-full text-lg mb-4 sm:text-2xl lg:text-4xl lg:mb-10'>Built with Javascript using Vite, React, and TailwindCSS.</div>
        <div className='text-justify text-lg sm:text-2xl lg:text-4xl'>This application has no backend and everything is handle in the frontend with memory being saved and manipulated using LocalStorage.</div>
      </div>
    </div>
  )
}

export default AboutPage;