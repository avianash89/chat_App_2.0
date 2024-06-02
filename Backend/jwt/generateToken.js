import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
        expiresIn: "10d"
    });
    res.cookie("jwt", token,{
        httpOnly: true,  // to protect xss attack
        secure: true,  // Use secure cookies in production
        sameSite: "strict"  // to protect csrf attack
    })
}

export default createTokenAndSaveCookie; 