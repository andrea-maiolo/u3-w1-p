import { Container } from "react-bootstrap";
import "./App.css";
import FilterSearch from "./components/FilterSearch";
import MoviesSection from "./components/MoviesSection";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNavbar />
      <Container fluid className="px-4">
        <FilterSearch />
        <MoviesSection title="Trending Now" query="avengers" />
        <MoviesSection title="Watch It Again" query="batman" />
        <MoviesSection title="New Releases" query="star+wars" />
        <Footer />
      </Container>
    </>
  );
}

export default App;
