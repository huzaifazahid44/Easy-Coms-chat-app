// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

// Initialize Semantic UI components
document.addEventListener('turbo:load', function() {
  if (typeof $ !== 'undefined') {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
      $(this).closest('.message').transition('fade');
    });
  }
  
  // Clear form after successful message submission
  const form = document.querySelector('.ui.reply.form');
  if (form) {
    form.addEventListener('ajax:success', function() {
      form.reset();
    });
  }
});
