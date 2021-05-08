import './addmodal.scss';
import { Modal, ModalHeader, ModalBody, SIZE, ROLE } from 'baseui/modal';
import { Input } from 'baseui/input';
import { useState } from 'react';
import { getMovie } from './addmodal.service';
import { Button } from 'baseui/button';
import { useHistory, useLocation } from 'react-router-dom';
import { StyledSpinnerNext } from 'baseui/spinner';

function Addmodal(props) {
    const [value, setValue] = useState('');
    const [queriedMovies, setQueriedMovies] = useState([]);
    const [debouncingTimeout, setDebouncingTimeout] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);
    const alreadyNominated = query.get('n') ? JSON.parse(query.get('n')) : [];
    return (
        <Modal
            onClose={() => props.setIsOpen(false)}
            closeable
            isOpen={props.isOpen}
            animate
            autoFocus
            size={SIZE.default}
            role={ROLE.dialog}
        >
            <ModalHeader>Nominate Movie</ModalHeader>
            <ModalBody>
                <Input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        setIsLoading(true);
                        clearTimeout(debouncingTimeout);
                        setDebouncingTimeout(
                            setTimeout(() => {
                                getMovie(e.target.value).then((resp) => {
                                    setIsLoading(false);

                                    if (resp.data.Response === 'True') {
                                        setQueriedMovies(resp.data.Search);
                                    } else {
                                        setQueriedMovies([]);
                                    }
                                });
                            }, 1000)
                        );
                    }}
                    placeholder="Movie"
                    clearOnEscape
                />
                {isLoading ? (
                    <div class="spin">
                        <StyledSpinnerNext />
                    </div>
                ) : (
                    queriedMovies.length !== 0 && (
                        <div id="movies-wrap">
                            {queriedMovies
                                .sort((a, b) => b.Year - a.Year)
                                .map((movie, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            onClick={() => {
                                                let copy = [...queriedMovies];
                                                copy.splice(index, 1);
                                                setQueriedMovies(copy);
                                                alreadyNominated.push(
                                                    movie.imdbID
                                                );
                                                history.push(
                                                    `/Shopify-frontend-challenge-fall-2021/?n=${JSON.stringify(
                                                        [
                                                            ...new Set(
                                                                alreadyNominated
                                                            ),
                                                        ]
                                                    )}`
                                                );

                                                if (
                                                    alreadyNominated.length >= 5
                                                ) {
                                                    props.setIsOpen(false);
                                                }
                                            }}
                                            disabled={alreadyNominated.includes(
                                                movie.imdbID
                                            )}
                                        >
                                            <div>{movie.Title}</div>
                                            <div>{movie.Year}</div>
                                        </Button>
                                    );
                                })}
                        </div>
                    )
                )}
            </ModalBody>
        </Modal>
    );
}

export default Addmodal;
