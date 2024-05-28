// import React, { Component } from 'react';
// import { createRoot } from 'react-dom/client';
// function Chat(props) {
//     return (
//         <section className="chat">
//             <header>
//                 <h1>Chat prywatny</h1>
//             </header>
//             <div>
//                 <ul>
//                     <li>Wpis z chatu 1</li>
//                     <li>Wpis z chatu 2</li>
//                     <li>Wpis z chatu 3</li>
//                 </ul>
//             </div>
//             <footer>
//                 <form>
//                     <input type="text" />
//                     <button>Wyślij</button>
//                 </form>
//             </footer>
//         </section>
//     );
// }
//
// function App(props) {
//     return <Chat />;
// }
//
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App />);


//rozwiazanie
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
const ChatHeader = () => {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    );
};

const ChatMessage = ( {msg} ) => {
    return (
            <li>{msg}</li>
    );
};

const ChatMessages = () => {
    return (
        <ul>
            <ChatMessage msg="Wpis z chatu 1"/>
            <ChatMessage msg="Wpis z chatu 2"/>
            <ChatMessage msg="Wpis z chatu 3"/>
        </ul>
    );
};

const NewChatMessage = () => {
    return (
        <footer>
            <form>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        </footer>
    );
};

const App = () => {
    return (
        <section className="chat">
            <ChatHeader/>
            <ChatMessages/>
            <NewChatMessage/>
        </section>
    );
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

