var $dlgGoto=(function(){
  var init=function(){
    var DOM=''
      + '<div class="notepad-goto-dlg">'
      + '<div class="dialogbox">'
        + '<div class="titlebar">'
          + '<p class="title">转到指定行</p>'
          + '<span class="btn-close">×</span>'
        + '</div>'
        + '<div class="main">'
          + '<label for="">行号(L)</label><br>'
          + '<input type="text" class="line-num">'
          + '<input type="button" value="转到" class="btn-goto">'
          + '<input type="button" value="取消" class="btn-cancel">'
        + '</div>'
      + '</div>'
    + '</div>';

  
  var $dlg=$(DOM),
    $btnCancel=$dlg.find('.btn-cancel'),
    $btnClose=$dlg.find('.btn-close')
  $('body').append($dlg);
  $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
  
  $btnCancel.click(function(){$dlg.remove();});
  $btnClose.click(function(){$dlg.remove();});

  }

  return {init:init}
}());


