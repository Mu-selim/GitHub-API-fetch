let fetchUser = async (username)=> {
    let response = await fetch(`https://api.github.com/users/${username}`);

    if(response.ok) {
        let res = await response.json();

        const avatarNameBox = document.querySelector('.avatarNameBox');
        const details = document.querySelector('.details');
        avatarNameBox.innerHTML = '';
        details.innerHTML = '';
        userData.style.cssText = 'border: 4px solid #ffa836;'
        let element = 
        `<img class="avatar" src="${res['avatar_url']}">
         <div class="nameBox">
             <h1 class="name">${res['name']}</h1>
             <input class="view" type="button" value="view profile">
         </div>`;
        avatarNameBox.insertAdjacentHTML('afterbegin', element);
        element = 
        `<span class="bio">${res['bio']}</span>
         <span class="publicRepos">Public Repos: ${res['public_repos']}</span>
         <span class="followers"><strong>${res['followers']}</strong> followers</span>
         <span class="following"><strong>${res['following']}</strong> followers</span>`;
        details.insertAdjacentHTML('afterbegin', element);
        document.querySelector('.view').addEventListener('click', ()=> {
          location.href = res['html_url'];  
        });
    }
}