import React,{useContext} from 'react';
import {Context} from '../Context'
import {getClass} from '../utils/index'
import Image from '../components/Image'

export default function Photos() {
  const {allPhotos} = useContext(Context)
  const imgElement = allPhotos.map((img, i)=> (
    <Image img={img} key={img.id} className={getClass(i)} />
  ))
  return (
    <main className='photos'>
     {imgElement}
    </main>
  );
}
