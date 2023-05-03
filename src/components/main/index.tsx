import About from '../about'
import Articles from '../articles'
import Home from '../home'
import Navbar from '../navbar'
import Tech from '../tech'

const Main = () => {
  return (
    <>
      <main className='relative min-h-screen flex-col items-center justify-between p-24'>
        <div
          className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full
      before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-2 after:translate-y-full after:bg-gradient-conic  after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700/10 after:from-sky-900 after:via-[#0141ff]/40 before:lg:h-[360px]"
        ></div>
        <Navbar />
        <Home />
        <About />
        <Tech />
      </main>
      <Articles />
    </>
  )
}

export default Main
