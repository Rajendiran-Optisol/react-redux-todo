import React from 'react';

function Backdrop() {
    return (<div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", width: "100%", height: "100%", position: "fixed", zIndex: 998}}></div>);
}

export default Backdrop;