## Amazon best sellers web page
<img width="911" alt="image" src="https://github.com/user-attachments/assets/32356bed-4dc4-4251-be08-8872cb676752" />
it helps me to learn React fundamentals:
1. Creating a component
``` js
function Greeting() {
  return <h2>My First Component</h2>;
}

// arrow function also works

const Greeting = () => {
  return <h2>My First Component</h2>;
};
```
2. JSX Rules
   * return single element (one parent element <div>)
   * className instead of class
   * formatting (opening tag in the same line as return or `()` )
3. Nest Components
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
4. How set CSS to objects
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
5. Props and destructuring
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
7. Children Prop (everything we render between component tags)
<img width="741" alt="Screenshot 2025-02-06 at 11 28 23" src="https://github.com/user-attachments/assets/79c1c251-14f4-408e-ac40-c64520680411" />
<img width="684" alt="Screenshot 2025-02-06 at 11 30 18" src="https://github.com/user-attachments/assets/704701ce-01a4-4252-8b7e-7d7db939121a" />









