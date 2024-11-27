import Square from './components/Square'
import Bee from './components/Bee'

function App() {
  return (
    <main className='w-full h-full min-h-screen bg-[#1e1e1e] flex flex-col justify-center items-center gap-20'>
      <Square />
      <Bee />
    </main>
  )
}

export default App
