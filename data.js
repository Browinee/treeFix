window.onload = function() {
    var drawTree = new BuildFileTree();
    drawTree.render(data);

    
    let body= document.getElementsByTagName('body')[0];
    let ulList = body.children[1];

    addEvent(ulList);
};


function BuildFileTree() {
    if(this instanceof BuildFileTree){
         
    }else{
      throw new Error("invoked without new");
    }
      
    
}       


      
// function traverse(ul) {
//     if (!ul) return;

//     var li = ul...... get li
//     li.addEventListener(....)

//     return 

//     let xxx = traverse(ul.children)

// }




 function addEvent(ulList){
    
      
    let li = ulList.firstChild;
   // console.log(li);
    //console.log(li);
   //console.log(li.children);
    if(li.children){

       li.style.cursor="pointer";
       li.addEventListener('click',function(event){
     
        for(let i=0,len=li.children.length;i<len;i++){

          if(li.children[i].style.display == "none"){
            
             li.children[i].style.display = "block";
          }else{
               li.children[i].style.display = "none";
          }
          event.stopPropagation();
      console.log(li.children[i]);
          addEvent(li.children[i]);
        }
      
 
      

        });

    }
   
 
     
  




 }
// function addEvent(ulList){
  
    
//   for(let i=0,len=ulList.length;i<len;i++){
//       let list    = ulList[i].getElementsByTagName('li');
//       let sibling = list.nextSibling;
//         if(sibling){
//             list.addEventListener('click',function(){
//                 if(sibling.style.display = "none"){
//                   sibling.style.display = "block";
//                 }else{
//                   sibling.style.display = "none";
//                 }
//                 addEvent(sibling.nextSibling);
//             });
            
//         }
     

//   };

//         if(ulList[i].firstChild.nextSibling){
//             ulList[i].firstChild.addEventListener('click',function(){
//             if(ulList[i].firstChild.nextSibling.style.display=="none"){
//                ulList[i].firstChild.nextSibling.style.display="block";

//             }else{
//               ulList[i].firstChild.nextSibling.style.display="none";
//              }
//               addEvent(ulList[i].firstChild.nextSibling);
//         }
     
        
//      })
//   }

// }


BuildFileTree.prototype.render = function(data){
  var data    = data;
  var body     = document.getElementsByTagName("body")[0]; 
  var fragment = document.createDocumentFragment();
  fragment     = this.processTree(data,fragment);
  //console.log(fragment);
  body.appendChild(fragment);
  
}

// var data = [
//   {name:1},
//   {name:2,data:[{name:"data2"}.{}]},
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
          
           tempNode.lastElementChild.children[0].appendChild(this.processTree(tempData[i].data));
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
 
  //一開始生成node時該隱藏的先隱藏
  ul.appendChild(li);
  if(!!text.data.indexOf("系統") && !!text.data.indexOf("本機")){
    ul.style.display = "none";
  }
 
  // li.addEventListener('click',function(){
  //    for(let i = 1,len=li.parentNode.children.length;i<len;i++){
  //       if(li.parentNode.children[1].style.display == 'block'){
  //       li.parentNode.children[1].style.display = 'none';
          
  //       }
  //       li.parentNode.children[1].style.display = 'block';
          
  //    }
  // });
  return ul;
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
                                ] }
                        ]},
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
                        ] },
              //  ] },
        { name: "本機磁碟 (D:)", data: [] }
];
