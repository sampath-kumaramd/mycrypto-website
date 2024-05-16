import React from 'react'
import HeroHeader from '../../../components/Hero/Header'
import HeroFooter from '../../../components/Hero/Footer'
import HeroProfile from '../../../components/Hero/Profile'
import HeroMarketplace from '../../../components/Hero/Marketplace'
import Image from 'next/image'
import bg from "../../../public/bg.png";
import { playerData } from '../../../lib/bin/playerData.js'

export default function Index() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(/bg.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '400vh',
                }}
                className=' relative'
            >
                <HeroHeader />

                <hr className="border-1 border-[#134d4c]" />
                <div className='grid grid-cols-5 max-w-screen-2xl mx-auto mt-8'>
                    <div className='col-span-2'>
                        <div className='p-4 bg-black w-96 h-[60vh] relative'>
                            <Image
                                src='/player/profile-image.png'
                                alt="bg"
                                layout="fill"
                                objectFit="cover"
                                className='border-2 border-red-500'
                            />
                        </div>
                    </div>
                    <div className='col-span-3 text-gray-300'>
                        <div className=' flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src='/player/gods-icon.png'
                                    alt="bg"
                                    width={20}
                                    height={20}
                                />
                                <span className=' text-gray-400' >Gods Unchained Cards</span>
                            </div>
                            <div>
                                <Image
                                    src='/player/copy -button.png'
                                    alt="bg"
                                    width={45}
                                    height={45}
                                />
                            </div>
                        </div>

                        <div className=' text-white'>
                            Handsome Devil
                        </div>
                        <div className=' mt-8'>
                            <div className=' flex gap-4 items-center'>
                                <div className=' flex items-center'>
                                    <Image
                                        src='/player/currency-eth.png'
                                        alt="bg"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div className=' text-3xl text-white'> {playerData.bidEth} </div>
                                <div className='text-gray-400'>
                                    ({playerData.bidUSD})
                                </div>
                            </div>
                            <div className=' text-sm'>Includes fees</div>
                        </div>
                        <button className='bg-[#0ed4fa] text-white w-full py-2 mt-4 rounded-full'>Buy Now</button>
                        {/* update-tag */}
                        <div className=' flex justify-between mt-4 items-center'>
                            <div className='flex gap-4 items-center'>
                                <div>
                                    <Image
                                        src='/player/update-tag.png'
                                        alt="bg"
                                        width={25}
                                        height={25}
                                    />

                                </div>
                                <div className='text-lg'>Available Listings</div>
                            </div>
                            <div className=' underline underline-offset-1 text'>Last updated now</div>
                        </div>
                        {playerData.Listing.map((item, index) => (
                            <div className=' p-4 bg-[#374757] rounded-lg mt-4' key={index}>
                                <div className='flex justify-between'>
                                    <div>
                                        <span className=' mr-2'>Listed by</span>
                                        <span>{item.listedBy}</span>
                                    </div>
                                    <div className=' flex gap-4 items-center'>
                                        <div className=' flex items-center'>
                                            <Image
                                                src='/player/currency-eth.png'
                                                alt="bg"
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <div className='text-lg text-white'>{item.eth}</div>
                                    </div>
                                </div>
                                <div>{item.listedDay}</div>
                            </div>

                        ))}

                        <div className=' flex justify-center'>
                            <button className='bg-[#080712] w-40 py-2 mt-4 rounded-full border-2 border-[#0ed4fa] text-[#0ed4fa]'>View More</button>
                        </div>
                        <hr className="border-1 border-[#374757] my-8" />

                        <div className='  flex justify-between items-center'>
                            <button className=' flex gap-2 items-center'>
                                <Image
                                    src='/player/menu.png'
                                    alt="bg"
                                    width={20}
                                    height={20}
                                />
                                <div>Properties</div>
                            </button>
                            <button>
                                <Image
                                    src='/player/drop-down-.png'
                                    alt="bg"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>

                        <div className='grid grid-cols-3 my-8'>
                            {playerData.properties.map((item, index) => (
                                <div className='bg-[#12385e] h-40 w-64 rounded-md items-center justify-center flex flex-col my-4' key={index}>
                                    <div className=' text-xl text-white'>{item.title}</div>
                                    <div>{item.subTitle}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <HeroFooter />
            </div>
        </>
    )
}
