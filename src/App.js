import './App.css';
import { Content } from './routes/Content';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
