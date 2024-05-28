import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


// const LikeBox = (props) => {
//     const {likes} = props;
//     return (
//         <div>
//             <p>{likes}</p>
//             <button>lubię to</button>
//         </div>
//     );
// };


const LikeBox = ({likes}) => {
    return (
        <div>
            <p>{likes} Likes</p>
            <button>Lubię to!</button>
        </div>
    );
};

root.render(<LikeBox likes={120} />);
