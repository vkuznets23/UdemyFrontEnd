import '../styles/index.css'
import {books} from '../books'

const Book = ({image, alt, title, author, id, getBook, index}) => {
    const h4Style = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem'
    }

    return (
        <div className='book'>
            <img src={image} alt={alt}/>
            <h2> {title} </h2>
            <h4 style={h4Style}> {author.charAt(0).toUpperCase() + author.slice(1)} </h4>
            <button onClick={() => getBook(id)}>click</button>
            <span className='number'>{index + 1}</span>
        </div>
    )
};

const BookList = () => {
    const getBook = (id) => {
        const book = books.find(book => book.id === id )
        console.log(book.title)
    }
    
    return (
        <div className='booklist'>
            {/* option 1: */}
            {books.map((book, index) => {
                return (
                    <Book {...book} key={book.id} getBook={getBook} index={index}/>
                )
            })
            // option 2:
            // {books.map(({image, alt, title, author, id}) => {
            //      // option 1:const {image, alt, title, author, id} = book;
            //     return (
            //         <Book image={image} title={title} author={author} alt ={alt} key={id}/>
            //     )
            // })
            }
        </div>
    )
}

export default BookList;