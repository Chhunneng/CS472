import React, { useState } from "react";
import { useBookContext } from "../Contexts/BookContext";
import EditBookForm from "./EditBookForm";
// const ParentComponent = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedBook, setSelectedBook] = useState(null);

//     const books = [
//         { id: 1, title: "Book 1", author: "Author 1" },
//         { id: 2, title: "Book 2", author: "Author 2" },
//     ];

//     const handleEditClick = (book) => {
//         setSelectedBook(book);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setSelectedBook(null);
//     };

//     return (
//         <div>
//             <h1>Book List</h1>
//             <ul>
//                 {books.map((book) => (
//                     <li key={book.id}>
//                         {book.title} by {book.author}
//                         <button onClick={() => handleEditClick(book)}>
//                             Edit
//                         </button>
//                     </li>
//                 ))}
//             </ul>

//             {isModalOpen && selectedBook && (
//                 <EditBookForm book={selectedBook} onClose={handleCloseModal} />
//             )}
//         </div>
//     );
// };

const BookList = () => {
    const { books, deleteBook, loading } = useBookContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleEditClick = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    if (loading) {
        return <p>Loading books...</p>;
    }

    return (
        <>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "16px",
                }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td style={{ textAlign: "center" }}>
                                <button
                                    onClick={() => handleEditClick(book)}
                                    style={{
                                        backgroundColor: "#4CAF50",
                                        marginRight: "8px",
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteBook(book.id)}
                                    style={{
                                        backgroundColor: "#f44336",
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && selectedBook && (
                <EditBookForm book={selectedBook} onClose={handleCloseModal} />
            )}
        </>
    );
};

export default BookList;
