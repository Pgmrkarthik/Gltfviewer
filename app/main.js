
window.onload = function(){
  document.getElementById('fileInput').addEventListener('change', function () {
    if (this.files && this.files[0]) {
      if ( document.getElementById("model-viewer")) {
        document.getElementById("model-viewer").remove();
      }
      var modelNameTag =document.getElementById("model-name");
      var modelName = this.files[0].name;
      modelName = modelName.substring(0,modelName.indexOf('.'))
      modelNameTag.innerText = modelName
      var Model2 = document.getElementById("dmodel-viewer")
      var model = URL.createObjectURL(this.files[0]);
      var model_viewertag = '<model-viewer ar src="' + model + '" shadow-intensity="1" auto-rotate camera-controls alt=""></model-viewer>'
      Model2.innerHTML = model_viewertag;
    }
  })
  document.addEventListener('ondrop', function (event) {
   var droppedFiles = event.target.files || event.dataTransfer.files;
    if (droppedFiles && droppedFiles[0]) {
      if ( document.getElementById("model-viewer")) {
        document.getElementById("model-viewer").remove();
      }
      var modelNameTag =document.getElementById("model-name");
      var modelName = files[0].name;
      modelName = modelName.substring(0,modelName.indexOf('.'))
      modelNameTag.innerText = modelName
      var Model2 = document.getElementById("dmodel-viewer")
      var model = URL.createObjectURL(droppedFiles[0]);
      var model_viewertag = '<model-viewer ar src="' + model + '" shadow-intensity="1" auto-rotate camera-controls alt=""></model-viewer>'
      Model2.innerHTML = model_viewertag;
    }
  })
}
