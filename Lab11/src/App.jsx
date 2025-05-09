import "./App.css";
import { Routes, Route, Link } from "react-router";
import AddBookForm from "./Components/AddBookForm";
import BookList from "./Components/BookList";
import Layout from "./Components/Layout";
import EditBookForm from "./Components/EditBookForm";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<BookList />} />
                <Route path="/add-book" element={<AddBookForm />} />
                <Route path="/edit-book/:id" element={<EditBookForm />} />
            </Route>
        </Routes>
    );
}

export default App;
