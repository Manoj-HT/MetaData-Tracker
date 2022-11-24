import { UserType } from "./UserType"
export class UserModel{
    id: string | undefined
    osId: string | undefined
    name: string | undefined
    phoneNo: number | undefined
    email: string | undefined
    institute: string | undefined
    password: string | undefined
    status: string | undefined
    userType: UserType | undefined
    sDeleteFlag: boolean | undefined
}