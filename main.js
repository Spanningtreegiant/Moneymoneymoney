var arnault = document.getElementById('arnault');
var arnault_counter = document.getElementById('arnault-counter');
var arnaultCounterStart = document.getElementById('arnault-counter-start');

var thousand = new Intl.NumberFormat('fr-FR')
var money = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

//todo: also work for 400 richest
window.addEventListener('scroll', function(){
  update_wealth_counter();
});

//Todo: stop executing once scrolled past
function update_wealth_counter() {
  if (arnault_viewable()) {
    if (arnault_counter_viewable()) {
      let wealth = (window.scrollX - arnault.offsetLeft + 175) * 500000;
      arnault_counter.innerHTML = (wealth < 149000000000) ? money.format(wealth) : "149,000,000,000.00€";
    }
    else {
      arnault_counter.innerHTML = '';
    }
  }
  function arnault_viewable() {
    return window.scrollX < arnault.offsetLeft + arnault.offsetWidth + 100;
  }
  function arnault_counter_viewable() {
    return arnaultCounterStart.offsetLeft - window.scrollX < (window.innerWidth);
  }

}
function toggleZoom() {
  document.getElementById('line-chart').classList.toggle('zoom');
}
