import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://snappy.pockethost.io');

function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchCards() {
            const records = await pb.collection('cards').getFullList();
            setCards(records);
        }
        fetchCards();
    }, []);

    return (
        <div>
            <h2>Cards</h2>
            <ul>
                {cards.map((card) => (
                    <li key={card.id}>{card.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cards;
