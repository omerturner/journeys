import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Journey from './components/journey';

const journey = require('./test/mock/journey.mock.json');

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Journey journey={journey} />
    </Provider>
  );
}

export default App;
