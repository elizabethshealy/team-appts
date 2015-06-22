var app = {};

  var Router = Backbone.Router.extend({
  routes:{
         '':'home',
         'new':'new',
         'detail':'detail',
         'edit/:id':'edit',
       },

       home: function(){
         //myHomeFunction()
         $('.main-content').html($('#create-appt').html());
        },

        new: function(){
          $('.main-content').html($('#create-appt').html());
          $('.new-appt').on('submit', function (e) {
            e.preventDefault();

            var appt = {};

            appt.title = $('.title').val();
            appt.date = $('.date').val();
            appt.time = $('.time').val();
            appt.street = $('.street').val();
            appt.city = $('.city').val();
            appt.state = $('.state').val();

            console.log(appt);
          })
        },

        detail: function(){
          $('.main-content').html($('#detail').html());


        },

        edit: function(id){
                $('.main-content').html($('#create-appt').html());
                // alert("Put templates Here??" + id);
              },
        });


            var app_router = new Router();
            // app_router.on("route:new", function(){
            //   alert("Put templates Here??");
            // });

            Backbone.history.start();
