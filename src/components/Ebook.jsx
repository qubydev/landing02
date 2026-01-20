import React from 'react'
import DecorativeLine from './ui/custom/decorative-line'
import GradientText from './ui/custom/gradient-text'

export default function Ebook() {
    return (
        <div className='p-4 py-16' id="ebook">
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-2xl md:text-4xl font-bold mb-4'>
                    <GradientText
                        text="E-BOOKS"
                        className="font-bold"
                        gradient="linear-gradient(90deg,var(--color-primary) 39%, #ffffff 49%, var(--color-primary) 58%)"
                    />
                </h3>
                <DecorativeLine />
            </div>
            <div className='flex items-center justify-center pt-10'>
                <img
                    alt="Ebook Cover"
                    src="/ebook1.jpg"
                    className='w-[80vw] max-w-[320px] border-2'
                />
            </div>
        </div>
    )
}
