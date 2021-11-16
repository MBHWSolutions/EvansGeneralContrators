import {AddUserToGroup} from '../HWSAPIUtilities'

export function SaltoRegistration (currentUser) {

  if(currentUser.FirstName === null || currentUser.FirstName === 'Anonymous')
  return;
  
  if(currentUser.Email.toLowerCase().includes('saltosystems'))
  {
    let addToGroup = true;

    currentUser.Groups.forEach(group => {

      if(group.Name.toUpperCase().includes('SALTO - EMPLOYEES'))
      addToGroup = false;
    });

    if(addToGroup)
    {
      AddUserToGroup(currentUser.FriendlyID, 10340)
      .then(currentUser.Groups.push({Name: 'SALTO - EMPLOYEES'}));
    }

    
  } 

}

 
