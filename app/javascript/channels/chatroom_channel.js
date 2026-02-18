import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("Connected to ChatroomChannel");
  },

  disconnected() {
    console.log("Disconnected from ChatroomChannel");
  },

  received(data) {
    const messageStream = document.getElementById('message-stream');
    if (messageStream && data.message) {
      messageStream.insertAdjacentHTML('beforeend', data.message);
      // Auto-scroll to bottom
      const chatbox = messageStream.closest('.chatbox');
      if (chatbox) {
        chatbox.scrollTop = chatbox.scrollHeight;
      }
    } else {
      console.error("Message stream not found or no message data");
    }
  }
});
