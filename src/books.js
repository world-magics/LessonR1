import React from "react";
import ReactDom from "react-dom";
import "./style.css";

export const data = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91I+w5MwdhS._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71zcTLgOIbL._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/91I+w5MwdhS._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/71zcTLgOIbL._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/91I+w5MwdhS._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
  {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/71zcTLgOIbL._AC_UL127_SR127,127_.jpg",
    title: "I love you to the Moon and Back",
    author: "Khanna Koham",
  },
];

// const names = ["sher", "bek", "sana"];

// const NewName = names.map((name) => {
//   console.log("////------------------------------////");
//   console.log(name);

//   return <h1>{name}</h1>;
// });

// const NewBook = books.map((img, title, author) => {
//   return <h1>{title}</h1>;
//   // console.log(img);
// });
function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        const { img, title, author } = book;
        // console.log(book);
        return (
          // <Book book={book.img} book={book.title} book={book.author}></Book>
          <Book key={index} {...book}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipi sicing elit.
              Praesentium quis place at atque quo, ab quae.
            </p>
          </Book>
        );
      })}
    </section>
  );
}
const author = "Khanna Khanna";
const title = "This is lovely a book my life";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/71N7vj5cSkL._AC_UL254_SR254,254_.jpg";
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

// const Title = () => <h1>This is Book is Great</h1>;
// const Author = () => <h4>Kara Khanna</h4>;
// const Image1 = () => {
//   return (
//     <img
//       src="https://images-na.ssl-images-amazon.com/images/I/71N7vj5cSkL._AC_UL254_SR254,254_.jpg"
//       alt="Imag1e Book"
//     />
//   );
// };
// const Person = () => <h2>Sherzod Yarashev</h2>;
// const Message = () => {
//   return <p>This is my Message</p>;
// };

// const Greeting = () => {
//     return React.createElement('h1', {},
//         React.createElement('h1', {}, 'hello world'));
// }
ReactDom.render(<BookList />, document.getElementById("root"));
