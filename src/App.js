
// Importing the necessary components
import Home from './components/Home'; // Importing the Home component
import DataProvider from './context/DataProvider'; // Importing the DataProvider component

/**
 * App component: The root component of the application.
 * It renders the DataProvider component and the Home component.
 * @returns {JSX.Element} The JSX element
 */
function App() {
  // Returning the JSX element
  return (
    // Rendering the DataProvider component
    <DataProvider>
      {/* Rendering the Home component */}
      <Home />
    </DataProvider>
  );
}

// Exporting the App component as the default export
export default App;
