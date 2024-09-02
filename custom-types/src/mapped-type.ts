type User = {
    id?: number;
    name: string;
    email: string;
};

type UserReadOnly = Pick<User, 'name' | 'email'>;

let user: UserReadOnly = {
    name: 'John',
    email: 'john@gmail.com'
};

let user2: User = {
    ...user,
    id: 1
};
console.log(user2); // { name: 'John', email: '

type ConstantUser = Readonly<User>;
let user3: ConstantUser = {
    name: 'John',
    email: 'john@gmail.com'
}

type PartialUser = Partial<User>;
let user4: PartialUser = {
    name: 'John'
}
