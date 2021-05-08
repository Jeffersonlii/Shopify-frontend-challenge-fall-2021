import './App.css';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Dashboard from './dashboard/dashboard';

import { BrowserRouter as Router } from 'react-router-dom';
function App() {
    const engine = new Styletron();

    return (
        <div className="App">
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <Router>
                        <Dashboard></Dashboard>
                    </Router>
                </BaseProvider>
            </StyletronProvider>
        </div>
    );
}

export default App;
