import {useEffect} from 'react'
import {Header} from '../components/header'
import {AboutUs} from '../components/about us'
import {OurEvents} from '../components/our events'
import {Location} from '../components/location'

function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <>
    <Header />
    <AboutUs />
    <OurEvents />
    <Location />
    </>
  )
}
export default Home;