// import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";

// const Nav = () => {
//   return (
//     <nav className="flex justify-between bg-nav p-4">
//       <div className="flex items-center space-x-4">
//         <Link href="/">
//           <FontAwesomeIcon icon={faHome} className="icon" />
//         </Link>
//         <Link href="/TicketPage/new">
//           <FontAwesomeIcon icon={faTicket} className="icon" />
//         </Link>
//       </div>
//       <div>
//         <p className=" text-default-text">bunghezdaria21@stud.ase.ro</p>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-pink-accent to-rose-accent px-6 py-4 rounded-b-2xl shadow-md font-fancy">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-white hover:text-pink-light transition">
          <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
        </Link>
        <Link href="/TicketPage/new" className="text-white hover:text-pink-light transition">
          <FontAwesomeIcon icon={faTicket} className="w-5 h-5" />
        </Link>
      </div>
      <div>
        <p className="text-white text-sm font-medium">bunghezdaria21@stud.ase.ro</p>
      </div>
    </nav>
  );
};

export default Nav;
