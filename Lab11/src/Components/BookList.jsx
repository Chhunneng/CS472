import React from "react";
import { useBookContext } from "../Contexts/BookContext";
import { useNavigate } from "react-router";

const BookList = () => {
    const { books, deleteBook, loading } = useBookContext();
    let navigate = useNavigate();

    const handleEditClick = (book) => {
        navigate(
            `/edit-book/${book.id}?title=${book.title}&author=${book.author}`
        );
    };

    if (loading) {
        return <p>Loading books...</p>;
    }

    return (
        <>
            <h3 style={{textAlign: "center"}}>
                <a href="https://github.com/Chhunneng/CS472/tree/main/Lab11">
                    Here is code
                </a>
            </h3>
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
        </>
    );
};

export default BookList;
