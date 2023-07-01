import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from './app/portfolio/portfolioSlice';
import Loading from './components/Loading';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((store) => store.portfolio);
  const [ hasAnimated, setHasAnimated ] = useState(false);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  const updateHasAnimated = (boolValue) => {
    setHasAnimated(boolValue);
  };

  if (isLoading || !hasAnimated) {
    return <Loading updateHasAnimated={updateHasAnimated} />;
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
