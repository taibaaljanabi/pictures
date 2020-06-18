import React,{useContext} from 'react';
import {Context} from '../Context'

export default function Photos() {
  const {allphotos} = useContext(Context)
   console.log(allphotos)
  return (
    <div>
      <h1>Hello from Photos</h1>
    </div>
  );
}
