const App = function () {
  this.websites = ['google', 'twitter', 'facebook'];
  this.links = [];
};

App.prototype.generateLinks = function () {
  this.links = this.websites.map((website) => {
    return `https://${website}.com`;
  });
};




const menu = document.querySelector('#menu');

App.prototype.insertLinks = function () {
  this.links.forEach((link) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<li><a href="${link}">${link}</a></li>`;
    menu.appendChild(listItem);
  });
};

const app = new App();
app.generateLinks();
app.insertLinks();

console.log(app.links);




