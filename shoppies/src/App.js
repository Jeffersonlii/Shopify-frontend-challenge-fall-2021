import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Dashboard from './dashboard/dashboard';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const engine = new Styletron();

    return (
        <div className="App">
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <Router>
                        <Dashboard></Dashboard>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </Router>
                </BaseProvider>
            </StyletronProvider>
        </div>
    );
}

export default App;
