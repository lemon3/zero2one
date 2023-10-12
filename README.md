<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lemon3/birthdaypicker">
    <img src="https://raw.githubusercontent.com/lemon3/zero2one/main/_assets/images/zero2one.svg" alt="Logo" width="360" height="auto">
  </a>
  <p align="center">a small animation helper</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#license">License</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
I started this project in 2012. Now I have completely rewritten the code.
<div align="center">
  <a href="https://github.com/lemon3/birthdaypicker">
    <img src="https://raw.githubusercontent.com/lemon3/zero2one/main/_assets/images/demo.gif" alt="demo gif" width="240" height="auto">
  </a>
  <p>small demo what you can do with zero2one</p>
</div>

### Features
* Coded in vanilla JS.
* easing
* Zero2One is dependency-free

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
### Quickstart
in your terminal
```sh
yarn add zero2one
# or
npm add zero2one
```
html element
```html
<div id="demo"></div>
```
javascript
```js
import Zero2One from "./node_modules/Zero2One/index.js";

const demo = document.getElementById("demo");
if (demo) {
  const z2o = new Zero2One();
  const start = 1900;
  const end = 2023;
  const duration = 2000;
  const delta = end - start;

  z2o.start(duration, 'Quad.easeIn', (propress) => {
    demo.innerText = start + delta * propress << 0;
  });
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Wolfgang Jungmayer - lemon3.at

Project Link: [https://github.com/lemon3/zero2one](https://github.com/lemon3/zero2one)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div align="center">coded with ❤ in vienna<br>by wolfgang jungmayer</div>

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/lemon3/zero2one?style=for-the-badge
[license-url]: https://github.com/lemon3/zero2one/blob/main/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/wolfgangjungmayer/
