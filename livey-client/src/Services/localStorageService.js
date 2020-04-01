export const  getSocialUser=()=>
{
    return JSON.parse(localStorage.getItem('social-user'));
}
export const setSocialUser=(socialUser)=>
{
    localStorage.setItem('social-user',JSON.stringify(socialUser));
}
