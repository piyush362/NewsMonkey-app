import React from 'react'
import loading from './loading.gif'

const  Spin=()=>  {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}
export default Spin