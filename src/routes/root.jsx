import { Link, Outlet } from "react-router-dom";

// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

const Root = () => {
    return (
        <>
        <div id="sidebar" className="text-white">
        <h1 >React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/contacts/1`} className="text-white">Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`} className="text-white">Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
         <Outlet />
      </div>
        </>
    );
};

export default Root;