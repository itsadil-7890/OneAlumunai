import dbConnect from '../../../lib/dbConnect';
import users from '../../../models/users';
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import { loginSchema } from '../../../lib/zodSchemas/userSchema';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      error: parsed.error.flatten(),
    });
  }

  const { userId  , password } = parsed.data;

  try {
    const user = await users.findOne({ userId });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
 
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(password);
    console.log(user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    // Set cookie
    const cookie = serialize("customUser", JSON.stringify({
      id: user._id,
      email: user.email,
      fullName: user.fullName,
     
      accountType: user.accountType,
      profilePhoto: user.profilePhoto,
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    res.setHeader("Set-Cookie", cookie);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      
        accountType: user.accountType,
        profilePhoto: user.profilePhoto,
      }
    });

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      success: false,
      message: "Login failed"
    });
  }
}
