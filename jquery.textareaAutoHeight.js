$.fn.textareaAutoHeight = function(){
  
  var $elm = this,
      $clonedField = $elm.clone(),
      originalFieldHeight = $elm.height();

  $elm.height(originalFieldHeight);
  
  $clonedField.css({left: "-9999px",position: "absolute"});
  $clonedField.appendTo("body");
  
  $elm.keydown(function(e){
    if(e.which == 8){
      var currentVal = $(this).val(),
          currentHeight = $clonedField[0].scrollHeight,
          newVal = null;
      
      var domNode = $(this)[0];

      var selection = $(this).getSelection();
      if(selection.length > 0){
        newVal = currentVal.substr(0, selection.start) + currentVal.substr(selection.end, currentVal.length);
      } else {
        newVal = currentVal.substr(0, selection.start - 1) + currentVal.substr(selection.end, currentVal.length);
      }
      $clonedField.val(newVal);
      
      var newHeight = $clonedField[0].scrollHeight;
      
      if(newHeight < currentHeight){

        $(this).height(newHeight);
        $(this).val(newVal);

        var selectionStart = selection.start,
            selectionEnd = selection.end;

        if(selectionStart != selectionEnd){
          selectionEnd = selectionStart;
        } else {
          selectionStart -= 1;
          selectionEnd -= 1;
        }

        $(this).prop("selectionStart", selectionStart);
        $(this).prop("selectionEnd", selectionEnd);

        return false;
      }
    }
    
  });
  
  $elm.keypress(function(e){
    var charPressed = String.fromCharCode(e.which),
        currentValue = $(this).val(),
        newValue = currentValue + charPressed,
        currentHeight = $clonedField[0].scrollHeight;
    
    $clonedField.val(newValue);
    
    var newHeight = $clonedField[0].scrollHeight;
    
    if(newHeight > currentHeight){
      $(this).height($clonedField[0].scrollHeight);
    }
    
    $(this).val(newValue);
    
    return false;
  });
};
