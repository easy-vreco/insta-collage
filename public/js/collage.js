let begin = () => {
    let arrPrograms = [{id:'0', name: 'img 1', uri: 'img1.png'},
    {id:'1', name: 'img2', uri: 'img2.png'},
    {id:'2', name: 'img3', uri: 'img3.png'},
    {id:'3', name: 'img4', uri: 'img4.png'},
    {id:'4', name: 'img5', uri: 'img5.png'},
    {id:'5', name: 'img6', uri: 'img6.png'},

    function imgRandom() {
      return arrPrograms[parseInt(Math.random() * 7)];
    }

    document.addEventListener('dragstart', drag);
    document.addEventListener('dragover', permitirDrop);
    document.addEventListener('drop', drop);
  
    // let imgPrimary = document.getElementById('img-primary');
    let imgSelect = imgRandom();
  
    loadImg(imgSelect.name, imgSelect.uri);
    loadNewPrograms(imgSelect);
  
    function loadNewPrograms(objImg) {
      let programs = document.getElementsByTagName('img');
      let arrImgUse = [];
      
      arrImgUse.push(objImg.id);
  
      [...programs].forEach(el => {
        let img = null;
  
        do {
          img = imgRandom();
        } while (arrImgUse.includes(img.id));
  
        arrImgUse.push(img.id);
  
        loadImg(el, img.name, img.uri);
      });
    }
  
    function loadImg(content, name, uri) {
      content.setAttribute('src', `img/${uri}`);
      content.setAttribute('alt', `img/${name}`);
    }
  
    function drag(event) {
      event.dataTransfer.setData('text', event.target.id);
    }
  
    function permitirDrop(event) {
      event.preventDefault();
    }
  
    function drop(event) {
      event.preventDefault();
      if (event.target.className === 'marco-foto') {
        let idFoto = event.dataTransfer.getData('text');
        event.target.appendChild(document.getElementById(idFoto));
      }
    }
  };
  
  window.addEventListener('load', begin);
  