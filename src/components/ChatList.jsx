import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addTargetUser } from "../store/slices/targetUserSlice";

const ChatList = ({ user }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="flex items-center gap-3 p-3 hover:bg-gray-800 cursor-pointer" onClick={() => {
            navigate(`/chat/${user._id}`);
            dispatch(addTargetUser(user));
        }}>
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold">
                <img className="w-10 h-10 rounded-full object-cover" src={user.photoUrl} alt="" />
            </div>

            <div className="flex-1 border-b border-gray-700 pb-2">
                <div className="flex justify-between">
                    <h3 className="font-medium">{`${user.firstName} ${user.lastName}`}</h3>
                </div>
                <p className="text-sm text-gray-400 truncate">click and start realchat</p>
            </div>
        </div>
    )
}

export default ChatList