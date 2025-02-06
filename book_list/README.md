## Amazon best sellers web page
<img width="911" alt="image" src="https://github.com/user-attachments/assets/32356bed-4dc4-4251-be08-8872cb676752" />


### Vite setup
``` bash
npm create vite@latest app-name -- --template react
npm install
npm run dev
```

### Creating a component
``` js
function Greeting() {
  return <h2>My First Component</h2>;
}

// arrow function also works

const Greeting = () => {
  return <h2>My First Component</h2>;
};
```
###  JSX Rules
   * return single element (one parent element <div> )
   * className instead of class
   * formatting (opening tag in the same line as return or `()` )
### Nest Components
``` js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
```
### How set CSS to objects
** Option 1 Inline CSS **
``` js
   const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Jordan Moore
  </h4>
);
```
*Alternative option
``` js
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```
** Option 2 Create id / class and add rules in CSS separate file **
``` CSS
.book h4 {
  /* won't work */
  color: red;
  /* will work */
  letter-spacing: 2px;
}
```
###  Props and destructuring
  ``` js
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```
``` js
const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```
###  Children Prop (everything we render between component tags)
<img width="741" alt="Screenshot 2025-02-06 at 11 28 23" src="https://github.com/user-attachments/assets/79c1c251-14f4-408e-ac40-c64520680411" />
<img width="684" alt="Screenshot 2025-02-06 at 11 30 18" src="https://github.com/user-attachments/assets/704701ce-01a4-4252-8b7e-7d7db939121a" />

### How to render a list 
``` js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        console.log(book);
        const { img, title, author, id } = book;
        return <Book book={book} key={index} />;
      })}
    </section>
  );
}
```
### Destructoring object
``` js
const Book = ({ book: { img, title, author } }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```
### Spread operator
``` js
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
```
### Events - Fundamentals
most common
* onClick (click events)
* onSubmit (submit form )
* onChange (input change )

Event objects and form submisstion 
``` js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```
an alternative approach with () => function 
``` js
const EventExamples = () => {
  return (
    <section>
      <button onClick={() => console.log('hello there')}>click me</button>
    </section>
  );
};
```
### Prop Drilling
react data flow - can only pass props down
alternatives Context API, redux, other state libraries

if there is a need to access parametr calling a function in jsx 
``` js
const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* this is not going to work */}
      <button onClick={() => getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};
```









