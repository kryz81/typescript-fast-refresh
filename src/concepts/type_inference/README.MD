# Type inference

**Automatic detection of the type of expression**

### Good to know

* Try to avoid putting types everywhere
* Object properties types and array elements also inferred
* TS tries to find the most specific type. The type of _const a = "a"_ will be **"a"**, NOT **string**!
* The type is inferred on variable creation, not usage like in some languages
* Good practice is to put types for object literals or function return type
* __Function parameters MUST have types, TS cannot infer them__
* It's possible to change the type of variable, but ONLY narrow it