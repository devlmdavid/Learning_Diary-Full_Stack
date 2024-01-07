const corHeader = document.getElementById('header-container');
corHeader.style.backgroundColor = 'rgb(0, 176, 105)';

const corImportante = document.getElementsByClassName('emergency-tasks')[0];
corImportante.style.backgroundColor = 'rgb(255, 159, 132)';

const h3Urgente = document.querySelectorAll('.emergency-tasks h3')[0];
h3Urgente.style.backgroundColor = 'rgb(165, 0, 243)';
h3Urgente.style.color = 'white';

const h32Urgente = document.querySelectorAll('.emergency-tasks h3')[1];
h32Urgente.style.backgroundColor = 'rgb(165, 0, 243)';
h32Urgente.style.color = 'white';

const corNimport = document.getElementsByClassName('no-emergency-tasks')[0];
corNimport.style.backgroundColor = 'rgb(249, 219, 94)';

const h3Nimport = document.querySelectorAll('.no-emergency-tasks h3')[0];
h3Nimport.style.backgroundColor =  'rgb(35, 37, 37)';
h3Nimport.style.color = 'white';

const h32Nimport = document.querySelectorAll('.no-emergency-tasks h3')[1];
h32Nimport.style.backgroundColor = 'rgb(35, 37, 37)';
h32Nimport.style.color = 'white';

const rodaPe = document.getElementsByTagName('footer')[0];
rodaPe.style.backgroundColor = 'rgb(0, 53, 51)';
