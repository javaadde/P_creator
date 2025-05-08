
async function create() {

    console.log("Create function called");


    const leg = document.getElementById('length').value;
    

    const response = await fetch(`https://p-creator.onrender.com/creator/${leg}`);
    const result = await response.text();

    document.getElementById("result").value = result;

}

function copyToClipboard() {
  const textField = document.getElementById('result');

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textField.value)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  } else {
    // Fallback for older browsers (not recommended)
    textField.select();
    document.execCommand('copy');
    alert('Text copied (fallback method)');
  }
}


function Link(){
    window.location.href="https://javaadde.github.io/portfolio"
}






function updateValue(value) {
  document.getElementById("rangeValue").textContent = value;
}





function increaseRange() {
  const rangeInput = document.getElementById("length");
  if (rangeInput.value < rangeInput.max) {
      rangeInput.value = parseInt(rangeInput.value) + 1;
      updateValue(rangeInput.value);
  }
}

function decreaseRange() {
  const rangeInput = document.getElementById("length");
  if (rangeInput.value < rangeInput.max) {
      rangeInput.value = parseInt(rangeInput.value) - 1;
      updateValue(rangeInput.value);
  }
}


