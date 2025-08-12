import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { insert } from "../store/slices/feedSlice"
import { useEffect } from "react"
import ChatList from "./ChatList"

export const Feed = () => {
    const dispatch = useDispatch()
    const feedData = useSelector((state) => state.feed)
    const fetchFeed = async () => {
        const data = await axios.get(BASE_URL + "/users", { withCredentials: true });
        dispatch(insert(data?.data));
    }

    useEffect(() => {
        fetchFeed()
    }, [])

    if (!feedData) return

    return (
        <div className="w-full max-w-sm bg-gray-800 text-white h-[575px] overflow-y-auto mx-auto">
            {feedData.data.map((user) => <ChatList key={user._id} user={user} />)}
        </div>


    )
}
