import React from 'react'
import Image from "next/image"
import TodayDealImg01 from "../../asset/517TmhKEWbL._AC_SY200_.jpg";
import TodayDealImg02 from "../../asset/41TssgTTkwL._AC_SY200_.jpg";
import TodayDealImg04 from "../../asset/51Q8ZoVG3oL._AC_SY200_.jpg";
import TodayDealImg03 from "../../asset/71JE6RVeu3L._SL1200__AC_SY200_.jpg";
import TodayDealImg05 from "../../asset/31BFEQMnpIL._AC_SY200_.jpg";
import TodayDealImg06 from "../../asset/41uGjvXbeBL._AC_SY200_.jpg";


export default function Deals() {
  return (
    <div>
        <div className='col-12'>
            <span className='h3 fw-bold'>Today's Deals</span>
            <span className='btn btn-link'>See all deals</span>
        </div>
        <div className='col-12 row m-0'>
            <div className='col-2 p-1 row m-0'>
                <div className=' col-12 bg-body-secondary p-2 d-flex justify-content-center'>
                    <Image src={TodayDealImg01} className='' alt={"Best Offers on Storite"} />
                </div>
                <div className='col-12 p-2'>
                    <span className='text-bg-danger p-1'>Up to 77% off</span>
                    <span className='text-danger fw-bold ms-2'>Deal of the day</span>
                </div>
                <span>Best Offers on Storite</span>
            </div>
            <div className='col-2 p-1 row m-0'>
                <div className=' col-12 bg-body-secondary p-2 d-flex justify-content-center'>
                    <Image src={TodayDealImg02} className='' alt={"Best Offers on Storite"} />
                </div>
                <div className='col-12 p-2'>
                    <span className='text-bg-danger p-1'>Up to 77% off</span>
                    <span className='text-danger fw-bold ms-2'>Deal of the day</span>
                </div>
                <span>Best Offers on Storite</span>
            </div>
            <div className='col-2 p-1 row m-0'>
                <div className=' col-12 bg-body-secondary p-2 d-flex justify-content-center'>
                    <Image src={TodayDealImg03} className='' alt={"Best Offers on Storite"} />
                </div>
                <div className='col-12 p-2'>
                    <span className='text-bg-danger p-1'>Up to 77% off</span>
                    <span className='text-danger fw-bold ms-2'>Deal of the day</span>
                </div>
                <span>Best Offers on Storite</span>
            </div>
            <div className='col-2 p-1 row m-0'>
                <div className=' col-12 bg-body-secondary p-2 d-flex justify-content-center'>
                    <Image src={TodayDealImg04} className='' alt={"Best Offers on Storite"} />
                </div>
                <div className='col-12 p-2'>
                    <span className='text-bg-danger p-1'>Up to 77% off</span>
                    <span className='text-danger fw-bold ms-2'>Deal of the day</span>
                </div>
                <span>Best Offers on Storite</span>
            </div>
            <div className='col-2 p-1 row m-0'>
                <div className=' col-12 bg-body-secondary p-2 d-flex justify-content-center'>
                    <Image src={TodayDealImg05} className='' alt={"Best Offers on Storite"} />
                </div>
                <div className='col-12 p-2'>
                    <span className='text-bg-danger p-1'>Up to 77% off</span>
                    <span className='text-danger fw-bold ms-2'>Deal of the day</span>
                </div>
                <span>Best Offers on Storite</span>
            </div>
            <div className='col-2 p-1 row m-0'>
                <div className=' col-12 bg-body-secondary p-2 d-flex justify-content-center'>
                    <Image src={TodayDealImg06} className='' alt={"Best Offers on Storite"} />
                </div>
                <div className='col-12 p-2'>
                    <span className='text-bg-danger p-1'>Up to 77% off</span>
                    <span className='text-danger fw-bold ms-2'>Deal of the day</span>
                </div>
                <span>Best Offers on Storite</span>
            </div>        
        </div>
    </div>
  )
}
