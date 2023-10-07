import { useState } from 'react'

export const UseStateWithArray = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        setItems([...items,
        {
            id: items.length,
            // Generates a random number from 1 to 10
            value: Math.floor(Math.random() * 10) + 1
        }
        ])
    }
    return (
        <div>
            <button onClick={handleAddItem}>Add item</button>
            <ul>
                {
                    items.map((item) => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}
