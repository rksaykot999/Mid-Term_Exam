
import './App.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Footer from './components/Footer'



function App() {

  const cards = [0, 1, 2, 3, 4, 5, 6, 7,8 ,9 , 10, 11, 12, 13, 14, 15]

  return (
    <>

      <Navbar></Navbar>
      <div className='text-center text-6xl font-bold m-10'>Card Section</div>
      <div className='grid grid-cols-4 gap-8'>
        {
          cards.map((item) => <Cart />)
        }
      </div>
      <div className='h-screen'>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
