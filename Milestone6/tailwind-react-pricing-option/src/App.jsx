import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/daisyNav/daisyNav'
import NavBar from './components/navBar/NavBar'
import PricingOptions from './components/pricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then (res => res.json())
console.log(pricingPromise)
function App() {


  return (
    <>
    <header>
      <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
     <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
     <PricingOptions pricingPromise ={pricingPromise}></PricingOptions>
     </Suspense>

    </header>

    <main>

    </main>
    </>
  )
}

export default App
