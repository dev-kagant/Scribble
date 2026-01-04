import { SocialIcon } from 'react-social-icons';

const CreatorPage = () => {
  return (
    <div>
      <div>
        <img></img>
        <h1>Kerri Gant</h1>
        <h3>About</h3>
        <p>Kerri has been developing for the last since 2019, professionally for the since 2021. Working with both frontend and backend development. She created Scribble to help organizing the never end list she is constantly making.</p>
      </div>
      <div>
        <h3>Other Projects</h3>
        <div></div>
      </div>
      <div>
        <h3>Socials</h3>
          <SocialIcon url="https://github.com/dev-kagant" borderRadius="30%"/>
          <SocialIcon url="https://www.linkedin.com/in/kerrigant/" borderRadius="30%"/>
          <SocialIcon url="https://x.com/kashm0ni" borderRadius="30%"/>
          <SocialIcon url="https://discord.com/users/kagant" borderRadius="30%"/>
          <SocialIcon url="https://www.google.com" network="sharethis" borderRadius="30%"/>
      </div>
    </div>
  )
}

export default CreatorPage