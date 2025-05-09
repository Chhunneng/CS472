import React, { useState } from "react";
import { useBookContext } from "../Contexts/BookContext";

function AddBookForm() {
    const { addBook } = useBookContext();
    const [formData, setFormData] = useState({
        title: "",
        author: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        author: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = "Title is required";
            valid = false;
        }

        if (!formData.author.trim()) {
            newErrors.author = "Author is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await addBook(formData);
                alert("Success");
                setFormData({ title: "", author: "" });
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while adding the book");
            }
        }
    };

    return (
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
                    <span className="error-message">{errors.title}</span>
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
                    <span className="error-message">{errors.author}</span>
                )}
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBookForm;
