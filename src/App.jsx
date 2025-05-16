import React from "react";
import "./styles/App.scss";
import Card from "./component/cards";
import Banner from "./component/Banner";

const App = () => {
    const cardsData = [
        { title: "Card 1", image: "/path/to/image1.jpg", description: "Description for Card 1" },
        { title: "Card 2", image: "/path/to/image2.jpg", description: "Description for Card 2" },
    ];

    return (
        <div className="app">
            <Banner title="Welcome!" image="/path/to/banner.jpg" />
            <div className="cards-container">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} onClick={() => console.log(`Clicked card ${index + 1}`)} />
                ))}
            </div>
        </div>
    );
};

export default App;
