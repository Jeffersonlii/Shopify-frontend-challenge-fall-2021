import './addmodal.scss';
import { Modal, ModalHeader, ModalBody, SIZE, ROLE } from 'baseui/modal';
import { Input } from 'baseui/input';
import { useState } from 'react';
import { getMovie } from './addmodal.service';
import { Button } from 'baseui/button';
import { ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';
import { useHistory, useLocation } from 'react-router-dom';

function Addmodal(props) {
    const [value, setValue] = useState('');
    const [queriedMovies, setQueriedMovies] = useState([]);
    const [debouncingTimeout, setDebouncingTimeout] = useState(undefined);
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);
    const alreadyNominated = query.get('n')
        ? JSON.parse(query.get('n'))
        : { i: [] };
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

                        clearTimeout(debouncingTimeout);
                        setDebouncingTimeout(
                            setTimeout(() => {
                                getMovie(e.target.value).then((resp) => {
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
                {queriedMovies.length !== 0 && (
                    <div id="movies-wrap">
                        <ThemeProvider
                            theme={createTheme(lightThemePrimitives, {
                                colors: {
                                    buttonPrimaryHover: '#00FF00',
                                },
                            })}
                        >
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
                                                alreadyNominated.i.push(
                                                    movie.imdbID
                                                );
                                                history.push(
                                                    `/?n=${JSON.stringify(
                                                        alreadyNominated
                                                    )}`
                                                );
                                            }}
                                        >
                                            <div>{movie.Title}</div>
                                            <div>{movie.Year}</div>
                                        </Button>
                                    );
                                })}
                        </ThemeProvider>
                    </div>
                )}
            </ModalBody>
        </Modal>
    );
}

export default Addmodal;
