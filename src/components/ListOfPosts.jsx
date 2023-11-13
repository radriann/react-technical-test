import { useState } from "react"
import { useGetPosts } from "../hooks/useGetPosts"
import { PostCard } from "./PostCard"

export const ListOfPosts = () => {

  const [search, setSearch] = useState('')
  const { visiblePosts, loading, error, loadMorePosts } = useGetPosts()

  const handleFilterPosts = (e) => {
    setSearch(e.target.value)
  }

  const filteredPosts = visiblePosts.filter(post => post.title.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
      <section className='w-fit mx-auto my-4'>
        <input
          className='p-2 w-42 bg-[#222222] text-white'
          onChange={handleFilterPosts}
          value={search}
          type="text"
          placeholder="Nombre del post..."
        />
      </section>

      {loading && <h1 className='text-center'>Loading...</h1>}
      {error && <h1 className='text-center'>Error...</h1>}

      {filteredPosts.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        <section className='flex flex-col justify-center items-center space-y-8'>
          {filteredPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
          <button className='bg-[#2e3338] p-2 border-none outline-none font-semibold' onClick={loadMorePosts}>
            Cargar más
          </button>
        </section>
      )}
    </>
  )

}