import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://snappy.pockethost.io/');

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
        <div className="flex flex-col items-center p-6">
            <h2 className="text-2xl font-semibold mb-4">Cards</h2>
            <ul className="list-disc">
                {cards.map((card) => (
                    <li key={card.id}>{card.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cards;
