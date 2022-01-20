import './App.css';
import ErrorBoundary from './ErrorBoundary';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import SearchMovie from './components/SearchMovie';
import PageNotFound from './PageNotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
  <div className="App_Home_Default_with_search_result">
    <div className="RectangleCopy2">
      <ErrorBoundary>
        <BrowserRouter>
        <Routes>
            <Route path="/search" exact element={<SearchMovie />} >
              <Route path=":searchQuery" element={ <SearchMovie />} />
              <Route path="?genre=:genreName" element={ <SearchMovie />} />
              <Route path="?sortBy=:sortName" element={ <SearchMovie />} />
              <Route path="?movie=:movieId" element={ <MovieDetails />} />
            </Route>
            <Route path="/" exact element={<Navigate replace to="/search" />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
   
  </div>
  );
}

export default App;
