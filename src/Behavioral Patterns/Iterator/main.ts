import KeysIterator from "./keys-iterator";
import PeopleWithAge from "./people";

// Making the peopleList
const peopleObject = new PeopleWithAge();

// Returning the iterator of the list
const iterator = new KeysIterator(peopleObject.people);

while (iterator.hasNext()) {
    console.log(iterator.next());
}






