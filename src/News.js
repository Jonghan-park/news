import React, { useState } from 'react';

const News = ({id, author, title, description, url, urlToImage, removeNews }) => {
    const [readMore, setReadmore] = useState(false);
    return ( <article className='single-news'>
        <img src={urlToImage} alt={title} />
        <footer>
            <div className='news-info'>
                <h4>{title}</h4>
                <a href={url}>Go to original news</a>
            </div>
            <p>
              {readMore ? description : `${description.substring(0,100)}...`}  
                <button onClick={() => setReadmore(!readMore)}> 
                {readMore ? 'show less' : 'Read more'}
                </button>
            </p>
            
        </footer>
    </article>);
};

export default News;