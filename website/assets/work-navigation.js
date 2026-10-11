
(function(){
 document.querySelectorAll('.work-dropdown').forEach(function(group){
  var button=group.querySelector('.work-toggle'),panel=group.querySelector('.work-projects');
  function set(open){button.setAttribute('aria-expanded',String(open));panel.hidden=!open;}
  button.addEventListener('click',function(){set(panel.hidden);});
  button.addEventListener('keydown',function(e){if(e.key==='ArrowDown'){e.preventDefault();set(true);panel.querySelector('a').focus();}});
  group.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){e.preventDefault();set(false);button.focus();}});
  document.addEventListener('click',function(e){if(!group.contains(e.target))set(false);});
  group.addEventListener('focusout',function(){setTimeout(function(){if(!group.contains(document.activeElement))set(false);},0);});
  panel.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  window.addEventListener('scroll',function(){if(!panel.hidden){if(panel.contains(document.activeElement))button.focus({preventScroll:true});set(false);}},{passive:true});
 });
})();
