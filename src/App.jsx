import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DataItem from "./assets/DataItem";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/d07cfe72-b4a3-405f-99a3-65d249b854be").then((response) => {
            setData(() => response.data.data.children);
        });
    }, []);
    return (
        <div className='container'>
            <div>
                <h2>JSON Application</h2>
            </div>
            <div>
                <div className='d-flex gap-1'>
                    {data.map((item) => (
                        <DataItem key={item.data.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
