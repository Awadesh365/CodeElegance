import { AppBar, Toolbar, styled } from "@mui/material";

// Define a styled AppBar component for the header
const Container = styled(AppBar)`
  /* Set the background color, position, and border */
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

// Create a functional component for the header
const Header = () => {
  // Define the URL for the logo image
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0E2wuMryApSg1qFQhiD3fVl-YEFGUlWjSB8BvW48esDeLq3LdVdyYCpI_zLun25cIQx4";

  // Render the header component
  return (
    <Container>
      {/* Toolbar for the header */}
      <Toolbar
        style={{
          // Set the display, flex direction, alignment, and justify content
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {/* Div container for the logo */}
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          {/* Logo image */}
          <img
            src={logo}
            alt="logo"
            style={{ width: 80, height: 80, marginRight: 20 }}
          />
        </div>
      </Toolbar>
    </Container>
  );
};

// Export the Header component
export default Header;
