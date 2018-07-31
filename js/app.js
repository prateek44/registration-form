(function()
{
  angular.module('loginForms',[]).
  controller('loginFormController',loginFormController).$inject=[];
  function loginFormController()
  {

    var loginFormCtrl=this;
    loginFormCtrl.value="0";
    loginFormCtrl.flagFirstName="0";
    loginFormCtrl.flagLastName="0";
    loginFormCtrl.flagEmail="0";
    loginFormCtrl.nameValidator=function()
    {
      if(loginFormCtrl.flagFirstName==="0")
      {
        console.log('flagFirstName');
        loginFormCtrl.value="25";
        loginFormCtrl.flagFirstName="1";
      }
      else if(loginFormCtrl.flagLastName==="0")
      {
        console.log('flagLastName');
        loginFormCtrl.value="50";
        loginFormCtrl.flagLastName="1";
      }


    };
    loginFormCtrl.check=function()
    {
      console.log('NameValidator');
      var minnamelen=5;
      if(loginFormCtrl.firstname.length>=5 && loginFormCtrl.flagFirstName==="0")
      {
        loginFormCtrl.nameValidator();

      }
      else if(loginFormCtrl.lastname.length>=5 && loginFormCtrl.flagLastName==="0")
      {
        loginFormCtrl.nameValidator();
      }
    };





  };
})();
