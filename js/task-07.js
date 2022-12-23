const controlRange = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');
textElem.style.fontSize = '56px';

controlRange.addEventListener('input', (event) => {
    textElem.style.fontSize = `${event.currentTarget.value}px`;
    // console.log(event.currentTarget.value);
    // console.log(textElem.style.fontSize);

});

//чернетка
 // if (event.currentTarget.value += 1) {
    //     console.log('hi!');
    // }
    // for (let i = min; i <= max; i += 1) {
    //     textElem.style.fontSize += 1;
    //     console.log(event.currentTarget.value.length);
    // }