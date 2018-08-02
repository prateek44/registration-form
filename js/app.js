(function()
{
  angular.module('loginForms',['firebase']).
  controller('loginFormController',loginFormController).$inject=['$firebase','$firebaseAuth'];
  function loginFormController($firebase,$firebaseAuth)
  {
    console.log('loginFormController');
    var loginFormCtrl=this;
    loginFormCtrl.value="0";
    loginFormCtrl.firstname;
    loginFormCtrl.lastname;
    loginFormCtrl.msg;
    loginFormCtrl.email;
    var val=0;
    loginFormCtrl.flagFirstName="0";
    loginFormCtrl.flagLastName="0";
    loginFormCtrl.flagEmail="0";
    loginFormCtrl.registerUserAPI=function()
    {
      var dbref=firebase.database().ref();
      var auth=$firebaseAuth();
      auth.$createUserWithEmailAndPassword(
        loginFormCtrl.email,loginFormCtrl.email
      ).then(function(registerUser)
    {
      loginFormCtrl.msg="Hi "+loginFormCtrl.firstname;
       console.log(loginFormCtrl.msg);
    }).catch(function error()
  {
    loginFormCtrl.msg="Something went wrong while registering";
  });

    };


    loginFormCtrl.nameValidator=function()
    {
      if(loginFormCtrl.flagFirstName!==undefined && loginFormCtrl.flagFirstName==="0")
      {
        console.log('flagFirstName');
        val=val+25;
        loginFormCtrl.value=val;
        loginFormCtrl.flagFirstName="1";
      }
      else if(loginFormCtrl.flagLastName!==undefined && loginFormCtrl.flagLastName==="0")
      {
        console.log('flagLastName');
        val=val+25;
        loginFormCtrl.value=val;
        loginFormCtrl.flagLastName="1";
      }


    };
    loginFormCtrl.emailValidator()
    {
      
    }
    loginFormCtrl.check=function()
    {
      console.log('NameValidator');
      var minnamelen=5;
      if(loginFormCtrl.firstname!==undefined && loginFormCtrl.firstname.length>=5 && loginFormCtrl.flagFirstName==="0")
      {
        loginFormCtrl.nameValidator();

      }
      else if(loginFormCtrl.lastname!==undefined && loginFormCtrl.lastname.length>=5 && loginFormCtrl.flagLastName==="0")
      {
        loginFormCtrl.nameValidator();
      }
      else if(loginFormCtrl.email.length>5 && loginFormCtrl.email.indexOf('@')>=0 )
      {


      }
    };





  };
})();
