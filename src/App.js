import './App.css';
import {Route, Routes} from "react-router-dom";
import GitBlogProfilePage from "./Page/GitBlogProfilePage";
import IssueInfoPage from "./Page/IssueInfoPage";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import {UserDataProvider} from "./Utils/UserDataProvider";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <UserDataProvider>
      <div className="App ">
        <Header />
        <Routes>
          <Route path="/" element={<GitBlogProfilePage />}/>
          <Route path="/issue/:issueNumber" element={<IssueInfoPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </UserDataProvider>
  );
}

export default App;
