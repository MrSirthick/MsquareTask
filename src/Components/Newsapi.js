import React, { useState } from 'react'
import axios from 'axios'
import Newsitems from './Newsitems';
function Newsapi({check,name}) {
  const [articles,setArticles]=useState([]);
      const getArticles=async()=>{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${name}&apiKey=34f9e3e19a0e43f9b52ccd613d70f671`);
        setArticles(response.data.articles)
      }
      (check)?getArticles():console.log(`No going to newsapi`);
  return (
    <div>
      {
        articles.slice(0,3).map(article=>{
          return(
            <Newsitems 
            title={article.title}
            description={article.description}
            url={article.url}
            />
          )
        })
      }
    </div>
    
  )
}

export default Newsapi