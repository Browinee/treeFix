window.onload = function() {
    var drawTree = new BuildFileTree();
    drawTree.render(data);
};


function BuildFileTree() {
    if(this instanceof BuildFileTree){
         
    }else{
      throw new Error("invoked without new");
    }
      
    
}       

// function BuildFileTree(data) {
//   let self = this;
//   this.data = data
//   this.render = function() { 
//     self.processTree()
//   }
// }

// BuildFileTree.prototype = {

//   data: null,
// }





BuildFileTree.prototype.render = function(data){
  
  var data    = data;
  var body     = document.getElementsByTagName("body")[0]; 

  var fragment = document.createDocumentFragment();
  fragment     = this.processTree(data,fragment);
  console.log(fragment);
  // console.log(fragment);
  // var a  = document.createElement("div");
  body.appendChild(fragment);
  
}

// var data = [
//   {name:1},
//   {name:2,data:[{name:"data2"}]},
//   {name:3,data:null},
//   {name:4,data:[]}
// ];



BuildFileTree.prototype.processTree = function(data){
  var tempData = data;
  var tempNode =document.createDocumentFragment();
      
  for(let i=0,len=tempData.length;i<len;i++){

      if(tempData[i].name){
        tempNode.appendChild(createNode(tempData[i].name));
        
      }
      if(tempData[i].data && tempData[i].data !== null){
         if(tempData[i].data.length>0){
          //console.log(tempNode.lastElementChild);

           tempNode.lastElementChild.appendChild(this.processTree(tempData[i].data));
         }
      }
  }
   
  
  return tempNode;

}


function createNode(data){
  let  ul   = document.createElement("ul");
  let  li   = document.createElement("li");  


  
  let  text = document.createTextNode(data);

  li.appendChild(text);
  
  
  ul.appendChild(li);
  if(!!text.data.indexOf("系統") && !!text.data.indexOf("本機")){
    ul.style.display = "none";
  }
  console.log(li.parentNode.children.length);
  li.addEventListener('click',function(){
     for(let i = 1,len=li.parentNode.children.length;i<len;i++){
        if(li.parentNode.children[1].style.display == 'block'){
        li.parentNode.children[1].style.display = 'none';
          
        }
        li.parentNode.children[1].style.display = 'block';
          
     }
  });
  return ul;
}



      
function traverse(ul) {
    if (!ul) return;
    
    var li = ul...... get li
    li.addEventListener(....)

    return 

    let xxx = traverse(ul.children)

}



                                                        
var data = [
        { name: "系統保留 (C:)", data: [
                        { name: "Program Files", data: [
                                { name: "Java", data: [
                                        { name: "jdk1.8.0_60", data: null },
                                        { name: "jre1.8.0_60", data: null }
                                        ] },
                                { name: "Sublime Text 2", data: [
                                        { name: "Pristine Packages", data: [
                                                { name: "ActionScript.sublime-package" },
                                                { name: "C#.sublime-package" },
                                                { name: "C++.sublime-package" },
                                                { name: "CSS.sublime-package" }
                                                ] },
                                        { name: "sublime_text.exe" },
                                        { name: "python26.zip" },
                                        { name: "python26.dll" }
                                        ] },
                                { name: "Microsoft.Net", data: [
                                        { name: "ADOBD.NET", data: [
                                                { name: "100", data: [
                                                        { name: "Microsoft.AnalysisServices.AdomdClient.dll" }
                                                        ] }
                                                ] }
                                ] },
                        { name: "Program Files (x86)", data: [
                                { name: "Adobe", data: [
                                        { name: "Acrobat Reader DC", data: [
                                                { name: "Esl", data: [
                                                        { name: "AiodLite.dll" }
                                                        ] },
                                                { name: "Reader", data: [
                                                        { name: "plug_ins", data: [
                                                                { name: "AcroForm", data: [
                                                                        { name: "PMP", data: [
                                                                                { name: "AdobePDF417.pmp" },
                                                                                { name: "DataMatrix.pmp" },
                                                                                { name: "QRCode.pmp" }
                                                                                ] },
                                                                        { name: "adobepdf.xdc" }
                                                                        ] },
                                                                 { name: "Multimedia.api" }
                                                                ] },
                                                        { name: "ACE.dll" },
                                                        { name: "WebResources", data: [
                                                                { name: "Resource0", data: [
                                                                        { name: "static", data: [
                                                                                { name: "css", data: [
                                                                                        { name: "app", data: [
                                                                                                { name: "dev", data: [
                                                                                                        { name: "cef" },
                                                                                                        { name: "libs" }
                                                                                                        ] }
                                                                                                ] },
                                                                                        { name: "main.css" }
                                                                                        ] }
                                                                                ] },
                                                                        { name: "index.html" }
                                                                        ] }
                                                                ] }
                                                        ] },
                                                { name: "ReadMe.htm" },
                                                { name: "ReadMeCT.htm" }
                                                ] }
                                        ] }
                                ] }
                        ] }
                ] },
        { name: "本機磁碟 (D:)", data: [] }
];
