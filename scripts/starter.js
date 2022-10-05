const userData = document.querySelector('.userData');
const reposData = document.querySelector('.reposData');
const loadingButtonContent = document.querySelector('.fetchAPI div'); 

onload = () => {
    userData.style.cssText = 'border: 4px solid transparent;';
    reposData.style.cssText = 'border: 4px solid transparent;';
}

document.querySelector('.fetchAPI').addEventListener('click', ()=>{
    let username = document.querySelector('.gitUsername').value;
    loadingButtonContent.classList.add('loading');
    fetchUser(username);
    fetchRepos(username);
});