import { createContext, useState } from "react";

/**
 * DataContext: The context that holds the data.
 * It is created using the `createContext` function and set to `null` as the initial value.
 */
export const DataContext = createContext(null);

/**
 * DataProvider: The provider component that wraps the children components and provides the data.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children components.
 * @returns {JSX.Element} The JSX element.
 */
const DataProvider = ({ children }) => {
  // State hooks for html, js, and css.
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");

  /**
   * The provider component renders the DataContext.Provider component and passes the state and set functions as the value.
   * The children components are rendered as the children of the provider component.
   */
  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/**
 * Exporting the DataProvider component as the default export.
 */
export default DataProvider;
