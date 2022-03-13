import { createContext } from "react";
// auth object should contain the user and the token
type AuthObject = {
	user: Object;
	token: string | null;
	logout?: any;
};
const authObject: AuthObject = {
	user: {},
	token: null,
};

const AuthContext = createContext(authObject);
export default AuthContext;
