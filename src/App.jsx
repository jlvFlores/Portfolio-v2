import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from './app/portfolio/portfolioSlice';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const { isLoading, error } = useSelector((store) => store.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  if (isLoading) {
    return <div>Welcome to my page...</div>;
  }

  if (error) {
    return (
      <div>
        Error loading assets
        <br />
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <Header />
      <Home />
    </>
  );
};
export default App;
