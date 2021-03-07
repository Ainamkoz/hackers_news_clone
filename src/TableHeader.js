import React from 'react';
import './App.css';
import './index.css'; 




const TableHeader = ({loading}) => {
    return (
        <div>
              <div className="table">
        <div className="table-header">
          <span style={{ width: '20%' }}>
            <span>Title</span>
          </span>
          <span style={{ width: '40%' }}>
            <span>Author</span>
          </span>
          <span style={{ width: '25%' }}>
            <span>Comments</span>
          </span>
</div> 
        </div>
        </div>
    )
}

export default TableHeader
