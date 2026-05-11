import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const qwerty = "`1324567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>? ";
const colemak = "`1234567890-=qwfpgjluy;[]\\arstdhneio'zxcvbkm,./~!@#$%^&*()_+QWFPGJLUY:{}|ARSTDHNEIO\"ZXCVBKM<>? ";

function convert(text, from, to) {
  return [...text]
    .map((char) => {
      const index = from.indexOf(char);
      return index === -1 ? char : to[index];
    })
    .join('');
}

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <main>
      <h1>Cyifmae Cipher</h1>
      <p>Convert text between the QWERTY and Colemak mappings from convert.py.</p>

      <label htmlFor="input">Input</label>
      <textarea
        id="input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Type text here..."
      />

      <div className="actions">
        <button onClick={() => setOutput(convert(input, qwerty, colemak))}>Encode</button>
        <button onClick={() => setOutput(convert(input, colemak, qwerty))}>Decode</button>
      </div>

      <label htmlFor="output">Output</label>
      <textarea id="output" value={output} readOnly placeholder="Result appears here..." />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
