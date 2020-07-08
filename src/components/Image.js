import React, {useState} from 'react'

export default function Image({className, img}) {
    const [hover, setHover] = useState(false)
    const heartIcon = hover && <i className="ri-heart-line favorite"></i>
    const cartIcon = hover && <i className="ri-add-circle-line cart"></i>
    return (
        <div className={`${className} image-container`}
             onMouseEnter = {() => setHover(true)}
             onMouseLeave = {() => setHover(false)}
        >
            <img className='image-grid' src={img.url}/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}
