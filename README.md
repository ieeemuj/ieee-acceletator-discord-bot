<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** ieeemuj, acceletatorBot, twitter_handle, email, IEEE CS Discord Bot, A discord bot for managing our discord server.
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ieeemuj/acceletatorBot">
    <img src="https://i.imgur.com/kKe9hzu.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">IEEE CS Discord Bot</h3>

  <p align="center">
    A discord bot for managing our discord server.
    <br />
    <a href="https://github.com/ieeemuj/acceletatorBot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ieeemuj/acceletatorBot">View Demo</a>
    ·
    <a href="https://github.com/ieeemuj/acceletatorBot/issues">Report Bug</a>
    ·
    <a href="https://github.com/ieeemuj/acceletatorBot/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Discord bot for IEEE SB MUJ Discord server.

### Built With

- [Discord.js](https://discord.js.org/#/)
- [Firebase](https://firebase.google.com/)
- [Google Sheets API](https://developers.google.com/sheets/api/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- Setup firebase firestore - https://firebase.google.com/ and save the config file at the root as **firebaseServiceAccount.json**
- Setup a google cloud platform app and enable the google sheets api and save the credentials at the root of the project as **googleApiCredentials.json** (Follow this [tutorial](https://www.youtube.com/watch?v=PFJNJQCU_lo))

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ieeemuj/acceletatorBot.git
   ```
2. Move inside the folder
   ```sh
   cd acceleratorBot
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Session Commands

- **./start or ./s**
  Starts the session and will display a embed message
  ![./start or ./s](https://i.imgur.com/pAyJwDZ.jpg)

- **./attendance or ./a**
  Collects the names of the attendees in the mentor's voice channel and sends the list to the mentor as a direct message.
  ![./attendance or ./a](https://i.imgur.com/OOUw7Mq.jpg)
  The mentor will receive a DM-
  ![DM](https://i.imgur.com/LHhdwjj.jpg)
  The attendance will be updated in the google sheet associated with the bot.

### Configuration

- **./setprefix _new prefix_**
  Use to change the prefix for which the bot responds, default is **./**

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/ieeemuj/acceletatorBot/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE` for more information. -->

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/ieeemuj/acceletatorBot](https://github.com/ieeemuj/acceletatorBot)

<!-- ACKNOWLEDGEMENTS -->
<!--
## Acknowledgements

- []()
- []()
- []() -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ieeemuj/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/ieeemuj/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ieeemuj/repo.svg?style=for-the-badge
[forks-url]: https://github.com/ieeemuj/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/ieeemuj/repo.svg?style=for-the-badge
[stars-url]: https://github.com/ieeemuj/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/ieeemuj/repo.svg?style=for-the-badge
[issues-url]: https://github.com/ieeemuj/repo/issues
[license-shield]: https://img.shields.io/github/license/ieeemuj/repo.svg?style=for-the-badge
[license-url]: https://github.com/ieeemuj/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ieeemuj
