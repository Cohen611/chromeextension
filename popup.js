$(document).ready(function() {
   cats.init();
 });

 var cats = {
 url: 'https://www.reddit.com/r/StartledCats.json',
   init: function() {
   cats.styling();
    cats.events();
   },
   styling: function() {
    cats.getRedditData();
   },
   events: function() {
     $('input[type="submit"]').on('click', function(event) {
      event.preventDefault();
       var forward = $('input').val();

});
},

   getRedditData: function(subreddit) {
     if(subreddit) {
       cats.url = "https://www.reddit.com/r/StartledCats" + subreddit + ".json"
     }
     $.ajax({
       method: 'GET',
       url: cats.url,
       success: function(cattitude) {
      cats.addPostsToDOM(cattitude.data.url, $('#gif'));

    }
     });
  },
   addPostsToDOM: function(catsurl, data, $target) {
   $target.html('');

 }
 };
