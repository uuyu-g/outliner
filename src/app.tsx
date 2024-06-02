import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [text, setText] = useState('');

  // ダイアログを開く
  const handleClick = async () => {
    const result = await myAPI.openDialog();
    setText(result);
  };

  return (
    <main>
      <h1>Hello from React!</h1>
      <button onClick={handleClick}>Open Dialog</button>
      <p>{text}</p>
    </main>
  );
}

function render() {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
}

render();
