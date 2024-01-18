
    const heading =React.createElement("h1",{},"hello from react");
    
    console.log(heading);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

    const parent =React.createElement(
        "div",
        {id:"parent"},
        React.createElement(
            "div",
            {id:"child"},
            React.createElement("h1",{},"hello from react")
    )
    );
    root.render(parent);
