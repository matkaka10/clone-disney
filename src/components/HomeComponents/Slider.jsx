import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; 
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidht = window.innerWidth;
const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);
    useEffect(() => {
        GlobalApi.getTrendingVideos()
            .then((resp) => {
                setMovieList(resp.data.results);
            });
    }, []);

    const sliderRight =(element) => {
        element.scrollLeft+=screenWidht-110
    }
    const sliderLeft =(element) => {
        element.scrollLeft-=screenWidht-110
    }

    return ( 
    <div>
        <HiChevronLeft className='
        hidden 
        md:block 
        text-white 
        text-[40px] 
        absolute 
        left-0 
        mx-8 
        mt-[325px] 
        cursor-pointer
        ' 
        onClick={() => sliderLeft(elementRef.current)}/>
        <HiChevronRight 
        className='
        hidden 
        md:block 
        text-white 
        text-[40px] 
        absolute 
        right-0 
        mx-8 
        mt-[325px]
        cursor-pointer' 
        onClick={() => sliderRight(elementRef.current)}/>

        <div className='
        flex 
        overflow-x-auto 
        w-full 
        px-16 
        py-4 
        scrollbar-none 
        scroll-smooth
        ' ref={elementRef}>
        {movieList.map((item)=>(
            <img 
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className='
            mt-0
            min-w-full 
            md:h-[550px]
            object-cover
            object-left-top 
            mr-5 
            rounded-md 
            hover:border-[4px] 
            border-gray-400
            transition-all 
            duration-100 
            ease-in 
            cursor' />
        ))}
        </div>
    </div>
    )
}

export default Slider;

