var name_text = document.getElementById('name');
var website_link = document.getElementById('website');
var linkedin_link = document.getElementById('linkedin');
var medium_link = document.getElementById('medium');
var twitter_link = document.getElementById('twitter');
var github_link = document.getElementById('github');
var quora_link = document.getElementById('quora');
var gitlab_link = document.getElementById('gitlab');
var stackoverflow_link = document.getElementById('stackoverflow');
var facebook_link = document.getElementById('facebook');
var instagram_link = document.getElementById('instagram');

var save_button = document.getElementById('save');

var array = ["name","website","linkedin","medium","twitter","github", "quora", "stackoverflow", "gitlab", "facebook", "instagram"];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.value=links.name+" ";
        if(links.website)
            website_link.value=links.website;
        if(links.linkedin)
            linkedin_link.value=links.linkedin;
        if(links.medium)
            medium_link.value=links.medium;
        if(links.twitter)
            twitter_link.value=links.twitter;
        if(links.github)
            github_link.value=links.github;
        if(links.quora)
            quora_link.value=links.quora;
        if(links.gitlab)
            gitlab_link.value=links.gitlab;
        if(links.stackoverflow)
            stackoverflow_link.value=links.stackoverflow;
        if(links.facebook)
            facebook.value=links.facebook;
        if(links.instagram)
            instagram.value=links.instagram;
    }
});


save_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    var dict = {
        "name":name_text.value,
        "website":website_link.value,
        "linkedin":linkedin_link.value,
        "medium":medium_link.value,
        "twitter":twitter_link.value,
        "github":github_link.value,
        "stackoverflow":stackoverflow_link.value,
        "quora":quora_link.value,
        "gitlab":gitlab_link.value,
        "facebook":facebook_link.value,
        "instagram":instagram_link.value,
    };
    chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='popup.html';
        }
    });
}
