import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTZlNjE3NTIxMjk5MmQwZjViODlkMmJiMDkxMjY1NyIsIm5iZiI6MTcyMjg0OTg2OS42Mzg4NjQsInN1YiI6IjY2YjA5N2E4NjZmMWRmMmNjZDFjOWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuBHtorUY0E04J0pMsHQ_s3y2kebrmzhduMjrDPrJ4U'
        }
    };

    useEffect(() => {
        setLoading(true); // Start loading
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    setApiData(data.results[0]);
                } else {
                    setError("No videos found.");
                }
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setError("Failed to fetch video data.");
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="back arrow icon" onClick={() => navigate(-2)} />
            {apiData.key ? (
                <iframe
                    width='90%'
                    height='90%'
                    src={`https://www.youtube.com/embed/${apiData.key}`}
                    title='trailer'
                    frameBorder='0'
                    allowFullScreen
                ></iframe>
            ) : (
                <p>No video available</p>
            )}

            <div className="player-info">
                {apiData.published_at && (
                    <p>
                        <span>{moment(apiData.published_at).format('MMMM Do YYYY')}</span>
                        {`, ${moment(apiData.published_at).fromNow()}`}
                    </p>
                )}
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
};

export default Player;
