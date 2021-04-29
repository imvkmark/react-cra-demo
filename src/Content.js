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
                    本页面是路由跳转页面, 使用 ReactRouter 完成
                </p>
                <a
                    className="App-link"
                    href="https://reactrouter.com/web/guides/quick-start"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React Router
                </a>
            </header>
        </div>
    );
}

export default App;
