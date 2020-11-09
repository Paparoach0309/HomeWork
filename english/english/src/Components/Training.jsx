import React, { useEffect } from 'react';
import imgMode1 from './../img/screenMode1.png'
import imgMode2 from './../img/screenMode2.png'
import Mode from './Mode'

const Training = () => {
    const modeClassName = ['easy-mode', 'hard-mode']
    const modeTitle = ['Easy mode', 'Hard mode']
    useEffect(() => {
        return () => {

        }
    })
    return (
        <div className='mode-page'>
            <Mode modeClassName={modeClassName[0]}
                  modeTitle={modeTitle[0]}
                  imgMode={imgMode1}
            />
            <Mode modeClassName={modeClassName[1]}
                  modeTitle={modeTitle[1]}
                  imgMode={imgMode2}
            />
        </div>
    )
}
  

export default Training;