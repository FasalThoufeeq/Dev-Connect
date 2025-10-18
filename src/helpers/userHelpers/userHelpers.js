import User from "../../model/usermodel.js"


const UserHelpers = () => {
    const saveUser = (user) => {
        const newUser = new User(user)
        const savedUser = newUser.save()
        return savedUser
    }
    return { saveUser }
}

export default UserHelpers