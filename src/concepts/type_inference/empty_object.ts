
// inferred type: {}
const obj = {};

// error, because inferred type doesn't contain "msg" field
// obj.msg = "Hello";

// but JS native object is a dictionary (string -> value), so it's possible to assign any string key to the object
// (!) works if strict = false
//obj["msg"] = "Hello";
