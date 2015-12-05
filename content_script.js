(function(){
  var AmazonSellerCheckbox = function(){
    
    var complete = false;
    var checkboxSelectors = [
      '#displayOnDetailPage',
    ];
    
    function checkboxPrompt(e){
      if(!e.target.checked){
        return false;
      }
      var confirmClick = confirm("Are you sure you want this promotion posted on your product page?");
        if(confirmClick){
          e.target.setAttribute('checked', true);
        } else {
          e.target.click();
          e.target.setAttribute('checked', false);
      }
    }
    
    function uncheckTargetedCheckboxes(){
      checkboxSelectors.forEach(function(selector){
        var checkboxes = document.querySelectorAll(selector);
        if(checkboxes.length > 0){
           for(var i=0; i<checkboxes.length; i++){
            var checkbox = checkboxes[i];
            if(checkbox.checked){
              checkbox.setAttribute('checked', false);
              checkbox.click();
              checkbox.addEventListener("click", checkboxPrompt, true);
            }
          }
        }
      });
      complete = true;
    }
    
    var intervalCheckboxes = setTimeout(function(){
      if(!complete){
        uncheckTargetedCheckboxes();
      } else {
        clearInterval(intervalCheckboxes);
      }
    }, 500);
  };
  
  //init
  AmazonSellerCheckbox();
}());