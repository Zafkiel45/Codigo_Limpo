const person = {
    name: 'Murilo', 
    age: 19, 
    profession: 'programmer'
};

if(person.age >= 18 && person.profession === 'programmer') {
    console.log(`You are a ${person.profession} with ${person.age} years`);
};

// Acima uma condicional bem simples, mas que pode ser melhorada um pouco.
// Considere a seguinte mudança:

const isAdultAndProgrammer = person.age >= 18 && person.profession === 'programmer';

if(isAdultAndProgrammer) {
    console.log(`You are a ${person.profession} with ${person.age} years`);
};

/*
    Acima, atribui o teste para uma constante, dando um nome a essa constante
    que explique a motivação daquele teste. 

    Depois bastou atruibuir o resultado da constante na condicional. 
*/