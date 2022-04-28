import React, { useState, useEffect } from "react";


const Home = () => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setCollection(json);
                // console.log(json)
            });
    }, []);

    let modified_collection = [];

    if (collection.length > 0) {
        let numberOfColumns = collection.length / 10;

        if (collection.length % 10 > 0) {
            numberOfColumns++;
        }

        let index = 0;
        for (let i = 0; i < collection.length; i++) {
            if (index % numberOfColumns === 0) {
                index = 0;
            }

            if (!modified_collection[index]) {
                modified_collection[index] = [];
            }

            modified_collection[index].push(collection[i]);
            index++;
        }
    }

    console.log(modified_collection);

    return (
        <div
            style={{
                width: "100%",
                overflow: "scroll",
                display: "flex",
                flexDirection: "row"
            }}
        >
            {modified_collection.map((row, index) => (
                <div
                    key={index}
                    style={{
                        wordWrap: "break-word",
                        flex: "0 0 auto",
                        display: "inline-block",
                        margin: 5
                    }}
                >
                    {row.map((col, index) => (
                        <div key={index} style={{ border: "1px solid green", marginBottom: 10 }}>
                            <div className="card" style={{ height: 150 }}>
                                <p> {col.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
export default Home;
