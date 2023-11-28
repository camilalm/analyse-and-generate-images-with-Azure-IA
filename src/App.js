import React from 'react';

function App() {
  // add title
  document.title = "Computer vision";
  // add input text to insert url image
  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer vision</h1><br />
        <label htmlFor="url">Insert url image</label>
        <input type="text" id="url" name="url" placeholder="Insert url image" /><br />
        {/* // add button to analyze image */}
        <button>Analyze</button>
        {/* // add button to generate image */}
        <button>Generate</button>
      </header>
    </div>
  );
}

export default App;
