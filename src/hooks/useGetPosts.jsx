/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { getPosts } from "../services/getPosts";

export const useGetPosts = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  useEffect(() => {

    setLoading(true)

    getPosts()
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
    }, [])

    const visiblePosts = posts.slice(0, currentPage * postsPerPage)
    const loadMorePosts = () => {
      setCurrentPage(currentPage + 1)
    } 

    return { visiblePosts, loading, error, loadMorePosts }

}