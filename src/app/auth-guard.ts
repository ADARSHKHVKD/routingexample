import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
let isLoggedIn=true;

if(isLoggedIn){
  return true;
}
else{
  alert("acces denied ..please login")
  return false;
}



  return true;
};
