async function githubdata(username) {
  const userdata = await fetch(`https://api.github.com/users/${username}`);

  let jasondata = await userdata.json();

  return jasondata;
}

let form = document.querySelector("#gitform");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let value=document.querySelector('#git-user-name').value;
  const userdata=await githubdata(value);
  console.log(userdata)

  let section=document.querySelector('#user-details')

  if(userdata.id){
    section.innerHTML=`<aside>
            <img src="${userdata.avatar_url}" alt="loading...">
        </aside>
        <article id="aboutme">
 <h1>name: <span>${userdata.name}</span></h1>
            <p>Bio: <span>${userdata.bio}</span></p>
            <p>Location: <span>${userdata.location}</span></p>
            <div class="summary">
                <button>repos: <span>${userdata.public_repos}</span></button>
                <button>followers: <span>${userdata.followers}</span></button>
                <button>following: <span>${userdata.following}</span></button>
            </div>
        </article>`
  }
});
