const sayHello  = (...names) => {
    names.forEach(name => {
        console.log(`Hello: ${name}`);
    });
};

sayHello("Ania", "Kasia", "Steve", "Bogumił");