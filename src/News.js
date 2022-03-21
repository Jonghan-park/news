import React, { useState } from 'react';

const News = ({id, author, title, description, url, urlToImage, removeNews }) => {
    const [readMore, setReadmore] = useState(false);
    return ( <article className='single-news'>
        <img src={urlToImage} alt={title} />
        <footer>
            <div className='news-info'>
                <h4>{title}</h4>
                <h4>{url}</h4>
            </div>
            <p>
              {readMore ? description : `${description.substring(0,200)}...`}  
                <button onClick={() => setReadmore(!readMore)}> 
                {readMore ? 'show less' : 'Read more'}
                </button>
            </p>
            <button className='delete-btn' onClick={() => removeNews(id)}>not interested</button>
        </footer>
    </article>);
};

export default News;