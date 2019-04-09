var $timerBtn=(function(){
  
  var n=6;
  var init=function(){
     var $container=$('.main');
       /* template string 模板串 或者下边的DOM操作*/
     var DOM='<input class="timer-button" type="button" value="同意(6s)" disabled>';
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
          $btnAgree.removeAttr('disabled');                                                                                              $btnAgree.val('同意');
 
        }else{
          $btnAgree.val('同意('+ n +'s)');                                             
        }
                                                                 
                                                         
     },1000);
      $btnAgree.click(function(){
         alert('SPA!10-timer-button task!');
                                                       
    });
  }

  return {init:init};
}());


