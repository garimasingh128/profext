var name_text = document.getElementById('name');
var website_link = document.getElementById('website_link');
var linkedin_link = document.getElementById('linkedin_link');
var medium_link = document.getElementById('medium_link');
var twitter_link = document.getElementById('twitter_link');
var github_link = document.getElementById('github_link');
var quora_link = document.getElementById('quora_link');
var stackoverflow_link = document.getElementById('stackoverflow_link');
var gitlab_link = document.getElementById('gitlab_link');
var facebook_link =  document.getElementById('facebook_link');
var instagram_link = document.getElementById('instagram_link');

var array = ["name","website","linkedin","medium","twitter","github", "quora", "stackoverflow", "gitlab", "facebook", "instagram"];

function void_click(){
    void(0);
}
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.innerHTML=links.name+"'s ";
        
        if(links.website)
            website_link.href=links.website;
        else
            website_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.linkedin)
            linkedin_link.href=links.linkedin;
        else
            linkedin_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.medium)
            medium_link.href=links.medium;
        else
            medium_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.twitter)
            twitter_link.href=links.twitter;
        else
            twitter_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.github)
            github_link.href=links.github;
        else
            github_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.quora)
            quora_link.href=links.quora;
        else
            quora_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.gitlab)
            gitlab_link.href=links.gitlab;
        else
            gitlab_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.stackoverflow)
            stackoverflow_link.href=links.stackoverflow;
        else
            stackoverflow_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.facebook)
            facebook_link.href=links.facebook;
        else
            facebook_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.instagram)
            instagram_link.href=links.instagram;
        else
            instagram_link.addEventListener('click',function(event){
                event.preventDefault();
            });
    }
});
