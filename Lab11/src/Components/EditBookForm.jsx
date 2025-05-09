import React, { useState } from "react";
import { useBookContext } from "../Contexts/BookContext";
import { useParams, useSearchParams } from "react-router";

const EditBookForm = () => {
    const { updateBook } = useBookContext();
    const { id } = useParams();
    const [queryParams] = useSearchParams();
    const [formData, setFormData] = useState({
        title: queryParams.get("title") || "",
        author: queryParams.get("author") || "",
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
            updateBook(id, formData).then(() => alert("Success"));
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 style={{ textAlign: "center" }}>Edit Book</h2>
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
                </form>
            </div>
        </div>
    );
};

export default EditBookForm;
