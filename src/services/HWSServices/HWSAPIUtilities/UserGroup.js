'use strict';

function AddUserToGroup (userId, userGroupId) {
 
return new Promise((resolve, reject)=>{
 fetch(`https://ustore.hwsolutions.com/uStoreWSAPI/UserGroupWS.asmx/AddUserToGroup?username=uStoreAPI@hwsolutions.com&password=!Nth3cl0ud&userId=${userId}&userGroupId=${userGroupId}`)
 .then( res => res.json())
 .then(data => resolve('User Added'))
 .catch(err=> reject('User already in group'))
});
 


}

function GetUserGroup ( userId) {
  console.log("Get User Group");
}

function GetUserGroupList () {


  // return new Promise((resolve, reject)=>{
  //   fetch(`https://ustore.hwsolutions.com/uStoreWSAPI/UserGroupWS.asmx/GetUserGroupList ?username=uStoreAPI@hwsolutions.com&password=!Nth3cl0ud`).then( res => resolve('User Added')).catch(err=>{console.log('User in Group')})
  //  });



}

function GetUserGroupListForUser (userId) {
  console.log("Get User Group List For User");
}

function GetUserListByGroup  (userGroupId) {
  console.log("Get User List By Group");
}

function RemoveUserFromGroup   (userId ,userGroupId) {
  console.log("Remove User From Group");
}



export {AddUserToGroup, GetUserGroup, GetUserGroupList, GetUserGroupListForUser, GetUserListByGroup, RemoveUserFromGroup}