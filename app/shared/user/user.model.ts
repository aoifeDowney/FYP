export class User {
    username: string;
    email: string;
    password: string;
    household: string;

    hasEmail() {
        return this.email != '';
    }
}