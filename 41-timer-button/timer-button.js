var $timerBtn=(function(){
  
  var n=6;
  var cfg={
    container:'',
    title:'确定',
    time:9,
    enable:false
  };
  var n=cfg.time;
  var init=function(conf){
     $.extend(cfg.conf);
     var $container=$('cfg.container');
       /* template string 模板串 或者下边的DOM操作*/
     var DOM='<input class="timer-button" type="button" value="'+cfg.title+'('+cfg.time+'s)'" disabled>';
     $container.html(DOM);
                             /*
                              var $timerBtn=$('<input type="button" value="同意(6s)" disabled>')
                             //$timerBtn.appendTo($container);
                              $container.append($timerBtn);
                             */

      var $btnAgree=$container.find('.timer-button');
      var timer=window.setInterval(function(){
        n--;
        if(n === 0){
          window.clearInterval(timer);
          $btnAgree.removeAttr('disabled');                                                                                              $btnAgree.val(cfg.title);
 
        }else{
          $btnAgree.val(cfg.title+'('+ n +'s)');                                             
        }
                                                                 
                                                         
     },1000);
      $btnAgree.click(function(){
         alert('SPA!10-timer-button task!');
                                                       
    });
  }

  return {init:init};
}());


