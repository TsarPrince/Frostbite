import React from 'react'

import { urlFor } from '../lib/client';
const Card = ({ props: { slug, image, name, gender, description } }) => {


    return <div key={slug.current} className='card'>
        <div className='card-carousel'>
        {
            image.map(imgObj => <img key={imgObj._key} src={urlFor(imgObj)} className='card-img'></img>)
        }
        </div>

        <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <p className='small'>{gender}</p>
            <div className='card-text'>

            {
                description.map(desc => <p key={desc}>{desc}</p>)
            }
            </div>
        </div>
    </div>
}

export default Card