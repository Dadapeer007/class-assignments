import React,{useState,useEffect} from 'react'
import Pagination from './Pagination'
import axios from "axios"

function Movies() {
  let [movies_list, setmovielist] = useState([])
  let [pageNum, setpageNum] = useState(1)
  let [watchlist, setwatchlsit] = useState([])

  let onNext =()=>{
    setpageNum(pageNum+1)
    console.log(pageNum)
  }
  let onPrev = ()=>{
    if(pageNum > 1){
      setpageNum(pageNum-1)
      console.log(pageNum)
    }
  }
  let getmovies =  ()=>{
    let tempwatchlist = JSON.parse(localStorage.getItem('imbd')) || []
    setwatchlsit(tempwatchlist)
    let templistpromise = axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1ad1f02e08eedb84b29fdec18eb23edd&page=${pageNum}`)
    templistpromise.then((response)=>{
      console.log(response.data.results)
      setmovielist([...response.data.results])
    })


  }

  useEffect(()=>{
    getmovies()
  }, [pageNum])

  let addwatchlist = (movie)=>{
    let newWatchlist = [...watchlist, movie]
    localStorage.setItem('imbd', JSON.stringify(newWatchlist))
    setwatchlsit(newWatchlist)
   
  }

  let removeWatchlist = (movie)=>{
    let newWatchlist = watchlist.filter((m)=>{  return m.id !== movie.id})
    localStorage.setItem('imbd', JSON.stringify(newWatchlist))
    setwatchlsit([...newWatchlist])
   
  }

  
  return (
    <div>
      <div className='text-2xl font-bold text-center'> Trending Movies </div>

      <div className='flex flex-wrap justify-center'>

        {movies_list.map((movie) => {

          return (

            <div key={movie.id} className='h-[30vh] w-[200px] bg-center bg-cover rounded-xl m-4 hover:scale-110 duration-300  flex items-end relative'
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})` }}>
              
              {

                watchlist.some((watchmovie)=>{ return watchmovie.id === movie.id}) ? (<div onClick= {() =>{removeWatchlist(movie)}} className='absolute top-2 right-2'> ❤️ </div>):
                (<div onClick= {() =>{addwatchlist(movie)}} className='absolute top-2 right-2'> 🤍 </div>)
                
              
              
              }

              <div className='bg-gray-900 text-white w-full text-center bg-opacity-60 rounded-b-xl'>

                {movie.original_title}

              </div>

            </div>

          )
        })}



      </div>
      <Pagination onNextprop = {onNext} onPrevprop={onPrev} pageNumprop={pageNum} />
    </div>
  )
}

export default Movies
