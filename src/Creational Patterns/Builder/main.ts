import CastleBuilder from "./builders/castle-builder";
import HouseBuilder from "./builders/house-builder";
import Director from "./director";

//The Director is only responsible for executing the building steps in a particular sequence.

//! Without director:

//* Building a house by the house builder and listing its parts
const houseBuilder = new HouseBuilder();
houseBuilder.addFloor();
houseBuilder.addWalls();
const house = houseBuilder.build();
house.listParts();

console.log('-----');

//* Building a castle by the house builder and listing its parts
const castleBuilder = new CastleBuilder();
castleBuilder.addBeauty();
castleBuilder.addWalls();
const castle = castleBuilder.build();
castle.listParts();

console.log('------');

//! With director:
const director = new Director();

//* Building a castle by the director 
const anotherCastleBuilder = new CastleBuilder();
director.setBuilder(anotherCastleBuilder);
director.buildCastleWithEverything();
anotherCastleBuilder.castle.listParts();

console.log('------');

//* Building a house by the director 
const anotherHouseBuilder = new HouseBuilder();
director.setBuilder(anotherHouseBuilder);
director.buildHouseWithEverything();
anotherHouseBuilder.house.listParts();
