const Person = require('../source/Person');

test("initialization definition", () => {
  const p = new Person("David ", "abc@gmail.com");
});

test("initialization definition valid", () => {
  const p = new Person("David ", "abc@gmail.com");
  expect(p.arePropertiesValidated()).toBeTruthy();
});

test("initialization definition invalid lastName", () => {
  const p = new Person("David #", "abc@gmail.com");
  expect(p.arePropertiesValidated()).toBeFalsy();
});

test("initialization definition invalid email", () => {
  const p = new Person("David", "abc@gmail@.com");
  expect(p.arePropertiesValidated()).toBeFalsy();
});

test("setLastName valid name", () => {
  const p = new Person("david -", "abc@gmail.com");
  expect(p.getLastName()).toBe("david -");
  p.setLastName("jeff").then(x => { expect(x).toBeTruthy(); });
  expect(p.getLastName()).toBe("jeff");
});

test("setLastName invalid name special char .", () => {
  const p = new Person("david", "abc@gmail.com");
  p.setLastName("daaa.vid").catch(err => {});
  expect(p.getLastName()).toBe("david");
});

test("setLastName invalid name special char #", () => {
  const p = new Person("david", "abc@gmail.com");
  p.setLastName("daaa#vid").catch(err => {});
  expect(p.getLastName()).toBe("david");
});

test("setLastName invalid name special char @", () => {
  const p = new Person("david", "abc@gmail.com");
  p.setLastName("daaa@vid").catch(err => {});
  expect(p.getLastName()).toBe("david");
});

test("setLastName invalid name number", () => {
  const p = new Person("david", "abc@gmail.com");
  p.setLastName("d1aaavid").catch(err => {});
  expect(p.getLastName()).toBe("david");
});

test("setLastName invalid name", () => {
  const p = new Person("david", "abc@gmail.com");
  p.setLastName("daaa.vid").catch(err => {});
  expect(p.getLastName()).toBe("david");
});

test("Person constructor invalid inputs", () => {
  const p = new Person("david@", "ab*c@gmail.com");
  expect(p.getLastName()).toBeFalsy();
  expect(p.getEmail()).toBeFalsy();
});

test("setEmail valid email", () => {
  const p = new Person("david", "abc@gmail.com");
  p.setEmail("efg@verizon.net").catch(err => {});
  expect(p.getEmail()).toBe("efg@verizon.net");
});

test("setEmail invalid email", () => {
  const p = new Person("david", "abc@gmail.com");
  p.setEmail("efg@verizon$net").catch(err => {});
  expect(p.getEmail()).toBe("abc@gmail.com");
});

test("description", () => {
  const c = new Person("david", "abc@gmail.com");
  expect(c.description()).toBe("[Person: david]");
});