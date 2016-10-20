angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(chat){
    return $http({
        url: "/api/chats",
        method: 'GET',
    }).then(function(response) {
        if(response.status === 200){
          return response.data;
        }
    })
  }

  this.addChats = function(chat){
    return $http({
        url: "/api/chats",
        method: 'POST',
        data: {message: chat}
    })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
  }

  this.setScreenname = function(screenname) {
    return $http({
      url: "/api/screenname",
      method: 'POST',
      data: {name: screenname}
    })
  }
});
