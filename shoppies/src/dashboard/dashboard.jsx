import './dashboard.scss';
import { Button, SIZE, SHAPE } from 'baseui/button';
import Plus from 'baseui/icon/plus';
import { useState, useEffect } from 'react';
import Addmodal from './add-modal/addmodal';
import { useLocation } from 'react-router-dom';
import { getMovieById } from './dashboard.service';
import Delete from 'baseui/icon/delete';
function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [movies, setMovies] = useState([]);

    const location = useLocation();

    useEffect(() => {
        (async () => {
            let params = new URLSearchParams(location.search);
            let prenominatedIDs = [
                // unique ids
                ...new Set(
                    params.get('n') ? JSON.parse(params.get('n')).i : []
                ),
            ].reverse();
            let fetchedMovies = [];

            for (let i = 0; i < prenominatedIDs.length; i++) {
                let resp = await getMovieById(prenominatedIDs[i]);
                console.log(resp);
                if (resp.data.Response === 'True') {
                    fetchedMovies.push(resp.data);
                }
            }
            setMovies(fetchedMovies);
        })();
    }, [location]);

    return (
        <div className="dashboard-host">
            <div class="header">
                <div id="title">Your Nominations</div>
                <div style={{ flexGrow: 999 }}></div>
                <div id="add-button">
                    <Button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                        size={SIZE.large}
                        shape={SHAPE.circle}
                    >
                        <Plus />
                    </Button>
                </div>
            </div>
            <div id="items-grid">
                {movies.map((movie, index) => {
                    return (
                        <div class="movie-item">
                            <div class="movie-image">
                                <img key={index} src={movie.Poster}></img>
                                <div class="onhover">
                                    <Delete size={64}></Delete>
                                </div>
                            </div>
                            <div class="movie-title"> {movie.Title}</div>
                            <div class="movie-year"> {movie.Year}</div>
                        </div>
                    );
                })}
            </div>

            <Addmodal isOpen={isOpen} setIsOpen={setIsOpen}></Addmodal>
        </div>
    );
}

export default Dashboard;
