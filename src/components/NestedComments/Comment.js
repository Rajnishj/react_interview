import React from 'react'

const Comment = ({item}) => {
  return (
    <div class="antialiased mx-auto max-w-screen-sm">
      <h1>{item.author}</h1>
      <p>{item.text}</p>
      {item?.replies?.map((reply,index) => (
        <Comment key={index} item={reply} />
      ))}
    </div>
  )
}

export default Comment

