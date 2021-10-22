const userSocialMedias = {
    github: 'renandrnls',
    linkedin: 'in/renandrnls/',
    facebook: 'profile.php?id=100010200602377',
    instagram: 'renan_dorneles.jpg/',
    twitter: 'RenanDorneles5'
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://www.${social}.com/${userSocialMedias[social]}`
    }
}
changeSocialMediaLinks()

function getGutHubProfileInfos() {
    const url = `https://api.github.com/users/${userSocialMedias.github}`

    fetch(url).then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userNickname.textContent = data.login
    })
}
getGutHubProfileInfos()
