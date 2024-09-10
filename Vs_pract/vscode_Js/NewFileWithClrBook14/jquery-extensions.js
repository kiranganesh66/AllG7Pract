(function($){

    $.fn.src=function(url){
        
        var old = $(this).attr("src");
        if(url!==undefined){
            $(this).attr("src", url);
        }
        
        return old;
    }

    $.fn.int=function(){
        return parseInt($(this).val());
    }

    $.fn.highlight=function(options){
        var settings=$.extend({
            background:'lightyellow',
            
        },options);

        $(this).css(settings);
    }

})(jQuery);









// for( current; current ; current = current.next)
//   let current = this._first
//       while( current !== null){
//         console.log( current.value,current.next.value )
//         if(sor ==="asc" && (current.value > current.next.value )){

//           [current.value, current.next.value] = [current.next.value,current.value];
//         }

//         // if (sor === "asc" ){
//         //         if(current.value > current.next.value ) {
//         //           [current.value, current.next.value] = [current.next.value,current.value,];

//         //         }

//         }

//         current= current.next
