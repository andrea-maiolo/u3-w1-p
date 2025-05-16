import "./App.css";
import MoviesSection from "./components/MoviesSection";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <MoviesSection title="Trending Now" query="avengers" />
      <MoviesSection title="Watch It Again" query="batman" />
      <MoviesSection title="New Releases" query="star+wars" />
    </>
  );
}

export default App;
