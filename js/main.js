
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "page1":"page1",
        "page2":"page2"
        //"*" : "home"
    },
    
    initialize:function () {
        // Handle back button throughout the application
        
        $('.back').on('click', function(event) {
            window.history.back();
            return false;
        });
        loadTemplates(this);
        
        this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.changePage(new HomeView());
    },

    page1:function () {
        console.log('#page1');
        this.changePage(new Page1View());
    },

    page2:function () {
        console.log('#page2');
        this.changePage(new Page2View());
    },

    changePage:function (page) {
        var that = this;
        $('#pageContainer').children().remove();
        $.when(loadTemplates(that)).then(function(data, textStatus, jqXHR){
            $(page.el).attr('data-role', 'page');
            console.log('#home1');
            page.render();
            console.log('#home2');
            $('#pageContainer').append($(page.el));
            console.log('#home3');
    //        $('#pageContainer').append($(page.el));
    //                
    //        var transition = 'none';
    //        // We don't want to slide the first page
    //        if (this.firstPage) {
    //            transition = 'none';
    //            this.firstPage = false;
    //        }

            //$.mobile.changePage($(page.el), {changeHash:false, transition: transition});
        });
    }

});

$(document).ready(function () {
    console.log('document ready');
    
    app = new AppRouter();
    //app.loadTemplates();
    Backbone.history.start();
});