export class User {


    private _id: string;
    private _username: string;
    private _password: string;
    private _email: string;
    private _name: string;


    private _roles: string[];

    private _created: string;
    private _updated: string;

    constructor() {
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

	get created(): string {
		return this._created;
	}

	set created(value: string) {
		this._created = value;
	}

    get updated(): string {
		return this._updated;
	}

	set updated(value: string) {
		this._updated = value;
	}

    get roles(): string[] {
		return this._roles;
	}

	set roles(value: string[]) {
		this._roles = value;
	}
}
