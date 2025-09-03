import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import dbConnect from '@/lib/dbConnect';
export default async function Services() {
  const serviceCollection = dbConnect("test_services");
  const data = await serviceCollection.find({}).toArray();
//   console.log(data);
  return (
    <div className='my-10 px-2'>
        <div className='text-center space-y-3'>
            <p className='font-medium'>Service</p>
            <h2 className='text-2xl font-semibold'>Our Services</h2>
            <p className='text-base font-medium'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {data.map(service=>
                <div key={service.service_id} className="card bg-base-100 shadow-md">
                <figure>
                    <Image
                    className='w-full h-full'
                    src={service.img}
                    alt="Services" 
                    width={314}
                    height={208}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <div className="card-actions justify-between">
                    <p className='text-lg font-medium'>{service.price}</p>
                    <button className="btn btn-primary"><FaArrowRight /></button>
                    </div>
                </div>
                </div>
            )}
        </div>
    </div>
  )
}
