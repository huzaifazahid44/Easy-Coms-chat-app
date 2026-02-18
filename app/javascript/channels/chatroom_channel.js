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
    messageStream?.insertAdjacentHTML('beforeend', data.message);
  }
});
