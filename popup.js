const nameText = document.getElementById('name');
const websiteLink = document.getElementById('website_link');
const linkedinLink = document.getElementById('linkedin_link');
const mediumLink = document.getElementById('medium_link');
const twitterLink = document.getElementById('twitter_link');
const githubLink = document.getElementById('github_link');
const quoraLink = document.getElementById('quora_link');
const stackoverflowLink = document.getElementById('stackoverflow_link');
const gitlabLink = document.getElementById('gitlab_link');
const facebookLink = document.getElementById('facebook_link');
const instagramLink = document.getElementById('instagram_link');

const array = ['name', 'website', 'linkedin', 'medium', 'twitter', 'github', 'quora', 'stackoverflow', 'gitlab', 'facebook', 'instagram'];

chrome.storage.sync.get(array, (links) => {
  if (!chrome.runtime.error) {
    console.log(links);
    if (links.name) { nameText.innerHTML = `${links.name}'s `; }

    if (links.website) { websiteLink.href = links.website; } else {
      websiteLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.linkedin) { linkedinLink.href = links.linkedin; } else {
      linkedinLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.medium) { mediumLink.href = links.medium; } else {
      mediumLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.twitter) { twitterLink.href = links.twitter; } else {
      twitterLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.github) { githubLink.href = links.github; } else {
      githubLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.quora) { quoraLink.href = links.quora; } else {
      quoraLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.gitlab) { gitlabLink.href = links.gitlab; } else {
      gitlabLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.stackoverflow) { stackoverflowLink.href = links.stackoverflow; } else {
      stackoverflowLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.facebook) { facebookLink.href = links.facebook; } else {
      facebookLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    if (links.instagram) { instagramLink.href = links.instagram; } else {
      instagramLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  }
});
