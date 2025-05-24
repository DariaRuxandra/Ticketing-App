// import StatusDisplay from "./StatusDisplay";
// import PriorityDisplay from "./PriorityDisplay";
// import DeleteBlock from "./DeleteBlock";
// import ProgressDisplay from "./ProgressDisplay";
// import Link from "next/link";

// const TicketCard = ({ ticket }) => {
//   function formatTimestamp(timestamp) {
//     const options = {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     };

//     const date = new Date(timestamp);
//     const formattedDate = date.toLocaleString("en-US", options);

//     return formattedDate;
//   }

//   const createdDateTime = formatTimestamp(ticket.createdAt);

//   return (
//     <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
//       <div className="flex mb-3">
//         <PriorityDisplay priority={ticket.priority} />
//         <div className="ml-auto">
//           <DeleteBlock id={ticket._id} />
//         </div>
//       </div>
//       <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
//         <h4 className="mb-1">{ticket.title}</h4>
//         <hr className="h-px  border-0 bg-page mb-2 "></hr>
//         <p className="whitespace-pre-wrap">{ticket.description}</p>

//         <div className="flex-grow"></div>
//         <div className="flex mt-2">
//           <div className="flex flex-col">
//             <p className="text-xs  my-1">{createdDateTime}</p>
//             <ProgressDisplay progress={ticket.progress} />
//           </div>
//           <div className="ml-auto  flex items-end">
//             <StatusDisplay status={ticket.status} />
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default TicketCard;


import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(timestamp).toLocaleString("en-US", options);
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="flex flex-col bg-pink-light hover:bg-white transition-all duration-300 border border-pink-dark text-pink-dark rounded-2xl shadow-md p-4 m-3 font-fancy bg-white">
      <div className="flex items-center mb-2">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="text-lg font-semibold mb-1">{ticket.title}</h4>
        <hr className="h-px border-0 bg-pink-dark/30 mb-2" />

        <p className="whitespace-pre-wrap mb-3 text-sm">{ticket.description}</p>

        <div className="flex items-end mt-auto">
          <div className="flex flex-col">
            <p className="text-xs mb-1">{createdDateTime}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
