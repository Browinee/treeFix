window.onload = function() {
        
        var drawTree   = new BuildFileTree();
        drawTree.render(data);


      

};



function addClick(){
  
   let ulist = document.getElementsByTagName('ul');
   
   

  //一開始將所有項隱藏
  for(let i = 0;i<ulist.length;i++){
        if(ulist[i].children.length>1){
          for(let k=1;k<ulist[i].children.length;k++){
                ulist[i].children[k].style.display="none";

          }      
        }
  }
  //加入click事件
  for(let i = 0;i<ulist.length;i++){

      if(ulist[i].children.length>1){
         ulist[i].children[0].style.cursor = "pointer";
         ulist[i].children[0].addEventListener('click',function(){
                
               for(let k=1,len=ulist[i].children.length;k<len;k++){
                   if( ulist[i].children[k].style.display=="none"){
                
                        ulist[i].children[k].style.display = 'block';
                       
                   }else{

                        ulist[i].children[k].style.display = 'none';
                     
                   
                   }

                        
               } 
         });
      }

  }

}





function BuildFileTree(data) {
        var tree="";
        for(let i =0, len=data.length;i<len;i++){

             tree += "<ul class='tree-folder'>";
             
             for(let key in data[i]){
                 let tempData=data[i];
                if(tempData[key]===null){break;}
                if(key==="data" && tempData[key]!== null){ 
                  if(tempData[key].length ===0){
                    break;
                  
                  }
                  tree+=build_file_tree(tempData[key]);
                }else{
                   //tree+="<li class='i'>"+tempData[key]+"</li>";  
                   tree+=`<li >${tempData[key]}</li>`;
                }

                

             }   
             tree+="</ul>";
            
        }   
        return  tree; 
        
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
