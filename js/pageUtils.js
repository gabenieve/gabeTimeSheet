/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var loadTemplates = function (that){
    return $.get( 'templates/pageTemplates.template', function (data) {
          var templates = _.template(data, {  });
          if(undefined != templates){
            $('body #templates').remove();
            $('body').append('<div id="pageContainer2"></div>');
            var templatesHtml = $('#pageContainer2').html(templates);
            if(undefined != templatesHtml){
                //$('#pageContainer2').attr('id', 'pageContainer2');
                templatesHtml.attr('id', 'templates');
                $('#pageContainer2').append(templatesHtml);
            }
        }
    }, 'html');
};
var getFromTemplates = function(selector, self){
    console.log('Getting Home Template...');
        var template = _.template($(selector).html());
        console.log('Getting HTML inside Home Template...');
        $(self.el).html(template);
        console.log('got Home Template');
        return self;
};
