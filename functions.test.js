const functions = require('./functions');
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

test('Adds 2+2 to equal 4',()=>{
expect(functions.add(2,2)).toBe(4);
});
test('Adds 2+2 to not equal 5',()=>{
    expect(functions.add(2,2)).not.toBe(5);
});
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null',()=>{
    expect(functions.isNull()).toBeNull();
});
test('Should be falsy',()=>{
    expect(functions.checkValue(null)).toBeFalsy();
});
test('Should be falsy',()=>{
    expect(functions.checkValue(null)).toBeFalsy();
});
//to equal for objects
test('Bad traversy object',()=>{
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    });
});
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
  });
  test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
       return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
      });
    });