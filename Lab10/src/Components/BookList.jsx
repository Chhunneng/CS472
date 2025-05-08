import React, { useState } from "react";
import { useBookContext } from "../Contexts/BookContext";
import EditBookForm from "./EditBookForm";

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
            <div className="book-list">
                {books.map((book) => (
                    <div className="book-card" key={book.id}>
                        <h3>{book.title}</h3>
                        <p>
                            <strong>Author:</strong> {book.author}
                        </p>
                        <p>
                            <strong>ID:</strong> {book.id}
                        </p>
                        <div className="book-card-actions">
                            <button
                                className="edit-button"
                                onClick={() => handleEditClick(book)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete-button"
                                onClick={() => deleteBook(book.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedBook && (
                <EditBookForm book={selectedBook} onClose={handleCloseModal} />
            )}
        </>
    );
};

export default BookList;
