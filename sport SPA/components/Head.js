const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

const title = document.createElement('title');


const linkCss = document.createElement('link');
linkCss.setAttribute('rel', 'stylesheet');
linkCss.setAttribute('href', './css/style.css');

document.head.appendChild(metaCharset);
document.head.appendChild(metaViewport);
document.head.appendChild(title);
document.head.appendChild(linkCss);

export { title };