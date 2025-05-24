// // // "use client";
// // // import { useRouter } from "next/navigation";
// // // import React, { useState } from "react";

// // // const EditTicketForm = ({ ticket }) => {
// // //   const EDITMODE = ticket._id === "new" ? false : true;
// // //   const router = useRouter();
// // //   const startingTicketData = {
// // //     title: "",
// // //     description: "",
// // //     priority: 1,
// // //     progress: 0,
// // //     status: "not started",
// // //     category: "Hardware Problem",
// // //   };

// // //   if (EDITMODE) {
// // //     startingTicketData["title"] = ticket.title;
// // //     startingTicketData["description"] = ticket.description;
// // //     startingTicketData["priority"] = ticket.priority;
// // //     startingTicketData["progress"] = ticket.progress;
// // //     startingTicketData["status"] = ticket.status;
// // //     startingTicketData["category"] = ticket.category;
// // //   }

// // //   const [formData, setFormData] = useState(startingTicketData);

// // //   const handleChange = (e) => {
// // //     const value = e.target.value;
// // //     const name = e.target.name;

// // //     setFormData((preState) => ({
// // //       ...preState,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (EDITMODE) {
// // //       const res = await fetch(`/api/Tickets/${ticket._id}`, {
// // //         method: "PUT",
// // //         headers: {
// // //           "Content-type": "application/json",
// // //         },
// // //         body: JSON.stringify({ formData }),
// // //       });
// // //       if (!res.ok) {
// // //         throw new Error("Failed to update ticket");
// // //       }
// // //     } else {
// // //       const res = await fetch("/api/Tickets", {
// // //         method: "POST",
// // //         body: JSON.stringify({ formData }),
// // //         //@ts-ignore
// // //         "Content-Type": "application/json",
// // //       });

// // //       if (!res.ok) {
// // //         throw new Error("Failed to create ticket");
// // //       }
// // //     }

// // //     router.refresh();
// // //     router.push("/");
// // //   };

// // //   const categories = [
// // //     "Hardware Problem",
// // //     "Software Problem",
// // //     "Application Deveopment",
// // //     "Project",
// // //   ];

// // //   return (
// // //     <div className=" flex justify-center">
// // //       <form
// // //         onSubmit={handleSubmit}
// // //         method="post"
// // //         className="flex flex-col gap-3 w-1/2"
// // //       >
// // //         <h3>{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3>
// // //         <label>Title</label>
// // //         <input
// // //           id="title"
// // //           name="title"
// // //           type="text"
// // //           onChange={handleChange}
// // //           required={true}
// // //           value={formData.title}
// // //         />
// // //         <label>Description</label>
// // //         <textarea
// // //           id="description"
// // //           name="description"
// // //           onChange={handleChange}
// // //           required={true}
// // //           value={formData.description}
// // //           rows="5"
// // //         />
// // //         <label>Category</label>
// // //         <select
// // //           name="category"
// // //           value={formData.category}
// // //           onChange={handleChange}
// // //         >
// // //           {categories?.map((category, _index) => (
// // //             <option key={_index} value={category}>
// // //               {category}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <label>Priority</label>
// // //         <div>
// // //           <input
// // //             id="priority-1"
// // //             name="priority"
// // //             type="radio"
// // //             onChange={handleChange}
// // //             value={1}
// // //             checked={formData.priority == 1}
// // //           />
// // //           <label>1</label>
// // //           <input
// // //             id="priority-2"
// // //             name="priority"
// // //             type="radio"
// // //             onChange={handleChange}
// // //             value={2}
// // //             checked={formData.priority == 2}
// // //           />
// // //           <label>2</label>
// // //           <input
// // //             id="priority-3"
// // //             name="priority"
// // //             type="radio"
// // //             onChange={handleChange}
// // //             value={3}
// // //             checked={formData.priority == 3}
// // //           />
// // //           <label>3</label>
// // //           <input
// // //             id="priority-4"
// // //             name="priority"
// // //             type="radio"
// // //             onChange={handleChange}
// // //             value={4}
// // //             checked={formData.priority == 4}
// // //           />
// // //           <label>4</label>
// // //           <input
// // //             id="priority-5"
// // //             name="priority"
// // //             type="radio"
// // //             onChange={handleChange}
// // //             value={5}
// // //             checked={formData.priority == 5}
// // //           />
// // //           <label>5</label>
// // //         </div>
// // //         <label>Progress</label>
// // //         <input
// // //           type="range"
// // //           id="progress"
// // //           name="progress"
// // //           value={formData.progress}
// // //           min="0"
// // //           max="100"
// // //           onChange={handleChange}
// // //         />
// // //         <label>Status</label>
// // //         <select name="status" value={formData.status} onChange={handleChange}>
// // //           <option value="not started">Not Started</option>
// // //           <option value="started">Started</option>
// // //           <option value="done">Done</option>
// // //         </select>
// // //         <input
// // //           type="submit"
// // //           className="btn max-w-xs"
// // //           value={EDITMODE ? "Update Ticket" : "Create Ticket"}
// // //         />
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default EditTicketForm;


