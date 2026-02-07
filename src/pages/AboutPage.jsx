
const AboutPage = () => {
  return (
    <div  className="h-full w-full lg:px-14">
      <h1 className='flex justify-center my-8 text-teal-800 font-thick text-4xl sm:text-5xl sm:my-12 md:text-6xl lg:text-8xl lg:my-20'>SCRIBBLE</h1>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 bg-teal-mute m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-thick text-xl text-teal-800 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>What Is it?</h2>
        <p className='text-justify text-lg sm:text-2xl lg:text-4xl'>Scribble is a list-based application designed to help users organize their lives through customizable categories.</p>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 bg-teal-mute m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-thick text-xl text-teal-800 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Why Create It?</h2>
        <p className='text-justify text-lg sm:text-2xl lg:text-4xl'>I built this application to solve a recurring personal frustration: the "forgotten list." I found myself constantly leaving physical notes at home or losing track of digital ones. I needed a high-control organizational tool that lived on my device and adapted to my specific mental models.</p>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 bg-teal-mute m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-thick text-xl text-teal-800 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Key Application Features</h2>
        <ul>
          <li className='list-disc pl-4 text-left w-full text-lg mb-4 sm:text-2xl lg:text-4xl lg:mb-10'><b>Multi-Store Logistics:</b> Dividing a single grocery run into sub-lists for specific aisles or different retail locations.</li>
          <li className='list-disc pl-4 text-left w-full text-lg mb-4 sm:text-2xl lg:text-4xl lg:mb-10'><b>Categorized Packing:</b> Organizing travel needs into logical clusters (e.g., Day Wear, Toiletries, Electronics) rather than one overwhelming list.</li>
          <li className='list-disc pl-4 text-justify text-lg sm:text-2xl lg:text-4xl'><b>Always-With-You Access:</b> Utilizing a mobile-first design so my data stays in my pocket, not on the kitchen counter.</li>
        </ul>
      </div>
      <div className='flex flex-col justify-center items-center rounded-4xl p-4 bg-teal-mute m-4 sm:m-10 sm:p-12 lg:p-16'>
        <h2 className='font-thick text-xl text-teal-800 mb-4 sm:text-3xl sm:mb-6 md:text-4xl lg:text-5xl lg:mb-14'>Technical Features</h2>
        <ul>
          <li className='list-disc pl-4 text-left w-full text-lg mb-4 sm:text-2xl lg:text-4xl lg:mb-10'><b>Core Stack:</b> Built with <b>JavaScript</b>, <b>React</b>, and <b>Redux</b> for an optimized development workflow.</li>
          <li className='list-disc pl-4 text-left w-full text-lg mb-4 sm:text-2xl lg:text-4xl lg:mb-10'><b>Styling:</b> Custom-themed using Tailwind CSS v4 for a modern, responsive interface.</li>
          <li className='list-disc pl-4 text-justify text-lg sm:text-2xl lg:text-4xl'><b>Persistence:</b> Implemented a <b>client-side-only</b> storage solution, using LocalStorage to manage and manipulate application state directly in the browser.</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage;