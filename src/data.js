const sampleData = [
    {
      id: 1,
      conversation: [
        { sender: "user", text: "Hello, AI!" },
        { sender: "ai", text: "Hello! How can I assist you?" }
      ],
      feedback: {
        thumbsUp: true,
        rating: 4,
        comment: "Good response!"
      }
    },
    {
      id: 2,
      conversation: [
        { sender: "user", text: "What is the capital of France?" },
        { sender: "ai", text: "The capital of France is Paris." }
      ],
      feedback: {
        thumbsUp: false,
        rating: 3,
        comment: "Could be more detailed."
      }
    }
  ];
  
  export default sampleData;
  