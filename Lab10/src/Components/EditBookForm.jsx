import React, { useState } from "react";
import { useBookContext } from "../Contexts/BookContext";

const EditBookForm = ({ book, onClose }) => {
    const { updateBook } = useBookContext();
    const [formData, setFormData] = useState({
        title: book.title || "",
        author: book.author || "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = "Title is required.";
        if (!formData.author) newErrors.author = "Author is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            updateBook(book.id, formData); // Pass id and updated data to updateBook
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Edit Book</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {errors.title && (
                            <span className="error-message">
                                {errors.title}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                        />
                        {errors.author && (
                            <span className="error-message">
                                {errors.author}
                            </span>
                        )}
                    </div>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditBookForm;
