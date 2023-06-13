/*
    Project- Online code editor
*/ 
// This function gets the code from the three editors and returns it as a string.
function getUserCode() {

  // Get the code from the HTML editor.
  const htmlCode = htmlEditor.getValue();

  // Get the code from the CSS editor.
  const cssCode = cssEditor.getValue();

  // Get the code from the JavaScript editor.
  const jsCode = jsEditor.getValue();

  // Return the code as a string by concatenating the HTML code, CSS code, and JavaScript code.
  return htmlCode + "\n" + "<style>" + "\n" + cssCode + "\n" + "</style>" + "\n" + "<script>" + "\n" + jsCode + "\n" + "</script>";
}

// This function updates the iframe with the code from the three editors.
function update() {

  // Get the iframe element.
  const iframe = document.getElementById("iframe");

  // Get the document object of the iframe.
  const code = iframe.contentWindow.document;

  // Open the document object.
  code.open();

  // Write the code from the three editors to the document object.
  code.write(getUserCode());

  // Close the document object.
  code.close();
}

// This function loads the HTML editor.
function loadHTMLEditor() {

  // Set the default HTML value.
  const defaultHTMLValue = "<!DOCTYPE html>\n\n<html>\n\n    <!-- write your HTML markap here  -->\n\n</html>";

  // Create an ACE editor and assign it to the `htmlEditor` element.
  window.htmlEditor = ace.edit("htmlEditor");

  // Set the theme of the editor to Dracula.
  htmlEditor.setTheme("ace/theme/dracula");

  // Set the mode of the editor to HTML.
  htmlEditor.getSession().setMode("ace/mode/html");

  // Set the value of the editor to the default HTML value.
  htmlEditor.setValue(defaultHTMLValue, 1); // 1 = moves cursor to end

  // Set an event listener on the editor for the `change` event.
  htmlEditor.getSession().on('change', function () {
    update();
  });

  // Focus the editor.
  htmlEditor.focus();

  // Set the options for the editor.
  htmlEditor.setOptions({
    fontSize: "12.5pt",
    showLineNumbers: true,
    vScrollBarAlwaysVisible: false,
    enableBasicAutocompletion: true,
    enableSnippets: false,
    enableLiveAutocompletion: false
  });

  // Set the showPrintMargin property of the editor to false.
  htmlEditor.setShowPrintMargin(false);

  // Set the behavioursEnabled property of the editor to false.
  //htmlEditor.setBehavioursEnabled(false);
}// This function loads the CSS editor.
function loadCSSEditor() {

  // Set the default CSS value.
  const defaultCSSValue = "/*        write Your CSS here         */";

  // Create an ACE editor and assign it to the `cssEditor` element.
  window.cssEditor = ace.edit("cssEditor");

  // Set the theme of the editor to Dracula.
  cssEditor.setTheme("ace/theme/dracula");

  // Set the mode of the editor to CSS.
  cssEditor.getSession().setMode("ace/mode/css");

  // Set the value of the editor to the default CSS value.
  cssEditor.setValue(defaultCSSValue, 1); // 1 = moves cursor to end

  // Set an event listener on the editor for the `change` event.
  cssEditor.getSession().on('change', function () {
    update();
  });

  // Focus the editor.
  cssEditor.focus();

  // Set the options for the editor.
  cssEditor.setOptions({
    fontSize: "12.5pt",
    showLineNumbers: true,
    vScrollBarAlwaysVisible: true,
    // enableBasicAutocompletion: true,
    // enableSnippets: true,
    // enableLiveAutocompletion: false
  });

  // Set the showPrintMargin property of the editor to false.
  cssEditor.setShowPrintMargin(false);

  // Set the behavioursEnabled property of the editor to false.
  //cssEditor.setBehavioursEnabled(false);
}

