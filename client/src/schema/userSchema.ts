import {z} from "zod"


export const UserSingupSchema=z.object({
    fullname:z.string().min(1,"Fullname is required"),
    email:z.email("Invalid Email Address"),
    password:z.string().min(6,"Password must be at least 6 character"),
    contact:z.string().min(10,"contact number must be 10 digits")
})


export const UserloginSchema=z.object({
    email:z.email("Invalid Email Address"),
    password:z.string().min(6,"Password is missing")
})



export const UserForgotPasswordSchema=z.object({
    email:z.email("Email required")
})




export type SingupInputState=z.infer<typeof UserSingupSchema>   
export type LoginInputState=z.infer<typeof UserloginSchema>
export type ForgotPasswordState=z.infer<typeof UserForgotPasswordSchema>