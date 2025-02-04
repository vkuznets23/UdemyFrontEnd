import '../styles/index.css'

const books = [
    {
        image: "https://m.media-amazon.com/images/I/91I1KDnK1kL._SY522_.jpg",
        alt: "The Let Them Theory",
        title: "The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About",
        author: "mel robins",
        id: 1,
    },
    {
        image:"https://m.media-amazon.com/images/I/51sx4eLa6NL._SY445_SX342_.jpg",
        alt:"The Housemaid",
        title:"The Housemaid",
        author:'Freida McFadden',
        id: 2,
    },
    {
        image:"https://m.media-amazon.com/images/I/419CqGgAdZL._SY445_SX342_.jpg",
        alt:"Atomic Habits",
        title:"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        author:'James Clear',
        id: 3,
    }
]

const Book = ({image, alt, title, author}) => {
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
        </div>
    )
};

const BookList = () => {
    return (
        <div className='booklist'>
            {/* option 1: */}
            {books.map((book) => {
                return (
                    <Book {...book} key={book.id}/>
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