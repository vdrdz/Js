const Person = {
    name: "Valerie",
    School: "CSUSB",
    age: 20
};
const PersonObjToString = JSON.stringify(Person)
console.log(typeof PersonObjToString);

const toJSONPerson = JSON.parse(PersonObjToString);
console.log(typeof toJSONPerson);