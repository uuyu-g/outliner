import { createRoot } from 'react-dom/client';

function render() {
  const root = createRoot(document.getElementById('app'));
  root.render(<h2>Hello from React!</h2>);
}

render();