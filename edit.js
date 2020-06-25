const nameText = document.getElementById('name');
const websiteLink = document.getElementById('website');
const linkedinLink = document.getElementById('linkedin');
const mediumLink = document.getElementById('medium');
const twitterLink = document.getElementById('twitter');
const githubLink = document.getElementById('github');
const quoraLink = document.getElementById('quora');
const gitlabLink = document.getElementById('gitlab');
const stackoverflowLink = document.getElementById('stackoverflow');
const facebookLink = document.getElementById('facebook');
const instagramLink = document.getElementById('instagram');

const saveButton = document.getElementById('save');

const array = ['name', 'website', 'linkedin', 'medium', 'twitter', 'github', 'quora', 'stackoverflow', 'gitlab', 'facebook', 'instagram'];
chrome.storage.sync.get(array, (links) => {
  if (!chrome.runtime.error) {
    console.log(links);
    if (links.name) nameText.value = `${links.name} `;
    if (links.website) websiteLink.value = links.website;
    if (links.linkedin) linkedinLink.value = links.linkedin;
    if (links.medium) mediumLink.value = links.medium;
    if (links.twitter) twitterLink.value = links.twitter;
    if (links.github) githubLink.value = links.github;
    if (links.quora) quoraLink.value = links.quora;
    if (links.gitlab) gitlabLink.value = links.gitlab;
    if (links.stackoverflow) stackoverflowLink.value = links.stackoverflow;
    if (links.facebook) facebookLink.value = links.facebook;
    if (links.instagram) instagramLink.value = links.instagram;
  }
});

function UpdateLinks() {
  const dict = {
    name: nameText.value,
    website: websiteLink.value,
    linkedin: linkedinLink.value,
    medium: mediumLink.value,
    twitter: twitterLink.value,
    github: githubLink.value,
    stackoverflow: stackoverflowLink.value,
    quora: quoraLink.value,
    gitlab: gitlabLink.value,
    facebook: facebookLink.value,
    instagram: instagramLink.value,
  };
  chrome.storage.sync.set(dict, () => {
    if (!chrome.runtime.error) {
      console.log('Links Updated');
      window.location.pathname = 'popup.html';
    }
  });
}

saveButton.addEventListener('click', () => {
  UpdateLinks();
});
