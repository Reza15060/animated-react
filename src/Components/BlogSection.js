import React from 'react'
import  styled  from 'styled-components';
import { SectionStyled } from '../Layout';
import MainTitle from './MainTitle';
import blogs from '../blogs'



function BlogSection() {
    return (
        <BlogsSectionStyled>
            <SectionStyled>
                <div className="title-icon">
                <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'} />
                </div>
                <div className="blogs">
                    {
                        blogs.map((blog)=>{
                        
                            return <div className="blog" key={blog.id} >
                                <div className="image">
                                    
                             <img src={blog.image} alt=""/>
                                <h6>{blog.title}</h6>
                                </div>
                                <div className="user">
                                    <p>Creator: </p>
                                    <p>{blog.name} </p>
                                 
                                </div>
                            </div>
                        })
                    }
                </div>
            </SectionStyled>
        </BlogsSectionStyled>
    )
}

const BlogsSectionStyled = styled.div`
    
    .blogs{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        padding-top: 1rem;
        padding-left: 4rem;
        padding-right: 4rem;
        height: 60%;
        .blog{
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
         
            .image{
                height: 300px;
                width: 100%;
                overflow: hidden;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                transition: all .4s ease-in-out;
                img{
                    height: 80%;
                    width: 100%;
                    transition: all .4s ease-in-out;
                    object-fit: cover;
                    border-top-right-radius: 20px;
                    border-top-left-radius: 20px;
                    filter: grayscale(50%);
                    &:hover{
                        transform: scale(1.2) rotate(10deg);
                        filter: grayscale(0);
                    }
                }
            }
            h6{
                font-weight: 500;
                font-size: 1.2rem;
                padding-top: 2rem;
                padding-left: 2rem;
                padding-right: 2rem;
            }
            .user{
                padding-top: .2rem;
                padding-bottom: 1.5rem;
              
                padding-left: 1rem;
                padding-right: 1rem;
                text-align: center;
                p:first-child{
                    padding-right: 0.4rem;
                    opacity: 0.5;
                }
            }
        }
    }
`;
export default BlogSection
