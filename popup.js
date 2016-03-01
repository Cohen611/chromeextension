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
       cats.url = "https://www.reddit.com/r/" + subreddit + ".json";
     }
     $.ajax({
       method: 'GET',
       url: cats.url,
       success: function(cattitude) {
         console.log(cattitude);
          cats.addPostsToDOM(cattitude.data.url,{}, $('section.container'));

        }
     });
  },
   addPostsToDOM: function(catsurl, sanitizedData, $target) {
     $target.html('');
//   console.dirxml($target);//
var startledCats = "cats.url";
    var htmlStr = "";
    data.forEach(function(el) {
      htmlStr += startledCats (el);
    })
    $target.html(htmlStr);
  }
};
