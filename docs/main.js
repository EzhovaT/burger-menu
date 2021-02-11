document.querySelector('.burger__btn').addEventListener('click', function(e){
  e.preventDefault();
  // this.classList.toggle('is-active');
  //закртытие меню
  if(this.classList.contains('is-active')){
    this.classList.remove('is-active');
    document.querySelector('#menu').classList.remove('nav-active');
    document.body.classList.remove('wrapper-active');
  }
  //открытие меню
  else{
    this.classList.add('is-active');
    document.querySelector('#menu').classList.add('nav-active');
    document.body.classList.add('wrapper-active');
  }
})