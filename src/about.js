
export default function setUpAboutPage() {
    const main = document.querySelector('.main');
    main.classList.remove('h100');

    const test_container = document.createElement('div');
    test_container.classList.add('test-container');

    const h1 = document.createElement('h1');
    h1.textContent = 'The Place Where the Best Mexican Food is Served';

    const description_container = document.createElement('div');
    description_container.classList.add('description-container');

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Euismod nisi porta lorem mollis. Quam vulputate dignissim suspendisse in. Massa tincidunt dui ut ornare lectus sit amet est. Velit scelerisque in dictum non consectetur a erat. Nunc sed id semper risus. In hac habitasse platea dictumst. Sed viverra ipsum nunc aliquet bibendum. Vitae auctor eu augue ut lectus arcu bibendum at. Mi bibendum neque egestas congue quisque egestas diam in. Justo donec enim diam vulputate. Eu mi bibendum neque egestas congue quisque egestas diam.';

    main.appendChild(test_container);

    test_container.appendChild(h1);
    test_container.appendChild(description_container);

    description_container.appendChild(description);
}