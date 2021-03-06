import logo from './logo.svg';
import './App.css';
import Nav from './Nav';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Nav/>
                <p>
                    首页 , 本页面使用 CRA 构建
                </p>
                <a
                    className="App-link"
                    href="https://zh-hans.reactjs.org/docs/create-a-new-react-app.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn CRA
                </a>
            </header>
        </div>
    );
}

export default App;
