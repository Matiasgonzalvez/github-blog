import './App.css';
import {Route, Routes} from "react-router-dom";
import GitBlogProfilePage from "./Page/GitBlogProfilePage";
import IssueInfoPage from "./Page/IssueInfoPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<GitBlogProfilePage/>}/>
                <Route path="/issue" element={<IssueInfoPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
