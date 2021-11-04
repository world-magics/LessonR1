import React from "react";
import ReactDom from "react-dom";
import "./style.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91I+w5MwdhS._AC_UL127_SR127,127_.jpg",
  title: "I love you to the Moon and Back",
  author: "Khanna Koham",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81X+TLMA8oL._AC_UL127_SR127,127_.jpg",
  title: "I love you to the Moon and Back",
  author: "Khanna Koham",
};
const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71zcTLgOIbL._AC_UL127_SR127,127_.jpg",
  title: "I love you to the Moon and Back",
  author: "Khanna Koham",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        job="developer"
        img={firstBoodk.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        title="random title"
        number={22}
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      >
        <p>
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam */}
          voluptatum reiciendis exercitationem atque suscipit sapiente!
        </p>
      </Book>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const author = "Khanna Khanna";
const title = "This is lovely a book my life";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/71N7vj5cSkL._AC_UL254_SR254,254_.jpg";
const Book = (props) => {
  const { img, title, author, children } = props;
  // console.log(props);
  // const title = "I love you to the Moon and Back";
  return (
    <article className="book">
      <img src={img} alt="" />
      {/* <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p> */}
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
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
