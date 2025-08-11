import { useSelector } from "react-redux"

export const Navbar = () => {

  const user = useSelector((state) => state.user);

  return (
    <div className="bg-base-300 sticky top-0 z-10 shadow-md">
      <div className="navbar max-w-[1100px] mx-auto px-4 md:px-10">

        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-2xl font-bold tracking-wide">
            Messenger
          </a>
        </div>

        {user && <div className="flex items-center gap-3">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  className="object-cover"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow-lg bg-base-100 rounded-box"
            >
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>}
      </div>
    </div>

  )
}
