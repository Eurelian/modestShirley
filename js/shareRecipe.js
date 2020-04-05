const myShare = document.getElementsByClassName ('shareBtn')[0];
 
console.log(myShare)

myShare.addEventListener('click', shareRecipe);

function shareRecipe(){
    alert('Shirley thanks you for sharing the recipe!');
}