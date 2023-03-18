import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className='rating-list'>
      <Stars count={1} />
      <Stars count={6} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
    </div>
  );
}

export default App;
