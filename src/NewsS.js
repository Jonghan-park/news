import React from 'react';
import News from './News';
const NewsS = ({newsS, removeNews}) => {
  return <section>
    <div className='title'>
      <h2>Top topics</h2>
      <div className='underline'></div>
      <div>
        {newsS.articles.map((news) => {
          return <News key={news.source.id} {...news} removeNews={removeNews}></News>
        })}
        
      </div>
    </div>
  </section>;
};

export default NewsS;