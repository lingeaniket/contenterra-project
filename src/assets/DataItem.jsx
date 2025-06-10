import React from "react";
import SecureHTML from "./SecureHTML";

const DataItem = ({ item }) => {
    return (
        <div className='flex-item' key={item.data.id}>
            <h3>{item.data.title}</h3>
            {/* <p>{item.data.selftext}</p> */}
            <div>
                <SecureHTML markdown={item.data.selftext_html} />
            </div>
            {/* <p>{item.data}</p> */}
            <p>
                <a href={item.data.url}>{item.data.url}</a>
            </p>
            <p>
                {" "}
                <i class='bi bi-hand-thumbs-up'></i> {item.data.score}
            </p>
        </div>
    );
};

export default DataItem;
