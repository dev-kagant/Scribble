import TitleComponent from "../components/TitleComponent";

const LandingPage = () => {

  return (
    <div className="h-screen w-screen bg-orange-200 flex flex-col p-5 items-center">
        <TitleComponent title="" placeholder="Add a site name..." />
    </div>
  )
}

export default LandingPage