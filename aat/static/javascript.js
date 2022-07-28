function render(data){
    var html = '<div class="commentBox"> <div class="rightSide"><span>'+data.name+'</span><div class="date">'+data.title+'</div><p>'+data.body+'</p></div><div class="clear"></div></div>';
  
      $('#container').append(html);
  }
  
  
  
  $(document).ready(function(){
    var coment = [
      {"name": "Biliso musse", "title": "assessment 1", "body": "I don't understand first part of question"},
      {"name": "Jane", "title": "assessment 1", "body": "Where do i submit?"},
      {"name": "sarah", "title": "assessemnt 2", "body": "Has anybody completed question 2?"}
  
    ];
    for (var i=0;i<coment.length;i++){
        render(coment[i]);
  
    }
  $('#addComment').click(function(){
    var addObj = {
      "name": $('#name').val(),
      "title": $('#title').val(),
      "body": $('#bodyText').val()
    };
      
      coment.push(addObj);
      console.log(addObj);
      render(addObj);
  });
  
  });