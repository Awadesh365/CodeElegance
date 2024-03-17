import { useState } from "react";

// Import CodeMirror styles
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// Import CodeMirror mode for different languages
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

// Import ControlledEditor component from react-codemirror2
import { Controlled as ControlledEditor } from "react-codemirror2";

// Import Material-UI components
import { Box, Typography, Button, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";

// Import custom styles
import "../App.css";

// Styled components
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

// Header styled component
const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

// Heading styled component
const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

/**
 * Editor component is a controlled CodeMirror editor.
 * @param {string} heading - The heading of the editor.
 * @param {string} language - The language of the editor.
 * @param {string} value - The initial value of the editor.
 * @param {function} onChange - The function to handle value changes.
 * @param {ReactNode} icon - The icon to be displayed.
 * @param {string} color - The color of the icon.
 * @returns {JSX.Element} The Editor component.
 */
const Editor = ({ heading, language, value, onChange, icon, color }) => {
  const [open, setOpen] = useState(true);

  /**
   * Handles the value change in the editor.
   * @param {object} editor - The editor instance.
   * @param {object} data - The data object.
   * @param {string} value - The new value.
   */
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      {/* Header */}
      <Header>
        {/* Heading */}
        <Heading>
          {/* Icon */}
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {/* Heading text */}
          {heading}
        </Heading>
        {/* Close button */}
        <CloseFullscreen
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      {/* ControlledEditor */}
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Container>
  );
};

export default Editor;
