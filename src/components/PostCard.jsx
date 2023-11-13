/* eslint-disable react/prop-types */
export const PostCard = ({ title }) => {
  return (
      <article className='text-left bg-[#333333] w-5/12 p-4'>
        <h3 className='mb-6'>{title}</h3>
        <a className='bg-[#007BFF] p-2 border-none outline-none font-semibold' href="#">
          Read more
        </a>
      </article>
  )
}