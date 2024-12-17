import AboutAchievement from '@/app/_components/about-achievement'
import AboutDetails from '@/app/_components/about-details'
import AboutHero from '@/app/_components/about-hero'


const page = () => {
  return (
    <div>
      <AboutHero/>
      <div className='px-10 py-7'>
        <AboutDetails/>
        <AboutAchievement/>
      </div>
    </div>
  )
}

export default page
