let allBtn = document.getElementById('all')
let webBtn = document.getElementById('web')
let all = document.querySelectorAll('.all')
let select = document.querySelector('select');

select.addEventListener('change' , function () {
  if(select.value === 'web'){
    all.forEach(aticle => {
      aticle.style.display = "none";
    })
  }else{
    all.forEach(aticle => {
      aticle.style.display = "flex";
    })
  }
})