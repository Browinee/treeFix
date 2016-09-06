function build_file_tree(data) {
        var tree="";
      
         
         for(let i =0, j=data.length;i<j;i++){

                tree += "<ul class='tree-folder'>"
                let tempData = data[i];
                for(let k in tempData){
                        console.log(tempData[k]);
                   if(!isNull(tempData[k])){
                        if(typeof tempData[k] =="object" && tempData[k].length>0){
                       
                          tree+=build_file_tree(tempData[k]);
                        }else if( tempData[k].length==0 ){
                          break;
                        
                         }else {
                           tree+="<li>"+tempData[k]+"</i>";
                                
                         }
                   



                   }
                        


                    
                      
                }

                tree+="</ul>";
          }   
        
        return tree;
}


function isNull(obj){
        var isNullValue;
        for(var key in obj){
          if(typeof obj[key]=="undefined") {
                isNullValue=true;
                break;
          }else{
                isNullValue=false};
                

        }
        return isNullValue;
}

var data = [ {name:1},
             {name:2,data:[{name:"data 2"}]},
             {name:3,data:null}
           ];