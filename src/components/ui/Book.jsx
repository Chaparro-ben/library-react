import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState()

  const mountedRef  = useRef(true)

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current)
        setImg(image);
        
      }, 330);
    };
    return () => {
      //when the component unmount
      mountedRef.current = false
    }
  })
  return (
    <div className="book">
      {
        img ?
        <>
        <Link to={`/books/${book.id}`}>
        <figure className="book_img--wrapper">
          <img src={book.url} className="book__img" ></img>
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
        
        </> 
        : <>  <div className="book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div></>
      }
     
      
    </div>
  );
};

export default Book;
