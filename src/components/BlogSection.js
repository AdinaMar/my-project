import React from 'react';
import styled from 'styled-components';
import MainTitle from './MainTitle.js';
import {SectionStyled} from './Layouts.js';
import blogs from '../blogs';

function BlogSection() {
    return(

        <BlogSectionStyled>
<SectionStyled>
 
 <div className= "title-con">
     <MainTitle title={'Popular Podcasts'} subtitle={"Our Top Podcasts"} para={" If you're looking to form better mental health habits, this is a great—and free—place to start."} />
 </div>
<div className="blogs">
    {
blogs.map((blog) =>{
    return <div className="blog" key={blog.id}>
        <div className="image">
            <img src={blog.image} alt="" />

    </div>
    <h6>{blog.title}</h6>
    <div className="user">
        <p>Creator : </p>
        <p>{blog.name}</p>
    </div>
    </div>
})

 }
</div>
    
</SectionStyled>
            </BlogSectionStyled>
    )
}



const BlogSectionStyled =  styled.div`
.blogs{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem;
    padding-top: 2rem;
   
    
    .blog{
        background: rgba(255, 255, 255, 0.03);
        border-radius: 20px;
        width: 15rem;
        
       .image{
            height: 200px;
            width: 100%;
            overflow: hidden;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            transition: all .4s ease-in-out;
           img{
               height: 100%;
               width: 100%;
               border-top-left-radius: 20px;
               border-top-right-radius: 20px;
               transition: all .4s ease-in-out;
               object-fit: cover;
               filter: grayscale(60%);
               &:hover{
                 filter: grayscale(0);
                 transform: scale(1.2);
               }
        }
    }
    h6{
        font-weight: 500;
        font-size: 1.3rem;
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .user{
        padding-top: .2rem;
        padding-bottom: 1.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 80%;
        display: flex;
        
        p:first-child{
            padding-right: 0.4rem;
            opacity: 0.5;
        }
    }
    }
}
`;

export default BlogSection;