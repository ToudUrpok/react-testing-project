import React from "react";
import Counter from "../components/Counter/Counter";

const HomePage = () => {
    return (
        <div data-testid='home-page'>
            <h1>HOME PAGE</h1>
            <Counter />
        </div>
    );
};

export default HomePage;