// // "use client";
// // import { useRouter } from "next/navigation";
// // import React, { useState } from "react";

// // const EditTicketForm = ({ ticket }) => {
// //   const EDITMODE = ticket._id !== "new";
// //   const router = useRouter();

// //   const startingTicketData = {
// //     title: "",
// //     description: "",
// //     priority: 1,
// //     progress: 0,
// //     status: "not started",
// //     category: "Hardware Problem",
// //     ...(EDITMODE && {
// //       title: ticket.title,
// //       description: ticket.description,
// //       priority: ticket.priority,
// //       progress: ticket.progress,
// //       status: ticket.status,
// //       category: ticket.category,
// //     }),
// //   };

// //   const [formData, setFormData] = useState(startingTicketData);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const method = EDITMODE ? "PUT" : "POST";
// //     const url = EDITMODE ? `/api/Tickets/${ticket._id}` : "/api/Tickets";

// //     const res = await fetch(url, {
// //       method,
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ formData }),
// //     });

// //     if (!res.ok) {
// //       throw new Error("Failed to save ticket");
// //     }

// //     router.refresh();
// //     router.push("/");
// //   };

// //   const categories = [
// //     "Hardware Problem",
// //     "Software Problem",
// //     "Application Development",
// //     "Project",
// //   ];

// //   return (
// //     <div className="flex justify-center py-10 bg-white font-fancy">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-pink-light text-pink-dark w-full max-w-xl p-6 rounded-3xl shadow-md flex flex-col gap-4"
// //       >
// //         <h3 className="text-xl font-bold text-center">
// //           {EDITMODE ? "Update Your Ticket 💼" : "Create a New Ticket 🎟️"}
// //         </h3>

// //         <label className="text-sm font-semibold">Title</label>
// //         <input
// //           name="title"
// //           type="text"
// //           value={formData.title}
// //           onChange={handleChange}
// //           required
// //           className="p-2 rounded-xl border border-pink-dark/30 focus:outline-pink-accent bg-white text-pink-dark focus:outline-pink-accent"
// //         />

// //         <label className="text-sm font-semibold">Description</label>
// //         <textarea
// //           name="description"
// //           rows="4"
// //           value={formData.description}
// //           onChange={handleChange}
// //           required
// //           className="p-2 rounded-xl border border-pink-dark/30 focus:outline-pink-accent bg-white text-pink-dark focus:outline-pink-accent"
// //         />

// //         <label className="text-sm font-semibold">Category</label>
// //         <select
// //           name="category"
// //           value={formData.category}
// //           onChange={handleChange}
// //           className="p-2 rounded-xl border border-pink-dark/30 focus:outline-pink-accent bg-white text-pink-dark focus:outline-pink-accent"
// //         >
// //           {categories.map((category, i) => (
// //             <option key={i} value={category}>
// //               {category}
// //             </option>
// //           ))}
// //         </select>

// //         <label className="text-sm font-semibold">Priority</label>
// //         <div className="flex justify-between px-2">
// //           {[1, 2, 3, 4, 5].map((val) => (
// //             <label key={val} className="flex flex-col items-center text-xs">
// //               <input
// //                 type="radio"
// //                 name="priority"
// //                 value={val}
// //                 checked={formData.priority == val}
// //                 onChange={handleChange}
// //                 className="accent-pink-accent"
// //               />
// //               {val}
// //             </label>
// //           ))}
// //         </div>

// //         <label className="text-sm font-semibold">Progress: {formData.progress}%</label>
// //         <input
// //           type="range"
// //           name="progress"
// //           value={formData.progress}
// //           onChange={handleChange}
// //           min="0"
// //           max="100"
// //           className="accent-pink-accent"
// //         />

// //         <label className="text-sm font-semibold">Status</label>
// //         <select
// //           name="status"
// //           value={formData.status}
// //           onChange={handleChange}
// //           className="p-2 rounded-xl border border-pink-dark/30 focus:outline-pink-accent bg-white text-pink-dark focus:outline-pink-accent"
// //         >
// //           <option value="not started">Not Started</option>
// //           <option value="started">Started</option>
// //           <option value="done">Done</option>
// //         </select>

// //         <input
// //           type="submit"
// //           value={EDITMODE ? "Update Ticket" : "Create Ticket"}
// //           className="mt-4 bg-pink-accent hover:bg-rose-accent text-white font-semibold py-2 px-4 rounded-xl transition"
// //         />
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditTicketForm;


// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const EditTicketForm = ({ ticket }) => {
//   const EDITMODE = ticket._id !== "new";
//   const router = useRouter();

//   const startingTicketData = {
//     title: "",
//     description: "",
//     priority: 1,
//     progress: 0,
//     status: "not started",
//     category: "Hardware Problem",
//     ...(EDITMODE && {
//       title: ticket.title,
//       description: ticket.description,
//       priority: ticket.priority,
//       progress: ticket.progress,
//       status: ticket.status,
//       category: ticket.category,
//     }),
//   };

//   const [formData, setFormData] = useState(startingTicketData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const method = EDITMODE ? "PUT" : "POST";
//     const url = EDITMODE ? `/api/Tickets/${ticket._id}` : "/api/Tickets";

