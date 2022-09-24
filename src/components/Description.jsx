import React from 'react'

const Description = () => {
  return (
    <div>
        <ul className='desc'>
            <li className='grey'>Published</li>
            <li className='green'>Scheduled</li>
            <li className='orange'>Need Aproval</li>
            <li className='orangered'>Error</li>
            <li className='steelblue'>Notes</li>
        </ul>
    </div>
  )
}

export default Description