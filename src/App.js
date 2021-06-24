import './App.css';
import RouterApp from './config/RouterApp';
import { Provider } from 'react-redux';
import Store from './store';

function App() {
  return (
    <div >
      <Provider store={Store}> 
        <RouterApp />
      </Provider>
    </div>
  );
}

export default App;
