import React from "react";
// import useMockData from "../utils/mockData";

const Main = () => {
    // const { error, initialize, progress, status } = useMockData();
    // const handleClick = () => {
    //     initialize();
    // };
    return (
        <div className="container mt-5">
            <h1 style={{ textAlign: "center" }}>
                {" "}
                Welcome to fastCompany social net
            </h1>
        </div>
    );
};

export default Main;

// <h3>Инициализация данных в FireBase</h3>
// <ul>
//     <li>Status:{status}</li>
//     <li>Progress: {progress}%</li>
//     {error && <li>error: {error}</li>}
// </ul>
// <button className="btn btn-primary" onClick={handleClick}>
//     {" "}
//     Инициализировать
// </button>
