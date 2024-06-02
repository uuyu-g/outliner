import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useHotkeys } from 'react-hotkeys-hook';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  useHotkeys('mod+k', () => setCount(count + 1), [count]);

  return <p>Pressed {count} times.</p>;
};

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
      <ExampleComponent />
    </main>
  );
}

function render() {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
}

render();
