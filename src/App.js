import { useEffect, useState, useRef } from 'react';
import axios from 'axios';



function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  let ref = useRef()

  const handleScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.offsetHeight) {
      setPage(prev => prev + 1)
    }
  }
  useEffect(() => {
    ref.current.addEventListener('scroll', handleScroll)
    return () => {
      ref.current.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const getPhotos = async () => {
      setIsLoading(true)
      let { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
      setItems([...items, ...data])
      setIsLoading(false)
    }
    getPhotos()
  }, [page])

  return (
    <div ref={ref} className='container'>
      {items.map(item => <div key={item.id} className='data-card'><img src={item.url} alt="img" /></div>)}
      {isLoading ? <div className='center'>loading...</div> : null}
    </div>
  );
}

export default App;
