export const validationConfig = {
    email: [{ require: true, message: "please enter email" }, { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "please enter valid email syntax" }],
    password: [{ require: true, message: "please enter password" }, { minLength: 6, message: "password should at least 6 charecter" }],
    firstName: [{ require: true, message: "please enter firstname" }],
    lastName: [{ require: true, message: "please enter lastname" }],
}