// This function loads the JavaScript editor.
function loadJSEditor() {

  // Set the default JavaScript value.
  const defaultJSValue = "/* write your Js code here      */";

  // Create an ACE editor and assign it to the `jsEditor` element.
  window.jsEditor = ace.edit("jsEditor");

  // Set the theme of the editor to Dracula.
  jsEditor.setTheme("ace/theme/dracula");

  // Set the mode of the editor to JavaScript.
  jsEditor.getSession().setMode("ace/mode/javascript");

  // Set the value of the editor to the default JavaScript value.
  jsEditor.setValue(defaultJSValue, 1); // 1 = moves cursor to end

  // Set an event listener on the editor for the `change` event.
  jsEditor.getSession().on('change', function () {
    update();
  });

  // Focus the editor.
  jsEditor.focus();

  // Set the options for the editor.
  jsEditor.setOptions({
    fontSize: "12.5pt",
    showLineNumbers: true,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: false
  });

  // Set the showPrintMargin property of the editor to false.
  jsEditor.setShowPrintMargin(false);

  // Set the behavioursEnabled property of the editor to false.
  //jsEditor.setBehavioursEnabled(false);
}

// This function loads the HTML, CSS, and JavaScript editors.
function setupEditor() {

  // Load the HTML editor.
  loadHTMLEditor();

  // Load the CSS editor.
  loadCSSEditor();

  // Load the JavaScript editor.
  loadJSEditor();
}

// This function is called when the page is ready.
function ready() {

  // Set up the editors.
  setupEditor();
}


// This function maximizes the iframe by setting its height and width to 98% and 100% respectively.
// It also sets the height and width of the editors to 0%.
// This is done to make the iframe take up the entire page and hide the editors.

function maximizeIFrame() {

  // Get the `iframe` element from the DOM.
  const iframe = document.getElementById("iframe");

  // Set the height of the `iframe` element to 98%.
  iframe.style.height = "98%";

  // Set the width of the `iframe` element to 100%.
  iframe.style.width = "100%";

  // Get the `htmlEditor` element from the DOM.
  const htmlEditor = document.getElementById("htmlEditor");

  // Set the height of the `htmlEditor` element to 0%.
  htmlEditor.style.height = "0%";

  // Set the width of the `htmlEditor` element to 0%.
  htmlEditor.style.width = "0%";

  // Get the `cssEditor` element from the DOM.
  const cssEditor = document.getElementById("cssEditor");

  // Set the height of the `cssEditor` element to 0%.
  cssEditor.style.height = "0%";

  // Set the width of the `cssEditor` element to 0%.
  cssEditor.style.width = "0%";

  // Get the `jsEditor` element from the DOM.
  const jsEditor = document.getElementById("jsEditor");

  // Set the height of the `jsEditor` element to 0%.
  jsEditor.style.height = "0%";

  // Set the width of the `jsEditor` element to 0%.
  jsEditor.style.width = "0%";

  // Get the `editors` element from the DOM.
  const allEditors = document.getElementById("editors");

  // Set the height of the `editors` element to 5%.
  allEditors.style.height = "5%";

  // Set the width of the `editors` element to 100%.
  allEditors.style.width = "100%";
}


// This function minimizes the iframe by setting its height and width to 50% and 100% respectively.
// It also sets the height and width of the editors to 90% and 32% respectively.
// This is done in reverse order from the `maximizeIFrame()` function to reset all elements to their original dimensions.
function minimizeIframe() {

  // Get the `editors` element from the DOM.
  let editors = document.getElementById("editors");

  // Set the height of the `editors` element to 50%.
  editors.style.height = "50%";

  // Set the width of the `editors` element to 100%.
  editors.style.width = "100%";

  // Get the `htmlEditor` element from the DOM.
  let htmlEditor = document.getElementById("htmlEditor");

  // Set the height of the `htmlEditor` element to 90%.
  htmlEditor.style.height = "90%";

  // Set the width of the `htmlEditor` element to 32%.
  htmlEditor.style.width = "32%";

  // Get the `cssEditor` element from the DOM.
  let cssEditor = document.getElementById("cssEditor");

  // Set the height of the `cssEditor` element to 90%.
  cssEditor.style.height = "90%";

  // Set the width of the `cssEditor` element to 32%.
  cssEditor.style.width = "32%";

  // Get the `jsEditor` element from the DOM.
  let jsEditor = document.getElementById("jsEditor");

  // Set the height of the `jsEditor` element to 90%.
  jsEditor.style.height = "90%";

  // Set the width of the `jsEditor` element to 32%.
  jsEditor.style.width = "32%";

  // Get the `iframe` element from the DOM.
  var iframe = document.getElementById("iframe");

  // Set the height of the `iframe` element to 50%.
  iframe.style.height = "50%";

  // Set the width of the `iframe` element to 100%.
  iframe.style.width = "100%";
}
