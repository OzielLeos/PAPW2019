/* show file value after file select */

$('.custom-file-input').on('change',function(){
    var fileName = document.getElementById("exampleInputFile").files[0].name;
    // $(this).next('.form-control-file').addClass("selected").html(fileName);
  //  $('.custom-file-label').html(fileName);
    //$('#spanFileName').text("fileName");
    ChangeSpan("aaaa");
  })

  $(function(){
  //  $('#spanFileName').text('<<');
  ChangeSpan("cccc");
 });

 function ChangeSpan(e) {
    $('#spanFileName').text(e);
 }
 
 $('input[type="file"]').change(function(e){
    var fileName = e.target.files[0].name;
    $('.custom-file-label').html(fileName);
});

// I have used following for the same:

// <script type="application/javascript">
//     $('input[type="file"]').change(function(e){
//         var fileName = e.target.files[0].name;
//         $('.custom-file-label').html(fileName);
//     });
// </script>