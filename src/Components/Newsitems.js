import React from 'react'

function Newsitems({title,description,url}) {
  return (
    <div className='px-6 py-1'>
      <div className='flex flex-col gap-3'>
        <h3 className='bg-white w-auto font-bold capitalize text-2xl text-orange-500 px-2'><a href={url}>{title}</a></h3>
        <p className='font-semibold bg-white px-2 '>{description}</p>
      </div>
    </div>
  )
}

export default Newsitems