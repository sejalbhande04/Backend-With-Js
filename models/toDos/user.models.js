import mongoose from "mongoose";
// make schema and store in a variable
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true } // this will add createdAt and updatedAt fields automatically
);

// model function 2 parameters  - kya model banau and kis ke basis mai banau
export const User = mongoose.model("User", userSchema);
// ye User db mai plural mai convert hokr lowercase mai store hoga - users
// export isliye  taaki isko import karke use kar sakein kisi aur file mai
