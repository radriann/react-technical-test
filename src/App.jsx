import { ListOfPosts } from './components/ListOfPosts'

function App() {
  return (
    <main className='max-w-6xl min-h-screen mx-auto bg-[#1C1C1C] text-white'>
      <div className='w-full mx-auto p-4'>
        <h1 className='text-center font-bold text-3xl'>React Basic</h1>
        <ListOfPosts />
      </div>
    </main>
  )
}

export default App
