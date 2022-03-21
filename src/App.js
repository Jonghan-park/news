import React, {useState, useEffect} from 'react';
import './App.css';
import Loading from './Loading';
import NewsS from './NewsS';

const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fd933377ec6343f2997122351aaab327';

function App() {
  const [loading, setLoading] = useState(true);
  const [newsS, setNewsS] = useState([]);

  const fetchNewsS = async() => {
    setLoading(true);
    
  try{
    const response = await fetch(url);
    const newsS = await response.json();
    setLoading(false);
    console.log(newsS);
    setNewsS(newsS);
    
  }catch(error){
    setLoading(false);
    console.log(error);
  }
};

  useEffect(() => {
      fetchNewsS();
  }, []);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(newsS.length === 0){
    return <main>
      <div className='title'>
        <h2>No news left</h2>
        <button className='btn' onClick={fetchNewsS}>refresh</button>
      </div>
    </main>
  }
  return <main>
    
      <NewsS newsS={newsS} />
    </main>
}

export default App;
