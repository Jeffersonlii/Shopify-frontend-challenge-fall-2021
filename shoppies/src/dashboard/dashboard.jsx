import './dashboard.scss';
import { Button, SIZE, SHAPE, KIND } from 'baseui/button';
import Plus from 'baseui/icon/plus';
import { useState, useEffect } from 'react';
import Addmodal from './add-modal/addmodal';
import { useLocation, useHistory } from 'react-router-dom';
import { getMovieById } from './dashboard.service';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import Masonry from 'react-masonry-css';
import { toast } from 'react-toastify';

function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [movies, setMovies] = useState([]);
    const [topOfPage, setTopOfPage] = useState(true);
    const [memoizedMovies, setMemoizedMovies] = useState({});
    const history = useHistory();

    const location = useLocation();

    useEffect(() => {
        window.onscroll = () => {
            setTopOfPage(
                !(
                    document.body.scrollTop > 50 ||
                    document.documentElement.scrollTop > 50
                )
            );
        };
    }, []);

    useEffect(() => {
        (async () => {
            let params = new URLSearchParams(location.search);
            let prenominatedIDs = [
                // unique ids
                ...new Set(params.get('n') ? JSON.parse(params.get('n')) : []),
            ].reverse();
            let fetchedMovies = [];

            for (let i = 0; i < prenominatedIDs.length; i++) {
                if (memoizedMovies[prenominatedIDs[i]]) {
                    //get memorized value
                    fetchedMovies.push(memoizedMovies[prenominatedIDs[i]]);
                } else {
                    let resp = await getMovieById(prenominatedIDs[i]);
                    if (resp.data.Response === 'True') {
                        fetchedMovies.push(resp.data);
                    }
                    let temp = memoizedMovies;
                    temp[prenominatedIDs[i]] = resp.data;
                    setMemoizedMovies(temp);
                }
            }
            setMovies(fetchedMovies);
            toast.dark('Updated', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            if (fetchedMovies.length >= 5) {
                toast.dark("🦄 You've selected 5 nominations!", {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })();
    }, [location]);

    return (
        <div className="dashboard-host">
            <div class={`header ${topOfPage ? '' : 'down'}`}>
                <div id="title">Your Nominations</div>
                <div style={{ flexGrow: 999 }}></div>
                <div id="add-button">
                    <Button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                        size={SIZE.default}
                        shape={SHAPE.circle}
                        kind={topOfPage ? KIND.primary : KIND.secondary}
                        disabled={movies.length >= 5}
                    >
                        <Plus />
                    </Button>
                </div>
            </div>
            <div id="items-grid">
                {movies.length === 0 ? (
                    <div id="nonebox">No Movies Nominated</div>
                ) : (
                    <Masonry
                        breakpointCols={{
                            default: 4,
                            1100: 3,
                            700: 2,
                            500: 1,
                        }}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {movies.map((movie, index) => {
                            return (
                                <div class="movie-item" key={index}>
                                    <Card
                                        overrides={{
                                            Root: { style: { width: '100%' } },
                                        }}
                                        headerImage={
                                            movie.Poster === 'N/A'
                                                ? 'default.jpg'
                                                : movie.Poster
                                        }
                                        title={movie.Title}
                                    >
                                        <StyledBody>{movie.Year}</StyledBody>
                                        <StyledAction>
                                            <Button
                                                onClick={() => {
                                                    let params = new URLSearchParams(
                                                        location.search
                                                    );
                                                    let n = params.get('n')
                                                        ? JSON.parse(
                                                              params.get('n')
                                                          )
                                                        : [];
                                                    n.splice(
                                                        n.indexOf(movie.imdbID),
                                                        1
                                                    );
                                                    history.push(
                                                        `/?n=${JSON.stringify([
                                                            ...new Set(n),
                                                        ])}`
                                                    );
                                                }}
                                            >
                                                Remove
                                            </Button>
                                        </StyledAction>
                                    </Card>
                                </div>
                            );
                        })}
                    </Masonry>
                )}
            </div>

            <Addmodal isOpen={isOpen} setIsOpen={setIsOpen}></Addmodal>
        </div>
    );
}

export default Dashboard;
