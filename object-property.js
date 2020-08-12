const students = [
    {id: 33, name: 'ahana'},
    {id: 44, name: 'selina'},
    {id: 55, name: 'tahera'},
    {id: 66, name: 'anamika'},
    {id: 77, name: 'sompurna'},
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>66);
const biggerOne = students.find( s => s.id>40);


console.log(names, ids, bigger, biggerOne);