//     const res = await fetch(url, {
//       method,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ formData }),
//     });

//     if (!res.ok) {
//       throw new Error("Failed to save ticket");
//     }

//     router.refresh();
//     router.push("/");
//   };

//   const categories = [
//     "Hardware Problem",
//     "Software Problem",
//     "Application Development",
//     "Project",
//   ];

//   return (
//     <div className="flex justify-center py-12 bg-gray-50 font-sans min-h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white text-gray-900 w-full max-w-lg p-8 rounded-2xl shadow-lg flex flex-col gap-6"
//       >
//         <h3 className="text-2xl font-semibold text-indigo-700 text-center">
//           {EDITMODE ? "Update Your Ticket" : "Create a New Ticket"}
//         </h3>

//         <label className="text-sm font-medium text-gray-700">Title</label>
//         <input
//           name="title"
//           type="text"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none bg-white"
//           placeholder="Enter ticket title"
//         />

//         <label className="text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           name="description"
//           rows="4"
//           value={formData.description}
//           onChange={handleChange}
//           required
//           className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none resize-none bg-white"
//           placeholder="Describe the issue or request"
//         />

//         <label className="text-sm font-medium text-gray-700">Category</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none bg-white"
//         >
//           {categories.map((category, i) => (
//             <option key={i} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>

//         <label className="text-sm font-medium text-gray-700">Priority</label>
//         <div className="flex justify-between max-w-xs px-2">
//           {[1, 2, 3, 4, 5].map((val) => (
//             <label key={val} className="flex flex-col items-center text-xs cursor-pointer">
//               <input
//                 type="radio"
//                 name="priority"
//                 value={val}
//                 checked={formData.priority == val}
//                 onChange={handleChange}
//                 className="accent-indigo-600 cursor-pointer"
//               />
//               <span className="mt-1 font-semibold text-indigo-700">{val}</span>
//             </label>
//           ))}
//         </div>

//         <label className="text-sm font-medium text-gray-700">
//           Progress: <span className="font-semibold">{formData.progress}%</span>
//         </label>
//         <input
//           type="range"
//           name="progress"
//           value={formData.progress}
//           onChange={handleChange}
//           min="0"
//           max="100"
//           className="accent-indigo-600 w-full"
//         />

//         <label className="text-sm font-medium text-gray-700">Status</label>
//         <select
//           name="status"
//           value={formData.status}
//           onChange={handleChange}
//           className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none bg-white"
//         >
//           <option value="not started">Not Started</option>
//           <option value="started">Started</option>
//           <option value="done">Done</option>
//         </select>

//         <input
//           type="submit"
//           value={EDITMODE ? "Update Ticket" : "Create Ticket"}
//           className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md shadow-md transition duration-300 cursor-pointer bg-pink-accent"
//         />
//       </form>
//     </div>
//   );
// };

// export default EditTicketForm;


"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id !== "new";
  const router = useRouter();

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
    ...(EDITMODE && {
      title: ticket.title,
      description: ticket.description,
      priority: ticket.priority,
      progress: ticket.progress,
      status: ticket.status,
      category: ticket.category,
    }),
  };

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = EDITMODE ? "PUT" : "POST";
    const url = EDITMODE ? `/api/Tickets/${ticket._id}` : "/api/Tickets";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      throw new Error("Failed to save ticket");
    }

    router.refresh();
    router.push("/");
  };

  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Development",
    "Project",
  ];

  return (
    <div className="flex justify-center py-12 bg-gray-50 font-sans min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-900 w-full max-w-lg p-8 rounded-2xl shadow-lg flex flex-col gap-6"
      >
        {/* Header - pink text */}
        <h3 className="text-2xl font-semibold text-pink-600 text-center">
          {EDITMODE ? "Update Your Ticket" : "Create a New Ticket"}
        </h3>

        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none bg-white"
          placeholder="Enter ticket title"
        />

        <label className="text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
          className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none resize-none bg-white"
          placeholder="Describe the issue or request"
        />

        <label className="text-sm font-medium text-gray-700">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none bg-white"
        >
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label className="text-sm font-medium text-gray-700">Priority</label>
        <div className="flex justify-between max-w-xs px-2">
          {[1, 2, 3, 4, 5].map((val) => (
            <label
              key={val}
              className="flex flex-col items-center text-xs cursor-pointer"
            >
              <input
                type="radio"
                name="priority"
                value={val}
                checked={formData.priority == val}
                onChange={handleChange}
                className="accent-indigo-600 cursor-pointer"
              />
              <span className="mt-1 font-semibold text-indigo-700">{val}</span>
            </label>
          ))}
        </div>

        <label className="text-sm font-medium text-gray-700">
          Progress: <span className="font-semibold">{formData.progress}%</span>
        </label>
        {/* Progress bar with pink accent */}
        <input
          type="range"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          min="0"
          max="100"
          className="accent-pink-600 w-full"
        />

        <label className="text-sm font-medium text-gray-700">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="p-3 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 outline-none bg-white"
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        {/* Submit button with pink background */}
        <input
          type="submit"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
          className="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-md shadow-md transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default EditTicketForm;
