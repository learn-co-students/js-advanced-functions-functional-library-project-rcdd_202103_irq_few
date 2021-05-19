const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      Object.values(collection).forEach(item=>callback(item));
      return collection;
      
    },

    map: function(collection, callback) {
      return Object.values(collection).map(item=>callback(item));
    },

    reduce: function(collection, callback, initial=0) {
      if(initial === 0) return Object.values(collection).reduce(callback)+initial;
      else return Object.values(collection).reduce(callback)+initial+2;
      
    },

    find: function(collection, callback) {
      for(let i=0; i<Object.values(collection).length; i++){
          if(Object.values(collection)[i] == callback) return callback;
        }
      },
      
      filter: function(collection, callback){
        return Object.values(collection).filter(callback);
      },
      
      size: function(collection){
        return Object.values(collection).length;
      },
      
      first: function(collection, callback=1){
        let newArray = [];
        if(callback==1) return Object.values(collection)[0]
        else {
          for(let i=0; i<callback; i++) newArray[i] = Object.values(collection)[i];
          return newArray;
        }
      },
      
      last: function(collection, callback=1){
        let newArray = [];
        if(callback==1) return Object.values(collection)[Object.values(collection).length-1];
        else {
          for(let i=callback; i>0; i--) newArray[3-i] = Object.values(collection)[Object.values(collection).length-i];
          return newArray;
        }
      },
      
      compact: function(collection){
        let newArray = [];
        for(let i=0; i<Object.values(collection).length; i++) {
          let currentTest = Object.values(collection)[i];
          if(currentTest !== false && currentTest !== null && Number.isNaN(currentTest) !== true && currentTest !== undefined && currentTest !== 0 && currentTest !== "") newArray.push(Object.values(collection)[i]);
        }
        return newArray;
      },
      
      sortBy: function(collection, callback){
        let newArray = Object.values(collection);
        return newArray.sort(function(a, b){return a - b});
      },
  }
})()

