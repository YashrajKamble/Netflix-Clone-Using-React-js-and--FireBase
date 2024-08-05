import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
const Player = () => {

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    })

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTZlNjE3NTIxMjk5MmQwZjViODlkMmJiMDkxMjY1NyIsIm5iZiI6MTcyMjg0OTg2OS42Mzg4NjQsInN1YiI6IjY2YjA5N2E4NjZmMWRmMmNjZDFjOWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuBHtorUY0E04J0pMsHQ_s3y2kebrmzhduMjrDPrJ4U'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/533535/videos?language=en-US', options)
            .then(response => response.json())
            .then(response => setApiData(response.results[0]))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="back arrow icon" />
            <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>

            <div className="player-info">
                <p>{apiData.published_at}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>

        </div>
    )
}

export default Player