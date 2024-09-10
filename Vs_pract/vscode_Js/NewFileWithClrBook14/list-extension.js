

(
  function(){
      
      LinkedList.prototype._removeIndex=LinkedList.prototype.remove;

      LinkedList.prototype._removeSelected=function(matcher){
          var removed=new LinkedList();
          var p=null;
          for(var i=0; i<this.size();i++){
              var v=this.get(i);
              var _matched= matcher(v);
              if(_matched===undefined)
                  break;
              if(_matched){
                  console.log('removing ',v);
                  removed.append(v);
                  this._removeIndex(i);
                  i--;
              };
          }
          return removed;
      };

      LinkedList.prototype.remove=function(param){
          if(typeof(param)==='function')
              return this._removeSelected(param);
          else
              return this._removeIndex(param);
      }









      

  }
)();



//filterbyall

// filterbymutipleoption(obj) {
//     var { author = null, price = null, rating = null } = obj;
//     price = price === "" ? null : price;
//     // var result = new LinkedList(); 

//      var min =null
//      var max
     
//     if(rating){
//      var km= rating.split(",")
//       min = parseInt(km[0])
//       max = parseInt(km[1])
//     }
// // console.log(min)
// // console.log(max)
//   var re=  this._books.filter((v) => {
//       // i am check with= price ad the authr\or
//       var res = (author === null ? true : v.author.toLowerCase().includes(author.toLowerCase())) &&
//                 (price === null ? true : v.price < price) &&
//                 (rating === null ? true : v.rating >= min && v.rating <= max)
//            //not to get the duplicates 
//                 // if (res && !result.find((b) => b._id === v._id)) {
//                 //   result.append(v);
//                 // }
//                 return res
//     });
  

//     return re;
//   }