import React,{useState} from 'react'
import Weatherapi from './Components/Weatherapi';
import Newsapi from './Components/Newsapi';

function App() {
  var [state,setState]=useState('coimbatore');
  var[checker,setchecker]=useState(false)
    
  return (
    <>
    <div className="bg-orange-500 w-full min-h-screen ">
      <div className='flex justify-center'>
      <div className='flex flex-col w-1/2 items-center gap-4 px-28 py-10'>
    <label className='font-semibold text-white text-3xl'>Enter the Name of City:</label>
    <input type='text' placeholder='Coimbatore' className='w-1/2 h-8 px-4' onChange={(e)=>setState(state=e.target.value)}/>
    <button className='px-3 py-3 bg-white text-orange-500 font-bold w-1/4 mx-24' onClick={()=>setchecker(checker=true)} >Click</button>
    </div>
    </div>
    <div className='flex flex-col justify-center items-center mt-10'>
    <h1 className='text-white font-semibold text-8xl uppercase'>{state}</h1>
    <div>
      <Weatherapi check={checker} name={state}/>
    </div>
    <div>
      <Newsapi check={checker} name={state} />
    </div>
    </div>
    </div>
    </>
    
  )
}

export default App