import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { validationConfig } from "../utils/validation";


const Login = () => {
  const [signupFormData, setSignupFormData] = useState(() => {
    const storedData = localStorage.getItem("signupFormData");
    return storedData ? JSON.parse(storedData) : { firstName: "", lastName: "", email: "", password: "", photoUrl: "" };
  });
  const [loginFormData, setLoginFromData] = useState(() => {
    const storedData = localStorage.getItem("loginFormData");
    return storedData ? JSON.parse(storedData) : { email: "", password: "" };
  });
  const [isLogInForm, setIsLogInForm] = useState(() => {
    const storedData = localStorage.getItem("isLoginForm");
    return storedData ? JSON.parse(storedData) : { condition: true }
  });

  const [err, setErr] = useState()
  const [signupValidationData, setSignupValidationData] = useState({});
  const [logValidationData, setlogValidationData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const timeOut = setTimeout(() => {
      localStorage.setItem("loginFormData", JSON.stringify(loginFormData));
    }, 500)

    return () => { clearTimeout(timeOut) }
  }, [loginFormData]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("signupFormData", JSON.stringify(signupFormData));
    }, 500);

    return () => clearTimeout(timeout);
  }, [signupFormData]);

  useEffect(() => {
    localStorage.setItem("isLoginForm", JSON.stringify(isLogInForm));
  }, [isLogInForm]);

  const validation = () => {
    const copyValidationData = {};

    Object.entries(isLogInForm.condition ? loginFormData : signupFormData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (!value && rule.require) {
          copyValidationData[key] = rule.message
          return true
        }
        if (rule.minLength && value.length < rule.minLength) {
          copyValidationData[key] = rule.message
          return true
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          copyValidationData[key] = rule.message
          return true
        }
      })
    })

    isLogInForm.condition ? setlogValidationData(copyValidationData) : setSignupValidationData(copyValidationData)
    return copyValidationData;
  }

  const formHandle = (e) => {
    const { name, value } = e.target
    isLogInForm.condition ? setLoginFromData((prvState) => ({ ...prvState, [name]: value })) : setSignupFormData((prvState) => ({ ...prvState, [name]: value }))
  }

  const loginHandle = async () => {
    const { email, password } = loginFormData
    const data = validation();
    if (Object.keys(data).length > 0) return
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password
        },
        { withCredentials: true }
      )
      dispatch(addUser(response.data));
      localStorage.removeItem("loginFormData");
      return navigate('/')
    } catch (err) {
      setErr(err.response.data.message)
    }
  }

  const signUPHandle = async () => {
    const { email, password, firstName, lastName,photoUrl } = signupFormData
    const data = validation();
    if (Object.keys(data).length > 0) return

    try {
      const response = await axios.post(
        BASE_URL + "/signup",
        {
          email,
          password,
          firstName,
          lastName,
          photoUrl
        },
        { withCredentials: true }
      )
      dispatch(addUser(response.data));
      localStorage.removeItem("signupFormData")
      localStorage.removeItem("isLoginForm")
      return navigate('/')
    } catch (err) {
      setErr(err.response.data.message)
    }
  }

  return (
    <div className="card card-border bg-base-300 max-w-96 screen400:mx-auto screen350:mx-2  mt-7 ">
      <div className="card-body">
        <h2 className="card-title justify-center">{isLogInForm.condition ? "Log IN" : "signUp"}</h2>
        {!isLogInForm.condition && <>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-normal">FirstName:</legend>
            <input type="text" name="firstName" className="input" placeholder="Type here" value={signupFormData.firstName}
              onChange={(e) => { formHandle(e) }}
            />
            <p className="text-red-600">{signupValidationData.firstName}</p>

          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-normal">LastName:</legend>
            <input type="text" name="lastName" className="input" placeholder="Type here" value={signupFormData.lastName}
              onChange={(e) => { formHandle(e) }}
            />
            <p className="text-red-600">{signupValidationData.lastName}</p>

          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-normal">PhotoUrl:</legend>
            <input type="text" name="photoUrl" className="input" placeholder="paste here" value={signupFormData.photoUrl}
              onChange={(e) => { formHandle(e) }}
            />
          </fieldset>
        </>}
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-normal">Email:</legend>
          <input type="text" name="email" className="input" placeholder="Type here" value={isLogInForm.condition ? loginFormData.email : signupFormData.email}
            onChange={(e) => { formHandle(e) }}
          />
          <p className="text-red-600">{isLogInForm.condition ? logValidationData.email : signupValidationData.email}</p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-normal">Password:</legend>
          <input type="password" name="password" className="input" placeholder="Type here" value={isLogInForm.condition ? loginFormData.password : signupFormData.password}
            onChange={(e) => { formHandle(e) }}
          />
          <p className="text-red-600">{isLogInForm.condition ? logValidationData.password : signupValidationData.password}</p>
        </fieldset>
        <p className="text-red-600">{err}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={isLogInForm.condition ? loginHandle : signUPHandle}>{isLogInForm.condition ? "Log IN" : "signUp"}</button>
        </div>
        <p className="cursor-pointer"
          onClick={() => { setIsLogInForm((prvState) => { return !prvState.condition ? { condition: true } : { condition: false } }) }}>{isLogInForm.condition ? "new user? sign up" : "have an account? login"}</p>
      </div>
    </div>
  )
}

export default Login