import React, { useState, useEffect } from 'react'

function WatchList() {


  let [movie_watchlist, setmoviewatchlist] = useState([])
  let [ratingOrder, setratingOrder] = useState(1)
  let [generslist , setgenerslist] = useState([])
  let [curgenre, setcurgenre] = useState('All Genres')

  let genreidsObj = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };


  useEffect(() => {
    let tempwatchlist = JSON.parse(localStorage.getItem('imbd')) || []
    setmoviewatchlist(tempwatchlist)
  }, [])

  useEffect(()=>{
    let temlist = movie_watchlist.map((movie)=>{
      return genreidsObj[movie.genre_ids[0]]
    })
    temlist = new Set(temlist)

    setgenerslist(["All Genres", ...temlist])
  },[movie_watchlist])

  // let movie_watchlist = [
  //   {
  //     "adult": false,
  //     "backdrop_path": "/z6OkT7XjzSrgstiTlld0jUvME9y.jpg",
  //     "id": 726209,
  //     "title": "Leave the World Behind",
  //     "original_language": "en",
  //     "original_title": "Leave the World Behind",
  //     "overview": "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices — and two strangers appear at their door.",
  //     "poster_path": "/l2bqoY9rgPAgugPkOTowIPIv61j.jpg",
  //     "media_type": "movie",
  //     "genre_ids": [
  //       9648,
  //       53,
  //       18
  //     ],
  //     "popularity": 190.385,
  //     "release_date": "2023-11-24",
  //     "video": false,
  //     "vote_average": 6.8,
  //     "vote_count": 99
  //   },
  //   {
  //     "adult": false,
  //     "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
  //     "id": 466420,
  //     "title": "Killers of the Flower Moon",
  //     "original_language": "en",
  //     "original_title": "Killers of the Flower Moon",
  //     "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
  //     "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
  //     "media_type": "movie",
  //     "genre_ids": [
  //       80,
  //       18,
  //       36
  //     ],
  //     "popularity": 921.627,
  //     "release_date": "2023-10-18",
  //     "video": false,
  //     "vote_average": 7.7,
  //     "vote_count": 1186
  //   }]

  let filtered_watch_list = movie_watchlist

  filtered_watch_list = (curgenre=== 'All Genres') ? filtered_watch_list: filtered_watch_list.filter((movie)=>{ return genreidsObj[movie.genre_ids[0]] === curgenre})

  if (ratingOrder === 1)
  {
    filtered_watch_list = filtered_watch_list.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
  }

  if (ratingOrder === -1)
  {
    filtered_watch_list = filtered_watch_list.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
  }

  
  return (
    <div>
      <div className='mt-6 mb-3 flex justify-center space-x-3'>
      
        {
          generslist.map((genre)=>{
            return (
              <button onClick={()=>{
                setcurgenre(genre)
              }} className={ 
                curgenre === genre ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold":
              "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold" }> {genre} </button>
            )
          })
          
        }


      </div>




      <table className='w-full border-collapse bg-white text-gray-900 text-left'>
        <thead className='bg-gray-50 py-8'>
          <tr>
            <th className='px-6'> MovieName </th>
            <th>
              <div className="flex">
                <img
                  src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                  className="mr-1"
                  onClick={()=>{
                    setratingOrder(-1)
                  }}
                />
                <div>Ratings</div>
                <img
                  src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                  className="ml-1"
                  onClick={()=>{
                    setratingOrder(1)
                  }}
                />
              </div>
            </th>
            <th> Popularity </th>
            <th> Genre </th>
          </tr>
        </thead>

        <tbody className='border-gray-100'>
          {
            filtered_watch_list.map((movie) => {
              return (
                <tr>
                  <td>
                    <div key={movie.id} className='h-[20vh] w-[150px] bg-center bg-cover rounded-xl m-4 flex items-end'
                      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})` }}>
                      <div className='bg-gray-900 text-white w-full text-center bg-opacity-60 rounded-b-xl'>
                        {movie.original_title}

                      </div>
                    </div>
                  </td>
                  <td>
                    {movie.vote_average}
                  </td>
                  <td>
                    {movie.popularity}
                  </td>
                  <td>
                    {genreidsObj[movie.genre_ids[0]]}
                  </td>
                </tr>)
            })
          }


        </tbody>
      </table>
    </div>
  )
}

export default WatchList
