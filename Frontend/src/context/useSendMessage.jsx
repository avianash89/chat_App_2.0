import React, { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  
  const sendMessages = async (message) => {
    if (!message || !selectedConversation?._id) {
      console.log("Message or selected conversation is missing");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessages([...messages, res.data]); // Assuming res.data is the new message
      setLoading(false);
    } catch (error) {
      console.log("Error in send messages", error);
      setLoading(false);
    }
  };

  return { loading, sendMessages };
}

export default useSendMessage;


// import React, { useState } from "react";
// import useConversation from "../zustand/useConversation.js";
// import axios from "axios";

// function useSendMessage() {
//   const [loading, setLoading] = useState(false);
//   const { message, setMessage, selectedConversation } = useConversation();
//   const sendMessages = async (message) => {
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         `/api/message/send/${selectedConversation._id}`, {message}
//       );
//       setMessage([...message, res.data]);
//       setLoading(false);
//     } catch (error) {
//       console.log("Error in send messages", error);
//       setLoading(false);
//     }
//   };
//   return {loading, sendMessages}
// }

// export default useSendMessage;


