import React, { createContext, useContext, useState, useEffect } from "react";
const BookContext = createContext(null);
export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://67d17ef590e0670699ba5929.mockapi.io/books"
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setBooks(json);
            console.log(json);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    const addBook = async (bookData) => {
        const response = await fetch(
            "https://67d17ef590e0670699ba5929.mockapi.io/books",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to add book");
        }

        fetchData();

        return response.json();
    };

    const updateBook = async (id, bookData) => {
        const response = await fetch(
            `https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to add book");
        }

        fetchData();

        return response.json();
    };

    const deleteBook = async (id) => {
        const response = await fetch(
            `https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`,
            {
                method: "DELETE",
            }
        );

        if (!response.ok) {
            throw new Error("Failed to delete book");
        }

        fetchData();

        return response.json();
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <BookContext.Provider
            value={{ books, addBook, updateBook, deleteBook, loading, error }}
        >
            {children}
        </BookContext.Provider>
    );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useBookContext = () => useContext(BookContext);
