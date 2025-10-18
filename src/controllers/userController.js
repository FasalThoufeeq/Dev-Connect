import UserHelpers from "../helpers/userHelpers/userHelpers.js"

const userControllers = () => {
    const saveUser = async (req, res) => {        
        try {
            const user = req.body
            const savedUser = await UserHelpers().saveUser(user)
            res.json({
                message: "User registered successfully",
                user: savedUser
            })
        } catch (error) {
            res.json({error:`User registeration failed ${error}`})
        }
    }
    return { saveUser }
}

export default userControllers