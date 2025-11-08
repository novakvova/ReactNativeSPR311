import {getSecureStore} from "@/utils/secureStore";
import {IUser} from "@/types/auth/IUser";
import {jwtDecode} from "jwt-decode";
import {IAuthState} from "@/types/auth/IAuthState";


export const getUserFromToken = (token: string): IUser | null => {
    try {
        const decodedToken = jwtDecode<IUser>(token);
        let roles: string[] = [];

        // const rawRoles = decodedToken["roles"];
        if(typeof decodedToken.roles === "string") {
            roles = [decodedToken.roles];
        }
        else if(Array.isArray(decodedToken.roles)) {
            roles = decodedToken.roles;
        }

        return {
            email: decodedToken.email,
            name: decodedToken.name,
            image: decodedToken.image,
            roles: roles,
        };
    }
    catch(e) {
        console.log("Invalid token", e);
        return null;
    }
}

const token = getSecureStore("token");

const initUser = token ? getUserFromToken(token) : null;

//Дані які будуть зебігатися про авторизованого користувача
const initState: IAuthState = {
    user: initUser,
}

console.log("Auth token", initState);