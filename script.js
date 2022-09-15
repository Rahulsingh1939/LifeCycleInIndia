const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCount = () => {
    const targ=counter.getAttribute('data-target');
    const c = +counter.innerText;
    const inc =1;
    if(c<targ){
      counter.innerText = `${Math.ceil(c + inc)}`;
      setTimeout(updateCount,1);
    }else{
      counter.innerText=targ;
    }
  };
  setTimeout(updateCount(),1);
});