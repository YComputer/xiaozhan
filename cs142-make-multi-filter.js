cs142MakeMultiFilter = function(originalArray){
    var currentArray = originalArray;
    return function arrayFilterer(filter, callback){
        if(typeof filter === 'function'){
            currentArray = currentArray.filter(filter);
            if(typeof callback === 'function'){
                callback.call(originalArray, currentArray)
            }
            return arrayFilterer;
        }else{
            return currentArray;
        }
    }
}
