import image from "./assets/milky-way-2695569_1280.jpeg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Widgets from "./components/Widgets";

function App() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    height: "725px",
                }}
            >
                <header>
                    <Header />
                </header>
                <main>
                    <SearchBar />
                    <Widgets />
                </main>
            </div>
        </>
    );
}

export default App;
