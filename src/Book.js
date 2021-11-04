import React from "react";

const Book = ({ img, title, author, children }) => {
  // const { img, title, author, children } = props.book;
  // console.log(props);
  // const title = "I love you to the Moon and Back";

  const clickHandler = (e) => {
    alert("hello world");
    console.log(e);
    // console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" />
      {/* <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>

      {children}
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
