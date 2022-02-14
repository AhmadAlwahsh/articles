const root = document.getElementById('root');

function createArticle(name , image , disc , date , track){
  let article = document.createElement('div');
  article.classList.add('article');
  root.appendChild(article);
  ///////////////////
  let img = document.createElement('img');
  img.setAttribute('src' , `./images/${image}`);
  img.setAttribute('loading' , `lazy`);
  article.appendChild(img);
  ///////////////////
  let h3 = document.createElement('h3');
  h3.innerHTML = name;
  article.appendChild(h3);
  ///////////////////
  let p = document.createElement('p');
  p.innerHTML = disc;
  article.appendChild(p);
  ///////////////////
  let span = document.createElement('span');
  span.innerHTML = date;
  article.appendChild(span);
  ///////////////////
  if (track === "web"){
    article.classList.add('web')
  }else{
    article.classList.add('all')
  }
}


createArticle('ahmad article' , 'back.jpg' , "bal bla bla" , "2022 / 2 / 14" , 'web')
createArticle('ahmad article' , 'back.jpg' , "bal bla bla" , "2022 / 2 / 14" , 'all')
