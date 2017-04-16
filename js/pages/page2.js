/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.Page2View = Backbone.View.extend({

    render:function (eventName) {
        getFromTemplates('#templates #page2', this);
        return this;
    }
});

