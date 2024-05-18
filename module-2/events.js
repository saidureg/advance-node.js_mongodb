const EventEmitter = require("node:events");

class myBirthday extends EventEmitter {
  // Create a class that extends EventEmitter
  constructor() {
    super();
  }
}

const myBirthdayEvent = new myBirthday(); // Create a new instance of the class

myBirthdayEvent.on("birthday", () => {
  console.log(`Happy Birthday!`);
});

myBirthdayEvent.on("birthday", (name, gift) => {
  console.log(`Happy Birthday ${name}. I will give you a ${gift} as a gift!`);
});

// myBirthdayEvent.emit("birthday", "John"); // Output: Happy Birthday John
myBirthdayEvent.emit("birthday", "John", "book"); // Output: Happy Birthday John
