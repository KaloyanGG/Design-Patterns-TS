const peopleWithName = [
    {
        id: 1,
        name: 'koko',
    },
    {
        id: 2,
        name: 'jorko'
    },
    {
        id: 3,
        name: 'didka'
    }
];


const peopleWithAge = [
    {
        id: 1,
        age: 25,
    },
    {
        id: 2,
        age: 35,
    },
    {
        id: 3,
        age: 40,
    }
]

class PeopleNames {
    static findPersonById(id: number) {
        return peopleWithName.find(e => e.id === id);
    }
}
class PeopleAges {
    static findPersonById(id: number) {
        return peopleWithAge.find(e => e.id === id);
    }
}


class FacadeReturnPersonInfoById {
    nameAndAgeById(id: number) {
        const personWithName = PeopleNames.findPersonById(id);
        const personWithAge = PeopleAges.findPersonById(id);
        return { ...personWithName, age: personWithAge?.age }
    }
}

const facade = new FacadeReturnPersonInfoById();
console.log(facade.nameAndAgeById(2));
