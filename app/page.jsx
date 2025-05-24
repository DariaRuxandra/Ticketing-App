// import React from "react";
// import TicketCard from "./(components)/TicketCard";

// const getTickets = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/Tickets", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

// const Dashboard = async () => {
//   const data = await getTickets();

//   // Make sure we have tickets needed for production build.
//   if (!data?.tickets) {
//     return <p>No tickets.</p>;
//   }

//   const tickets = data.tickets;

//   const uniqueCategories = [
//     ...new Set(tickets?.map(({ category }) => category)),
//   ];

//   return (
//     <div className="p-5">
//       <div>
//         {tickets &&
//           uniqueCategories?.map((uniqueCategory, categoryIndex) => (
//             <div key={categoryIndex} className="mb-4">
//               <h2>{uniqueCategory}</h2>
//               <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
//                 {tickets
//                   .filter((ticket) => ticket.category === uniqueCategory)
//                   .map((filteredTicket, _index) => (
//                     <TicketCard
//                       id={_index}
//                       key={_index}
//                       ticket={filteredTicket}
//                     />
//                   ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tickets: ", error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  if (!data?.tickets) {
    return <p className="text-center text-pink-dark mt-10 font-fancy">No tickets found 💔</p>;
  }

  const tickets = data.tickets;
  const uniqueCategories = [...new Set(tickets.map(({ category }) => category))];

  return (
    <div className="p-6 font-fancy bg-white min-h-screen">
      {uniqueCategories.map((uniqueCategory, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-2xl text-pink-dark font-semibold mb-4 border-b-2 border-pink-accent inline-block pb-1">
            {uniqueCategory}
          </h2>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {tickets
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                  id={_index}
                  key={_index}
                  ticket={filteredTicket}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
