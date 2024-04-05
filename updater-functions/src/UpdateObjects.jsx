import React, { useState } from "react";

const UpdateObjects = () => {
  const [book, setBook] = useState({ title: "The lord of the rings", author: "Tolkien", year: 1954 });

  const handleTitleChange = (e) => {
    setBook((b) => ({ ...book, title: e.target.value }));
  };
  const handleYearChange = (e) => {
    setBook((b) => ({ ...book, year: e.target.value }));
  };
  const handleAuthorChange = (e) => {
    setBook((b) => ({ ...book, author: e.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite book is: {book.title}, pulished in {book.year}, by {book.author}.{" "}
      </p>
      <input type="text" value={book.title} onChange={handleTitleChange} /> <br />
      <input type="number" value={book.year} onChange={handleYearChange} /> <br />
      <input type="text" value={book.author} onChange={handleAuthorChange} /> <br />
    </div>
  );
};

export default UpdateObjects;

// Now if we attempt to set our title to a specific object, then everything else will disappear, because thar way
// we replace our initial object to the new one. In order to solve this, we are gonna use the spread operator
// Also we are gonna use the updater function. We dont wanna modify the current state but rather a reference to the prev update
// and this will allow us safer updates. We need to use a () after our function, other JS will think that we are trying to run a multi-line statement
