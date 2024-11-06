
async function create() {

    console.log("Create function called");


    const leg = document.getElementById('length').value;
    

    const response = await fetch(`http://127.0.0.1:8098/creator/${leg}`);
    const result = await response.text();

    document.getElementById("result").value = result;

}




const copyButton = document.getElementById('copy');
const textField = document.getElementById('result');

copyButton.addEventListener('click', () => {

  textField.select();
  textField.setSelectionRange(0, 99999);

  document.execCommand('copy');

  alert('Text copied to clipboard!');

});