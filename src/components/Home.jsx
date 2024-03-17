// Home.jsx - This component renders the main Home page.

// Importing required components
import Code from "./Code"; // Code component for rendering code editor
import Result from "./Result"; // Result component for rendering output
import Header from "./Header"; // Header component for rendering page header

// Home component renders the main Home page. It renders the Header, Code, and Result components.
const Home = () => {
  return (
    <>
      {/* Rendering the Header component */}
      <Header />

      {/* Rendering the Code component */}
      <Code />

      {/* Rendering the Result component */}
      <Result />
    </>
  );
};

// Exporting the Home component as the default export
export default Home;
