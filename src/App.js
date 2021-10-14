import './App.css';
import Homepage from './components/Home';
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
  <div className="App_Home_Default_with_search_result">
    <div className="RectangleCopy2">
      <ErrorBoundary>
          <Homepage />
      </ErrorBoundary>
    </div>
   
  </div>
  );
}

export default App;
