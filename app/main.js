
window.onload = function() {
  var onload = true;
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]){
          if(onload){
            var Model3D = document.getElementById("model-viewer");
            console.log(Model3D)
            model_src = Model3D.src;
            Model3D.remove(); 
            onload=false;
          }
            var Model2 = document.getElementById("dmodel-viewer")
            var model= URL.createObjectURL(this.files[0]);
            var model_viewertag='<model-viewer ar src="'+model+'" shadow-intensity="1" auto-rotate camera-controls alt=""></model-viewer>'
            Model2.innerHTML = model_viewertag;
        }
    })
    var dropbox=document.getElementById("dropBox")
    dropbox.addEventListener('ondrop',function(){
      e.stopPropagation();
        e.preventDefault();
    
        // Retrieve the dragged data by type
        var data = e.dataTransfer.getData("Text");
    
        // Append image to the drop box
        e.target.appendChild(document.getElementById(data));
      console.log("Hello")
    })
};


