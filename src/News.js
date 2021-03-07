import React from 'react'; 
import './App.css';
import './index.css';  

const News = ({title, author,num_comments, url, loading}) => {
    <button> Knop</button> 
    return (
        <div className="table-row">
            <h1 style={{ width: '50%' }}> <a href={url} target="_blank" className="subject"> {title} </a></h1>
            <h1 style={{ width: '30%' }} className="subject" > {author} </h1> 
            <h1 style={{ width: '20%' }} className="subject">  {num_comments} </h1>
        </div> 
    )
}
export default News
