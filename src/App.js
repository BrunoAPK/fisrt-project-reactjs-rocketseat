import React from 'react';
import Header from './components/Header';

//Propriedades
// <> </> fragment é quando temos que envolver dois elementos em um elemento mais não queremos que esse elemento exista no resultado final
function App() {
    return (
        <Header title="Homepage">
            <ul>
                <li>Home Page</li>
                <li>Login</li>
                <li>Sigout</li>
            </ul>
        </Header>
    );
}
export default App;