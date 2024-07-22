import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Container from './components/Container';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, React with TypeScript!</h1>
      <Container theme="dark" />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
