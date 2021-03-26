function getName() {
  return "[my name from function]";
}

let myName;

// getName() called only when "myName" is null or undefined
console.log(myName ?? getName());

myName = "";

// getName() won't be called even though myName is an empty string
console.log(myName ?? getName());

// this:
myName ?? getName();

// is equivalent to this:
myName !== null && myName !== undefined ? myName : getName();

// ?? can be use multiple times
function fetchName() {
  console.log("[fetchName called, but it returns null]");
  return null;
}

myName = undefined;

// many fallbacks
console.log(myName ?? fetchName() ?? getName());
