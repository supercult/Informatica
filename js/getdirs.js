$(document).ready(function() {
  getFolders("");
});

function getFolders (query) {
  $('.folder-list').html('');
  $.ajax({type: 'GET', url: '../php/getnames.php?fs=' + query.toString(), success: function (result) {
    var obj = JSON.parse(result);
    var exclude = [];
    $.getJSON("../js/exclude.json", function(data) {
      exclude = data;
      var counter = 0;
      for (var i = 0; i < Object.keys(result).length; i++) {
        var found = $.inArray(obj[i], exclude) > -1;
        if (obj[i] != null && !found){
          $('.folder-list').append('<li class="mdl-list__item"><span class="mdl-list__item-primary-content"><i class="material-icons mdl-list__item-icon">folder</i><a href="' + obj[i] + '">' + obj[i].replace("../", "") + '</a></span></li>');
          counter++;
        }
      }
      if (counter == 0) {
        $('.folder-list').append('<li class="mdl-list__item"><span class="mdl-list__item-primary-content">' + $('#zoekbox').val() + ' leverde geen zoek resultaten op.</span></li>');
      }
    });
  }});
}

$('#zoekbox').keyup(function() {
  getFolders($('#zoekbox').val());
});