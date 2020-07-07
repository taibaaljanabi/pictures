import React, {useState} from 'react'

export default function Image({className, img}) {
    const [hover, setHover] = useState(false)
    console.log(hover)
    return (
        <div className={`${className} image-container`}
             onMouseEnter = {() => setHover(true)}
             onMouseLeave = {() => setHover(false)}
        >
            <img className='image-grid' src={img.url}/>
        </div>
    )
}
