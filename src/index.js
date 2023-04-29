window.onload = function() {
  console.log('Hello my Pets enthusiast');
  // petsJSON.forEach(pet => {
  //     console.log(pet.name, pet.img);
  // });

  renderKeyboard();
};

function renderKeyboard() {
  const body = document.querySelector('body');
  body.append(document.createElement('div'));
}
