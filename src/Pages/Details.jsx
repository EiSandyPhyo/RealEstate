import React from 'react'
import ImagesModal from '../Components/ImagesModal';
import DetailText from '../Components/DetailText';
import { useState } from 'react';
//properties details page မှာကော ပုံကိုနှိပ်လိုက်ရင် ပေါ်တဲ့ details မှာပါသုံးမည် Home Page and Buy Page ဖြင့်ချိတ်ရန်လိုသေးသည်

const Details = ({properties}) => {
    console.log(properties);
    const [showModal,setShowModal]=useState(false);

  return (
   <>
   <ImagesModal showModal={showModal} setShowModal={setShowModal}/>
   <DetailText showModal={showModal} setShowModal={setShowModal}/>
   </>
  )
}

export default Details



