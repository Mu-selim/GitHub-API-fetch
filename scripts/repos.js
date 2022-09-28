let fetchRepos = async(username) => {
    let response = await fetch(`https://api.github.com/users/${username}/repos`);

    // console.log(response.ok);
    if(response.ok) {
        let res = await response.json();
        // console.log(res);
        const reposData = document.querySelector('.reposData');
        reposData.innerHTML = '';
        reposData.style.cssText = 'border: 4px solid #ffa836;';
        for(let item of res) {
            // console.log(item);
            let element = 
            `<div class="repo">
                <div class="repoDetails">
                    <h4 class="repoName">${item['name']}</h4>
                    <span class="stars">Stars Earned: <strong>${item['stargazers_count']}</strong></span>
                </div>
                <button class="showRepo" id="repo${item['id']}">Show</button>
             </div>`;
             reposData.insertAdjacentHTML('afterbegin', element);
             document.querySelector(`#repo${item['id']}`).addEventListener('click', ()=> {
                location.href = item['html_url'];
            });
        }
    }
}