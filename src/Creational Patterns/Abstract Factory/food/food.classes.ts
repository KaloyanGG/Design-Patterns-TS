import Food from "./food.interface";


export class Tomato implements Food {
    buyFood(): void {
        console.log('Buying tomato');
    }
}
export class Potato implements Food {
    buyFood(): void {
        console.log('Buying potato');
    }
}
export class Onion implements Food {
    buyFood(): void {
        console.log('Buying onion');
    }
}
export class Garlic implements Food {
    buyFood(): void {
        console.log('Buying garlic');
    }
}
export class Apple implements Food {
    buyFood(): void {
        console.log('Buying apple');
    }
}
export class Banana implements Food {
    buyFood(): void {
        console.log('Buying banana');
    }
}
export class Orange implements Food {
    buyFood(): void {
        console.log('Buying orange');
    }
}
export class Grape implements Food {
    buyFood(): void {
        console.log('Buying grape');
    }
}