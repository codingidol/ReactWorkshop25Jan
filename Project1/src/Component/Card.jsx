import React from 'react'

const Card = ({data,handleDelete,index}) => {
    console.log(data)
  return (
<div id='card'>
    <h1>{data.task}</h1>
    <i onClick={()=>handleDelete(index)} className="ri-delete-bin-5-line"></i>
</div>
)
}

export default Card