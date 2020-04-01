export const getItems=()=>
{
    fetch('https://api.mydomain.com')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}