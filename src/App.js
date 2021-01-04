import './App.css';
import 'antd/dist/antd.css';
import Journey from './components/Journey/Journey';

const journey = require('./test/mock/journey.mock.json');

function App() {
  return (
    <Journey journey={journey} />
  );
}

export default App;
