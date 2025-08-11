import { Outlet, useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useEffect } from "react";
import { addUser } from "../store/slices/userSlice";

export const Home = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const fetchProfile = async () => {
        try {
            if (user) return
            const Profile = await axios.get(BASE_URL + "/profile/view", { withCredentials: true });
            dispatch(addUser(Profile?.data));
        } catch (err) {
            navigate("/login")
        }
    }
    useEffect(() => {
        fetchProfile();
    }, [])
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
