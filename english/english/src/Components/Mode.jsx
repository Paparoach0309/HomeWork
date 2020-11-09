import React from 'react';
import imgMode1 from './../img/screenMode1.png'

export default (props) => {
    const modeClassName = 'mode-container ' + props.modeClassName
    return(
        <div className={modeClassName}>
            <div>
                <h2 className='mode-title'>{props.modeTitle}</h2>
                <p className='mode-description'>Easy mode</p>
            </div>
            <div>
                <img src={props.imgMode} alt=''/>
            </div>
        </div>
        )
}