// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

const scrollToBottom = function() {
  const chatbox = document.querySelector('.chatbox');
  if (chatbox) {
    chatbox.scrollTop = chatbox.scrollHeight;
  }
};

// Initialize Semantic UI components
document.addEventListener('turbo:load', function() {
  if (typeof $ !== 'undefined') {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
  }
  scrollToBottom();
});


