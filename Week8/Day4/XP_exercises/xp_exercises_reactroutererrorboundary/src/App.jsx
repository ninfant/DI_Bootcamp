import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import Header from "./components/header";
import ErrorBoundary from "./components/ErrorBoudary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import data from "./file.json";
import Post from "./components/Post";
function App() {
  return (
    <>
      <hr />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
      <br />
      <hr />
      <div>
        <PostList />
      </div>
      <br />
      <hr />
      <div>
        <Example1 socialMediaData={data.SocialMedias} />
      </div>
      <br />
      <div>
        <Example2 skillsData={data.Skills} />
      </div>
      <hr />
      <div>
        <Example3 experienceData={data.Experiences} />
      </div>
      <hr />
      <Post />
    </>
  );
}

export default App;
