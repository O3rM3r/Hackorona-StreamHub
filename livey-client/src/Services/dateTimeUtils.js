export const timeStrToSecs=(str)=>
{
    var split=str.split(':');
    return split[0]*60*60+split[0]*60+split[2]
}