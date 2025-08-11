
const ChatList = ({ user }) => {
    return (
        <div className="flex items-center gap-3 p-3 hover:bg-gray-800 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-lg font-bold">
                <img className="rounded-full" src={user.photoUrl} alt="" />
            </div>

            <div className="flex-1 border-b border-gray-700 pb-2">
                <div className="flex justify-between">
                    <h3 className="font-medium">{`${user.firstName} ${user.lastName}`}</h3>
                    <span className="text-xs text-gray-400">{ }</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{ }</p>
            </div>
        </div>
    )
}

export default ChatList