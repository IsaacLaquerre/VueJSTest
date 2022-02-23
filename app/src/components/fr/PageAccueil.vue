<template>
    <div id="app">
        <title>{{ title }}</title>
        <div class="header">
            <img alt="Logo" onclick="window.location.href='/'" src="assets/images/favicon.svg">
            <div class="navbar">
                <ul class="navlist">
                    <li class="navitem">
                        <a href="#about">À propos</a>
                    </li>
                    <li class="navitem">
                        <a href="#services">Services</a>
                    </li>
                    <li class="navitem">
                        <a href="#projects">Projets</a>
                    </li>
                    <li class="navitem">
                        <a href="#contact">Contact</a>
                    </li>
                    <li id="lang-select" onclick="displayLangSelect();" class="navitem center lang-select icon-select" style="width: 100px;">
                        <div class="selected-box" style="height: 50px; margin-top: calc(var(--headerHeight) / 2); transform: translateY(-50%);">
                            <div class="selected-icon">
                                <img src="assets/images/lang/fr.png">
                                <img id="langArrow" src="assets/images/icon-select/control/arrow.svg">
                            </div>
                            <div id="icon-select-box-scroll" class="box" style="left: 0; display: none; overflow: hidden;">
                                <div style="display: flex; justify-content: center; gap: 5px; width: 90px; height: calc(var(--headerHeight) / 2); transition-property: transform; transform-origin: 0px 0px; transform: translate(0, calc(var(--headerHeight) / 2)) translateZ(0px); margin-top: 2px;">
                                    <div class="icon" onclick="handleLang('en');">
                                        <img src="assets/images/lang/en.png" icon-value="en" icon-index="0">
                                    </div>
                                    <div class="icon selected" onclick="handleLang('fr');">
                                        <img src="assets/images/lang/fr.png" icon-value="fr" icon-index="1">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="navbar2">
                <div class="dropdown" onclick="displayNavbar2();">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"/></svg>
                </div>
                <div class="dropdown-content" style="display: none;">
                    <ul class="navlist">
                        <li class="navitem" onclick="displayNavbar2();">
                            <a href="#about">À propos</a>
                        </li>
                        <li class="navitem" onclick="displayNavbar2();">
                            <a href="#services">Services</a>
                        </li>
                        <li class="navitem" onclick="displayNavbar2();">
                            <a href="#projects">Projets</a>
                        </li>
                        <li class="navitem" onclick="displayNavbar2();">
                            <a href="#contact">Contact</a>
                        </li>
                        <li class="navitem center lang">
                            <ul style="list-style-type: none; padding-inline-start: 0; display: flex; flex-direction: row; justify-content: center; gap: 25px; height: 60px">
                                <li class="icon" style="width: 80px;" onclick="handleLang('en'); displayNavbar2();">
                                    <img src="assets/images/lang/en.png" icon-value="en" icon-index="0" style="margin: 0; width: 50px; transform: translateY(0);">
                                </li>
                                <li class="icon selected" style="width: 80px;" onclick="handleLang('fr'); displayNavbar2();">
                                    <img src="assets/images/lang/fr.png" icon-value="fr" icon-index="1" style="margin: 0; width: 50px; transform: translateY(0);">
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="home" class="container center" style="position: relative; display: block; margin-top: 40vh;">
            <div class="logoAnim">
                <div class="logo">
                    <div class="leftBracket">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="448 336 128 96" style="enable-background:new 448 336 128 96;" xml:space="preserve">
                        <path class="st0" d="M460.01,366.3c-7.82,3.7-11.18,13.04-7.5,20.87c3.68,7.84,13,11.21,20.85,7.56l0,0l90.78-42.64l0,0 c0.03-0.01,0.06-0.02,0.09-0.04c7.85-3.69,11.23-13.04,7.54-20.9c-3.69-7.85-13.04-11.23-20.9-7.54c-0.03,0.01-0.05,0.03-0.08,0.04 l0,0L460.01,366.3L460.01,366.3z"/>
                        <path class="st1" d="M474.06,368.5c-7.62-4.09-17.12-1.25-21.24,6.36c-4.12,7.61-1.3,17.12,6.3,21.26l0,0l88.21,47.72l0,0 c0.03,0.02,0.05,0.03,0.08,0.05c7.63,4.13,17.16,1.29,21.29-6.34c4.13-7.63,1.29-17.16-6.34-21.29c-0.03-0.02-0.06-0.03-0.08-0.04 l0,0L474.06,368.5L474.06,368.5z"/>
                    </svg>
                    </div>
                    <div class="initials"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="448 336 128 96" style="enable-background:new 448 336 128 96;" xml:space="preserve">
                <path d="M478.29,379.76h-30.6v-17.67h53.14v83.42h-22.55v-65.75H478.29z M473.57,336.44c0-8.25,6.28-14,14.97-14 s14.97,5.75,14.97,14c0,8.29-6.28,13.78-14.97,13.78S473.57,344.74,473.57,336.44z"/>
                <polygon points="554.65,428.87 554.65,323.04 532.09,323.04 532.09,323.27 514.81,323.27 514.81,339.93 532.09,339.93 532.09,428.87 510.42,428.87 510.42,444.97 576.46,444.97 576.46,428.87 "/>
                </svg></div>
                    <div class="rightBracket">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="448 336 128 96" style="enable-background:new 448 336 128 96;" xml:space="preserve">
                        <path class="st0" d="M564.15,401.65c7.82-3.7,11.17-13.04,7.49-20.87c-3.68-7.84-13-11.21-20.85-7.56l0,0l-90.78,42.64l0,0 c-0.03,0.01-0.06,0.02-0.09,0.04c-7.85,3.69-11.23,13.04-7.54,20.9c3.69,7.85,13.04,11.23,20.9,7.54c0.03-0.01,0.05-0.03,0.08-0.04 l0,0L564.15,401.65L564.15,401.65z"/>
                        <path class="st1" d="M550.1,399.45c7.62,4.09,17.12,1.25,21.24-6.36c4.12-7.61,1.3-17.12-6.3-21.26l0,0l-88.2-47.73l0,0 c-0.03-0.02-0.05-0.03-0.08-0.05c-7.63-4.13-17.16-1.29-21.29,6.34c-4.13,7.63-1.29,17.16,6.34,21.29c0.03,0.02,0.06,0.03,0.08,0.04 l0,0L550.1,399.45L550.1,399.45z"/>
                        </svg>
                    </div>
                </div>
                <div class="center text">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="130 -10 128 48" style="enable-background:new 130 -10 128 48;" xml:space="preserve">
                    <g class="st0">
                        <path class="st1" d="M13.1,24.9h4.2c0.9,0,1.5,0.2,1.9,0.5s0.6,1,0.6,1.8c0,0.9-0.2,1.5-0.6,1.9s-1,0.6-1.9,0.6H4.1 c-0.9,0-1.5-0.2-1.9-0.6c-0.4-0.4-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.6-1.8s1-0.5,1.9-0.5h4.2V14.2H6.1c-0.9,0-1.5-0.2-1.9-0.6 s-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.5-1.9c0.4-0.4,1-0.5,1.9-0.5H12c0.4,0,0.6,0.1,0.8,0.2c0.2,0.2,0.3,0.4,0.3,0.7L13.1,24.9 L13.1,24.9z M10.3-0.5c1,0,1.6,0.2,1.9,0.6c0.3,0.4,0.5,1.4,0.5,2.9c0,1.5-0.1,2.4-0.4,2.8s-0.9,0.5-2,0.5c-1,0-1.7-0.2-2-0.5 c-0.3-0.3-0.4-1-0.4-2C7.9,2,8,0.8,8.3,0.3C8.6-0.2,9.3-0.5,10.3-0.5z"></path>
                        <path class="st1" d="M33.2,29.4c-0.3,0.3-0.7,0.5-1,0.7c-0.4,0.1-0.7,0.2-1.1,0.2c-0.6,0-1-0.2-1.2-0.5s-0.3-1-0.3-1.9V25 c0-1,0.1-1.6,0.4-2s0.8-0.6,1.5-0.6c0.8,0,1.4,0.4,1.9,1.2c0.3,0.5,0.5,0.8,0.7,1c0.6,0.6,1.4,1.1,2.2,1.5s1.8,0.5,2.9,0.5 c0.9,0,1.7-0.2,2.2-0.6s0.8-1,0.8-1.6c0-1.2-1.5-2-4.5-2.5c-0.7-0.1-1.2-0.2-1.6-0.2c-2.3-0.4-4-1-5.1-2.1c-1.1-1-1.7-2.4-1.7-4.2 c0-2.1,0.7-3.7,2-4.8c1.3-1.1,3.2-1.7,5.7-1.7c0.9,0,1.7,0.1,2.6,0.2c0.9,0.1,1.8,0.4,2.8,0.7c0.3-0.4,0.6-0.6,0.9-0.8 c0.3-0.2,0.6-0.3,1-0.3c0.5,0,0.9,0.2,1.2,0.6s0.4,0.9,0.4,1.7v2.7c0,0.6-0.1,1.1-0.4,1.5s-0.7,0.5-1.2,0.5c-0.5,0-1.5-0.5-2.8-1.6 s-2.6-1.6-3.9-1.6c-1,0-1.8,0.2-2.4,0.6s-0.8,0.9-0.8,1.5c0,1,1.2,1.7,3.5,2.1c0.7,0.1,1.2,0.2,1.6,0.2c3,0.5,5,1.2,6.1,2.2 c1.1,1,1.6,2.4,1.6,4.3c0,2.2-0.7,3.9-2.2,5.1c-1.5,1.2-3.5,1.8-6.2,1.8c-1,0-2-0.1-3-0.2C35.1,29.9,34.1,29.7,33.2,29.4z"></path>
                        <path class="st1" d="M74.4,24.9h0.3c0.7,0,1.2,0.2,1.6,0.6s0.6,1,0.6,1.8c0,0.9-0.2,1.5-0.6,1.8c-0.4,0.4-1,0.6-1.9,0.6h-1.8 c-0.6,0-1.1-0.1-1.5-0.4c-0.3-0.3-0.6-0.8-0.8-1.5c-1.1,0.8-2.2,1.4-3.4,1.9s-2.4,0.6-3.7,0.6c-2.1,0-3.8-0.6-5-1.8 s-1.8-2.8-1.8-4.8c0-2.2,0.8-3.9,2.3-5.1c1.5-1.2,3.7-1.8,6.5-1.8c0.6,0,1.3,0,2,0.1c0.7,0.1,1.5,0.2,2.4,0.4v-0.4 c0-1.3-0.3-2.3-0.9-3s-1.4-1-2.5-1c-0.9,0-2,0.4-3.3,1.1c-1.3,0.7-2.3,1.1-2.9,1.1c-0.6,0-1.1-0.2-1.5-0.6S58,13.4,58,12.7 c0-1.2,0.8-2.1,2.3-2.8s3.6-1,6.3-1c2.8,0,4.8,0.6,6,1.8c1.2,1.2,1.8,3.2,1.8,6.1L74.4,24.9L74.4,24.9z M69.6,20.7 c-0.6-0.2-1.2-0.3-1.8-0.4s-1.1-0.1-1.5-0.1c-1.4,0-2.6,0.3-3.4,0.8s-1.2,1.3-1.2,2.2c0,0.9,0.3,1.5,0.8,2s1.3,0.7,2.2,0.7 c0.9,0,1.8-0.1,2.5-0.4s1.6-0.8,2.4-1.4L69.6,20.7L69.6,20.7z"></path>
                        <path class="st1" d="M102.4,24.9h0.3c0.7,0,1.2,0.2,1.6,0.6s0.6,1,0.6,1.8c0,0.9-0.2,1.5-0.6,1.8c-0.4,0.4-1,0.6-1.9,0.6h-1.8 c-0.6,0-1.1-0.1-1.5-0.4c-0.3-0.3-0.6-0.8-0.8-1.5c-1.1,0.8-2.2,1.4-3.4,1.9s-2.4,0.6-3.7,0.6c-2.1,0-3.8-0.6-5-1.8 s-1.8-2.8-1.8-4.8c0-2.2,0.8-3.9,2.3-5.1c1.5-1.2,3.7-1.8,6.5-1.8c0.6,0,1.3,0,2,0.1c0.7,0.1,1.5,0.2,2.4,0.4v-0.4 c0-1.3-0.3-2.3-0.9-3s-1.4-1-2.5-1c-0.9,0-2,0.4-3.3,1.1c-1.3,0.7-2.3,1.1-2.9,1.1c-0.6,0-1.1-0.2-1.5-0.6S86,13.4,86,12.7 c0-1.2,0.8-2.1,2.3-2.8s3.6-1,6.3-1c2.8,0,4.8,0.6,6,1.8c1.2,1.2,1.8,3.2,1.8,6.1L102.4,24.9L102.4,24.9z M97.6,20.7 c-0.6-0.2-1.2-0.3-1.8-0.4s-1.1-0.1-1.5-0.1c-1.4,0-2.6,0.3-3.4,0.8s-1.2,1.3-1.2,2.2c0,0.9,0.3,1.5,0.8,2s1.3,0.7,2.2,0.7 c0.9,0,1.8-0.1,2.5-0.4s1.6-0.8,2.4-1.4L97.6,20.7L97.6,20.7z"></path>
                        <path class="st1" d="M128.2,10.6c0.2-0.6,0.4-1,0.7-1.3c0.3-0.3,0.8-0.4,1.3-0.4c0.7,0,1.2,0.2,1.5,0.7c0.3,0.5,0.5,1.3,0.5,2.5 v3.6c0,0.9-0.2,1.5-0.5,2c-0.3,0.4-0.8,0.6-1.5,0.6c-0.5,0-0.9-0.1-1.2-0.4c-0.3-0.2-0.7-0.7-1-1.4c-0.5-1-1.2-1.7-2-2.2 c-0.9-0.5-1.9-0.7-3.1-0.7c-1.5,0-2.8,0.6-3.8,1.7c-1,1.1-1.5,2.5-1.5,4.3c0,1.8,0.5,3.3,1.5,4.4s2.4,1.7,4,1.7 c1.5,0,3.1-0.5,4.6-1.4s2.5-1.4,2.8-1.4c0.5,0,0.9,0.2,1.2,0.6s0.5,0.9,0.5,1.6c0,1.4-0.9,2.6-2.8,3.7c-1.9,1.1-4.1,1.6-6.6,1.6 c-3.2,0-5.7-1-7.7-3s-3-4.5-3-7.7c0-3.1,1-5.6,2.9-7.6c2-2,4.4-3,7.4-3c1,0,2,0.1,2.9,0.4C126.3,9.6,127.3,10,128.2,10.6z"></path>
                        <path class="st1" d="M180.8,24.9h4.2c0.9,0,1.5,0.2,1.9,0.5s0.5,1,0.5,1.8c0,0.9-0.2,1.5-0.6,1.9s-1,0.6-1.9,0.6h-13.3 c-0.9,0-1.5-0.2-1.9-0.6s-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.5-1.8c0.4-0.4,1-0.5,1.9-0.5h4.2V5.9h-2.1c-0.9,0-1.5-0.2-1.9-0.6 c-0.4-0.4-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.6-1.9s1-0.6,1.9-0.6h5.9c0.4,0,0.6,0.1,0.9,0.2s0.3,0.4,0.3,0.7L180.8,24.9L180.8,24.9z"></path>
                        <path class="st1" d="M214.4,24.9h0.3c0.7,0,1.2,0.2,1.6,0.6s0.6,1,0.6,1.8c0,0.9-0.2,1.5-0.6,1.8c-0.4,0.4-1,0.6-1.9,0.6h-1.8 c-0.7,0-1.1-0.1-1.5-0.4s-0.6-0.8-0.8-1.5c-1.1,0.8-2.2,1.4-3.4,1.9s-2.4,0.6-3.7,0.6c-2.1,0-3.8-0.6-5-1.8s-1.8-2.8-1.8-4.8 c0-2.2,0.8-3.9,2.3-5.1c1.5-1.2,3.7-1.8,6.5-1.8c0.6,0,1.3,0,2,0.1c0.7,0.1,1.5,0.2,2.4,0.4v-0.4c0-1.3-0.3-2.3-0.8-3 c-0.6-0.7-1.4-1-2.5-1c-0.9,0-2,0.4-3.3,1.1c-1.3,0.7-2.3,1.1-2.9,1.1c-0.6,0-1.1-0.2-1.5-0.6s-0.6-0.9-0.6-1.6 c0-1.2,0.8-2.1,2.3-2.8s3.7-1,6.3-1c2.8,0,4.8,0.6,6,1.8s1.8,3.2,1.8,6.1L214.4,24.9L214.4,24.9z M209.6,20.7 c-0.7-0.2-1.2-0.3-1.8-0.4s-1.1-0.1-1.5-0.1c-1.4,0-2.6,0.3-3.4,0.8s-1.2,1.3-1.2,2.2c0,0.9,0.3,1.5,0.8,2s1.3,0.7,2.2,0.7 c0.9,0,1.8-0.1,2.5-0.4s1.6-0.8,2.3-1.4V20.7z"></path>
                        <path class="st1" d="M238.6,11.9v-1.6c0-0.3,0.1-0.5,0.3-0.7c0.2-0.1,0.5-0.2,0.8-0.2h3c0.9,0,1.5,0.2,1.9,0.6s0.5,1,0.5,1.8 c0,0.8-0.2,1.4-0.5,1.8c-0.4,0.4-0.9,0.6-1.6,0.6h-0.3v19.4h1.2c0.9,0,1.5,0.2,1.9,0.6s0.6,1,0.6,1.9c0,0.9-0.2,1.5-0.6,1.8 c-0.4,0.4-1,0.5-1.9,0.5h-8.3c-0.9,0-1.5-0.2-1.9-0.5s-0.5-1-0.5-1.8c0-0.9,0.2-1.5,0.6-1.9c0.4-0.4,1-0.6,1.9-0.6h2.5v-6 c-0.7,0.6-1.5,1.1-2.4,1.4c-0.9,0.3-1.9,0.5-3,0.5c-2.6,0-4.7-1-6.4-3s-2.5-4.5-2.5-7.6c0-2.9,0.9-5.3,2.6-7.2s4-2.9,6.6-2.9 c1.2,0,2.2,0.2,3.2,0.8C237.1,10.2,237.9,10.9,238.6,11.9z M233.5,13.6c-1.3,0-2.3,0.5-3.2,1.6c-0.8,1.1-1.2,2.4-1.2,4.1 s0.4,3,1.2,4.1c0.8,1.1,1.9,1.6,3.2,1.6s2.4-0.5,3.2-1.6c0.8-1.1,1.3-2.4,1.3-4.1c0-1.7-0.4-3-1.2-4.1S234.8,13.6,233.5,13.6z"></path>
                        <path class="st1" d="M265.5,14.2h-0.3c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.5-1-0.5-1.8c0-0.9,0.2-1.5,0.5-1.9c0.4-0.4,1-0.5,1.9-0.5 h3.7c0.3,0,0.6,0.1,0.8,0.2s0.3,0.4,0.3,0.7v14.5h0.3c0.7,0,1.2,0.2,1.6,0.6s0.6,1,0.6,1.8c0,0.9-0.2,1.5-0.6,1.9s-1,0.6-1.9,0.6 H267c-0.4,0-0.7-0.1-0.8-0.3c-0.2-0.2-0.3-0.4-0.3-0.7v-1.7c-0.6,1-1.4,1.9-2.3,2.4c-0.9,0.5-2,0.8-3.2,0.8c-2.1,0-3.7-0.7-4.7-2.1 c-1-1.4-1.5-3.6-1.5-6.5v-7.3h-0.3c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.5-1-0.5-1.8c0-0.9,0.2-1.5,0.6-1.9s1-0.5,1.9-0.5h3.7 c0.3,0,0.6,0.1,0.8,0.2s0.3,0.4,0.3,0.7v10.2c0,1.8,0.2,3.1,0.7,3.8s1.2,1.1,2.2,1.1c1.1,0,2-0.5,2.7-1.4s1-2.1,1-3.5L265.5,14.2 L265.5,14.2z"></path>
                        <path class="st1" d="M285.1,20.9c0.3,1.6,1,2.8,2,3.6c1,0.8,2.3,1.2,3.9,1.2c1.6,0,3.2-0.4,4.8-1.3c1.6-0.9,2.5-1.3,2.9-1.3 c0.5,0,0.9,0.2,1.2,0.6c0.3,0.4,0.5,0.9,0.5,1.5c0,1.4-0.9,2.6-2.7,3.6s-4,1.5-6.7,1.5c-3.2,0-5.7-1-7.7-3c-2-2-3-4.5-3-7.7 c0-3.1,1-5.7,3-7.7c2-2,4.5-3,7.7-3c2.8,0,5.2,0.9,7,2.8s2.8,4.2,2.8,6.9c0,0.9-0.2,1.5-0.6,1.8s-1.1,0.5-2.3,0.5L285.1,20.9 L285.1,20.9z M295.6,17.5c-0.2-1.4-0.8-2.4-1.7-3.2c-0.9-0.8-2.1-1.1-3.6-1.1c-1.4,0-2.6,0.4-3.4,1.1c-0.9,0.7-1.5,1.8-1.8,3.2 L295.6,17.5L295.6,17.5z"></path>
                        <path class="st1" d="M317.5,17.8v7.1h4.6c0.9,0,1.5,0.2,1.9,0.5s0.6,1,0.6,1.8c0,0.9-0.2,1.5-0.6,1.9s-1,0.6-1.9,0.6h-10.9 c-0.9,0-1.5-0.2-1.9-0.6s-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.6-1.8c0.4-0.4,1-0.5,1.9-0.5h1.5V14.2h-0.8c-0.9,0-1.5-0.2-1.9-0.6 s-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.5-1.9s1-0.5,1.9-0.5h4.2c0.3,0,0.6,0.1,0.8,0.2c0.2,0.2,0.3,0.4,0.3,0.7v3.2 c1.4-1.7,2.8-2.9,4-3.7s2.6-1.1,4-1.1c1.3,0,2.3,0.3,3.1,1c0.8,0.6,1.1,1.5,1.1,2.6c0,0.9-0.3,1.5-0.8,2.1c-0.5,0.5-1.2,0.8-2,0.8 c-0.6,0-1.3-0.2-2.1-0.7s-1.4-0.7-1.7-0.7c-0.6,0-1.4,0.3-2.2,1S318.7,16.5,317.5,17.8z"></path>
                        <path class="st1" d="M345.5,17.8v7.1h4.6c0.9,0,1.5,0.2,1.9,0.5s0.6,1,0.6,1.8c0,0.9-0.2,1.5-0.6,1.9s-1,0.6-1.9,0.6h-10.9 c-0.9,0-1.5-0.2-1.9-0.6s-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.6-1.8c0.4-0.4,1-0.5,1.9-0.5h1.5V14.2h-0.8c-0.9,0-1.5-0.2-1.9-0.6 c-0.4-0.4-0.6-1-0.6-1.9c0-0.9,0.2-1.5,0.5-1.9s1-0.5,1.9-0.5h4.2c0.3,0,0.6,0.1,0.8,0.2s0.3,0.4,0.3,0.7v3.2 c1.4-1.7,2.8-2.9,4-3.7s2.6-1.1,4-1.1c1.3,0,2.3,0.3,3.1,1c0.8,0.6,1.1,1.5,1.1,2.6c0,0.9-0.3,1.5-0.8,2.1c-0.5,0.5-1.2,0.8-2,0.8 c-0.6,0-1.3-0.2-2.1-0.7s-1.4-0.7-1.7-0.7c-0.6,0-1.4,0.3-2.2,1C347.7,15.5,346.7,16.5,345.5,17.8z"></path>
                        <path class="st1" d="M369.1,20.9c0.3,1.6,1,2.8,2,3.6c1,0.8,2.3,1.2,3.9,1.2s3.2-0.4,4.8-1.3s2.5-1.3,2.9-1.3 c0.5,0,0.9,0.2,1.2,0.6c0.3,0.4,0.5,0.9,0.5,1.5c0,1.4-0.9,2.6-2.7,3.6s-4,1.5-6.7,1.5c-3.2,0-5.7-1-7.7-3s-3-4.5-3-7.7 c0-3.1,1-5.7,3-7.7s4.5-3,7.7-3c2.8,0,5.2,0.9,7,2.8s2.8,4.2,2.8,6.9c0,0.9-0.2,1.5-0.6,1.8s-1.1,0.5-2.3,0.5L369.1,20.9 L369.1,20.9z M379.6,17.5c-0.2-1.4-0.8-2.4-1.7-3.2c-0.9-0.8-2.1-1.1-3.6-1.1c-1.4,0-2.6,0.4-3.4,1.1c-0.9,0.7-1.5,1.8-1.8,3.2 L379.6,17.5L379.6,17.5z"></path>
                    </g>
                </svg>
                    <br />
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="475 350 84 84" style="enable-background:new 130 -10 128 48;" xml:space="preserve">
                    <g class="st0">
                        <path d="M415.96,382.44l1.95,12.01l2.61-9.3c0.28-0.98,0.63-1.62,1.05-1.93c0.42-0.31,1.05-0.46,1.88-0.46s1.46,0.15,1.88,0.44 c0.42,0.29,0.78,0.94,1.07,1.95l2.71,9.3l1.86-12.01h-0.42c-0.88,0-1.55-0.23-2-0.68c-0.46-0.46-0.68-1.12-0.68-2 c0-0.96,0.23-1.64,0.7-2.05c0.46-0.41,1.27-0.61,2.4-0.61h5.74c1.12,0,1.92,0.21,2.39,0.62c0.47,0.41,0.71,1.09,0.71,2.04 c0,0.88-0.23,1.55-0.7,2c-0.46,0.46-1.13,0.68-1.99,0.68h-0.42l-3.05,15.41c-0.16,0.85-0.54,1.46-1.12,1.84 c-0.59,0.38-1.44,0.57-2.56,0.57c-1.11,0-1.95-0.19-2.54-0.57c-0.59-0.38-1.01-1-1.27-1.84l-2.86-9.5l-2.54,9.5 c-0.21,0.81-0.63,1.42-1.27,1.82c-0.63,0.4-1.5,0.6-2.59,0.6c-1.12,0-1.97-0.19-2.54-0.57c-0.57-0.38-0.94-1-1.1-1.84l-3.1-15.41 h-0.42c-0.86,0-1.52-0.23-1.97-0.68c-0.45-0.46-0.67-1.12-0.67-2c0-0.94,0.23-1.62,0.68-2.04c0.46-0.42,1.25-0.62,2.37-0.62h5.79 c1.12,0,1.91,0.21,2.37,0.62c0.46,0.41,0.68,1.09,0.68,2.04c0,0.88-0.22,1.55-0.67,2c-0.45,0.46-1.1,0.68-1.97,0.68H415.96z"></path>
                        <path d="M446.82,389.81c0.42,1.81,1.24,3.16,2.45,4.05c1.21,0.9,2.83,1.34,4.85,1.34c2.02,0,4.01-0.49,5.98-1.48 c1.97-0.99,3.16-1.48,3.56-1.48c0.6,0,1.09,0.22,1.48,0.67c0.38,0.45,0.57,1.02,0.57,1.72c0,1.53-1.13,2.85-3.39,3.96 c-2.26,1.11-5.06,1.66-8.4,1.66c-3.94,0-7.14-1.11-9.61-3.32c-2.47-2.21-3.7-5.06-3.7-8.54c0-3.47,1.23-6.31,3.7-8.52 c2.47-2.21,5.67-3.32,9.61-3.32c3.52,0,6.43,1.04,8.74,3.11c2.31,2.07,3.47,4.62,3.47,7.63c0,0.96-0.23,1.62-0.7,1.98 c-0.46,0.36-1.42,0.54-2.87,0.54H446.82z M459.98,386c-0.28-1.51-0.99-2.69-2.14-3.52s-2.64-1.25-4.48-1.25 c-1.77,0-3.2,0.39-4.28,1.18c-1.08,0.79-1.84,1.98-2.26,3.58H459.98z"></path>
                        <path d="M479.07,379.29c0.78-0.68,1.71-1.22,2.78-1.61s2.2-0.59,3.37-0.59c3.39,0,6.16,1.12,8.31,3.36 c2.16,2.24,3.23,5.11,3.23,8.61c0,3.19-1.1,5.86-3.3,8c-2.2,2.14-4.96,3.21-8.3,3.21c-1.58,0-2.95-0.27-4.11-0.82 c-1.16-0.55-2.11-1.36-2.84-2.45v1.61c0,0.33-0.13,0.58-0.38,0.77c-0.25,0.19-0.61,0.28-1.06,0.28h-3.76 c-1.11,0-1.89-0.21-2.36-0.62c-0.46-0.41-0.7-1.11-0.7-2.09c0-0.86,0.22-1.52,0.67-1.97c0.45-0.45,1.11-0.67,1.99-0.67h0.39v-21.19 h-0.39c-0.88,0-1.55-0.23-2.01-0.7c-0.46-0.46-0.7-1.13-0.7-2.01c0-0.96,0.24-1.65,0.71-2.08c0.47-0.42,1.27-0.63,2.39-0.63h4.57 c0.52,0,0.9,0.13,1.14,0.38c0.24,0.25,0.35,0.66,0.35,1.23V379.29z M484.46,382.29c-1.6,0-2.92,0.6-3.97,1.79 c-1.05,1.2-1.57,2.71-1.57,4.55c0,1.89,0.52,3.43,1.56,4.63c1.04,1.2,2.37,1.79,3.98,1.79s2.94-0.6,3.99-1.81 c1.05-1.2,1.57-2.74,1.57-4.61c0-1.82-0.53-3.34-1.59-4.54C487.39,382.89,486.06,382.29,484.46,382.29z"></path>
                        <path d="M553.87,394.3h0.42c0.88,0,1.54,0.22,1.98,0.67c0.44,0.45,0.66,1.1,0.66,1.97c0,0.96-0.23,1.65-0.7,2.08 c-0.46,0.42-1.25,0.63-2.36,0.63h-3.74c-0.47,0-0.83-0.09-1.09-0.28c-0.25-0.19-0.38-0.44-0.38-0.77v-1.71 c-0.8,1.09-1.82,1.92-3.08,2.5c-1.25,0.58-2.66,0.87-4.22,0.87c-3.19,0-5.86-1.09-8.01-3.26c-2.15-2.17-3.22-4.89-3.22-8.14 c0-3.38,1.09-6.19,3.26-8.42c2.17-2.23,4.94-3.34,8.29-3.34c1.16,0,2.28,0.19,3.38,0.57c1.1,0.38,2.1,0.92,3.02,1.62v-6.18h-3.25 c-1.12,0-1.92-0.22-2.39-0.65c-0.47-0.43-0.71-1.12-0.71-2.06c0-0.96,0.24-1.65,0.71-2.08c0.47-0.42,1.27-0.63,2.39-0.63h7.59 c0.55,0,0.93,0.11,1.14,0.34c0.2,0.23,0.31,0.65,0.31,1.27V394.3z M542.42,382.29c-1.6,0-2.92,0.6-3.97,1.79 c-1.05,1.2-1.57,2.71-1.57,4.55c0,1.89,0.52,3.43,1.56,4.63c1.04,1.2,2.37,1.79,3.98,1.79s2.94-0.6,3.99-1.81 c1.05-1.2,1.57-2.74,1.57-4.61c0-1.82-0.53-3.34-1.59-4.54C545.34,382.89,544.02,382.29,542.42,382.29z"></path>
                        <path d="M566.84,389.81c0.42,1.81,1.24,3.16,2.45,4.05c1.21,0.9,2.83,1.34,4.85,1.34c2.02,0,4.01-0.49,5.98-1.48 c1.97-0.99,3.16-1.48,3.56-1.48c0.6,0,1.09,0.22,1.48,0.67c0.38,0.45,0.57,1.02,0.57,1.72c0,1.53-1.13,2.85-3.39,3.96 c-2.26,1.11-5.06,1.66-8.4,1.66c-3.94,0-7.14-1.11-9.61-3.32c-2.47-2.21-3.7-5.06-3.7-8.54c0-3.47,1.23-6.31,3.7-8.52 c2.47-2.21,5.67-3.32,9.61-3.32c3.52,0,6.43,1.04,8.74,3.11c2.31,2.07,3.47,4.62,3.47,7.63c0,0.96-0.23,1.62-0.7,1.98 c-0.46,0.36-1.42,0.54-2.87,0.54H566.84z M580,386c-0.28-1.51-0.99-2.69-2.14-3.52s-2.64-1.25-4.48-1.25 c-1.77,0-3.2,0.39-4.28,1.18c-1.08,0.79-1.84,1.98-2.26,3.58H580z"></path>
                        <path d="M599.19,382.44l4.4,10.4l4.61-10.4h-0.39c-0.88,0-1.55-0.23-2.01-0.68c-0.46-0.46-0.7-1.12-0.7-2 c0-0.96,0.23-1.64,0.7-2.05c0.46-0.41,1.27-0.61,2.41-0.61h5.74c1.14,0,1.94,0.21,2.4,0.62c0.46,0.41,0.7,1.09,0.7,2.04 c0,0.88-0.23,1.55-0.68,2c-0.46,0.46-1.12,0.68-2,0.68h-0.42l-7.25,15.41c-0.54,1.11-1.02,1.79-1.45,2.04 c-0.43,0.25-1.09,0.38-1.99,0.38c-1.63,0-2.73-0.68-3.3-2.05c-0.07-0.16-0.11-0.28-0.15-0.37l-6.81-15.41h-0.39 c-0.88,0-1.55-0.23-2.01-0.68c-0.46-0.46-0.7-1.12-0.7-2c0-0.96,0.24-1.64,0.71-2.05c0.47-0.41,1.27-0.61,2.39-0.61h6.2 c1.12,0,1.92,0.21,2.39,0.62c0.47,0.41,0.71,1.09,0.71,2.04c0,0.88-0.23,1.55-0.7,2c-0.46,0.46-1.13,0.68-1.99,0.68H599.19z"></path>
                    </g>
                </svg>
                </div>
            </div>
            <div class="skills">
                <h3 class="html">HTML</h3>
                <h3 class="js">JS</h3>
                <h3 class="css">CSS</h3>
            </div>
        </div>

        <div class="spacer" style="height: 60vh;"></div>

        <div id="about" class="section" style="margin-top: 0;">
            <div class="center">
                <div class="card center">
                    <h1>À propos de moi</h1>
                    <img src="assets/images/profile.png" style="width: 250px; clip-path: circle(125px at center); margin: 25px 0 5px;">
                    <h2 style="text-align: left;">Qui je suis</h2>
                    <br />
                    <p style="text-align: left;">Je suis Isaac, un développer web full-stack autodidacte de <span id="age"></span> ans spécialisé en HTML, CSS, JavaScript et Node.js. J'ai toujours adoré programmer, en commençant par des petits projets commes des plugins
                        Minecraft en Java, des jeux d'interface de ligne de commande en C++ et en JavaScript, des robots Discord avec Node.js et des algorithmes en Python, pour finalement découvrir le monde merveilleux du développement web. Je possède une bonne maîtrise de l'anglais et du français et mes qualités d'adaptation me permettent de réaliser votre site personalisé pour établir votre présence en ligne.</p>
                    <br /><br />
                    <h2 style="text-align: left;">Mon expérience</h2>
                    <br />
                    <ul style="text-align: left;">
                        <li>Utilisé Node.js, JavaScript, HTML & CSS pendant plus de <span id="experience"></span> ans</li>
                        <li>Travaillé dans le développement web à mon compte pour les <span id="freelanceExperience"></span> dernières années</li>
                        <li>Comfortable avec ReactJS, GitHub, Amazon Web Services, CloudFlare et autres installations DNS</li>
                        <li>Travaillé avec C#, C++, Python, Ruby (+ Rails), Java et Lua</li>
                    </ul>
                    <br />
                    <p style="text-align: left; font-size: 18pt"><a href="../../assets/cv.pdf" target="_blank" style="text-decoration: underline; color: white;">Curriculum Vitae</a></p>
                </div>
            </div>
        </div>

        <div class="spacer" style="height: 100px;"></div>

        <div id="services" class="section">
            <div class="card center" style="padding: 25px;">
                <h1>Mes services</h1>
                <ul style="text-align: left;">
                    <li>Mise en page complète de site web avec des pages (mise en page personalisée pour mobile incluse)</li>
                    <li>Modules intéractifs, formulaires, support e-mail, boutique en ligne et plus</li>
                    <li>Installer un API RESTful sécuritaire</li>
                    <li>Intégrer un système de connexion (log-in) avec sessions</li>
                    <li>Traiter l'installation du côté serveur avec la possibilité de lier une base de donnée à votre site</li>
                    <li>Traiter l'installation (complètement personalisée) d'une base de donnée</li>
                </ul>
            <div class="carousel-arrow left" onclick="carouselLeft();"></div>
            <div class="carousel-arrow right" onclick="carouselRight();"></div>
            <div class="image-carousel" onclick="displaySlide(this.children[parseInt(document.querySelector('ul.carousel-pages li.selected').id.split('-')[2]) - 1]);">
                <img id="carousel-1" src="assets/images/image-carousel/images/buddhiyoga.png">
                <img id="carousel-2" src="assets/images/image-carousel/images/studiolovelies.png">
                <img id="carousel-3" src="assets/images/image-carousel/images/gamegrumpsjointjustice.png">
            </div>
            <ul class="carousel-pages center">
                <li id="carousel-index-1" class="carousel-page selected" onclick="carouselPage(1);">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                </li>
                <li id="carousel-index-2" class="carousel-page" onclick="carouselPage(2);">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                </li>
                <li id="carousel-index-3" class="carousel-page" onclick="carouselPage(3);">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                </li>
            </ul>
            </div>
        </div>

        <div id="projects" class="section">
            <h1 class="center" style="margin-bottom: 25px;">Projets</h1>
            <div class="projects">
                <div class="card center project">
                    <h1>BuddhiYoga</h1>
                    <h3 style="font-weight: 300;">Site web personalisé avec planificateur en-ligne, boutique, section administrateurs, blogue et support e-mail</h3>
                    <img src="assets/images/projects/buddhiYoga.png">
                    <span style="font-weight: 300;">HTML, JS & CSS</span>
                    <br />
                    <br />
                    <span class="link" onclick="window.open('https://buddhiyoga.ca');">https://budhiyoga.ca</span>
                </div>
                <br /><br />
                <div class="card center project">
                    <h1>Studio Lovelies</h1>
                    <h3 style="font-weight: 300;">Site web informatif avec support e-mail</h3>
                    <h3 style="font-weight: 300;">Programmeur en chef, projet volontaire</h3>
                    <img src="assets/images/projects/studioLovelies.png">
                    <span style="font-weight: 300;">HTML, JS & CSS</span>
                    <br />
                    <br />
                    <span class="link" onclick="window.open('https://studiolovelies.com');">https://studiolovelies.com</span>
                </div>
                <br /><br />
                <div class="card center project">
                    <h1>Game Grumps: Joint Justice par Studio Lovelies</h1>
                    <h3 style="font-weight: 300;">Jeu 2D</h3>
                    <h3 style="font-weight: 300">Plus de 3000 téléchargements, <a href="https://www.youtube.com/watch?v=Skop4WFElhE" target="_blank" style="text-decoration: underline; color: white;">présenté sur la chaîne YouTube "Game Grumps" pour leur anniversaire de 9 ans</a></h3>
                    <img src="assets/images/projects/gameGrumpsJointJustice.png">
                    <span style="font-weight: 300;">Lua, propulsé par LÖVE</span>
                    <br />
                    <br />
                    <span class="link" onclick="window.open('https://www.youtube.com/watch?v=dAQUyvF43c4');">https://www.youtube.com/watch?v=dAQUyvF43c4</span>
                </div>
                <br /><br />
            </div>
        </div>

        <div id="contact" class="section">
            <div class="center">
                <h1 class="center" style="margin-bottom: 25px;">Contact</h1>
                <div class="container card" style="width: 75%; margin: 50px auto; position: relative;">
                    <h2 class="center" style="font-weight: 400;">Besoin de me contacter?</h2>
                    <h3 class="center" style="font-weight: 300;">Envoyez-moi un e-mail!</h3>
                    <div class="container center" style="margin: 50px auto; width: 75%; display: flex; justify-content: center;">
                        <form style="width: 100%; text-align: left;" @submit.prevent="sendEmail">
                            <div>
                                <label for="exampleInputEmail1">Addresses e-mail: </label>
                                <input type="email" id="email" v-model="email" aria-describedby="emailHelp" placeholder="E-mail" required>
                                <small id="emailHelp"><br />Votre addresse e-mail ne sera jamais partagée.</small>
                            </div>
                            <div style="margin-top: 25px;">
                                <label for="exampleInputEmail1">Sujet: </label>
                                <input type="text" id="subject" v-model="subject" aria-describedby="emailHelp" placeholder="Sujet">
                            </div>
                            <div style="margin-top: 25px;">
                                <label for="exampleInputPassword1">Message:</label><br />
                                <textarea class="form-control" id="message" v-model="message" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" id="submit">Envoyer <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="footer-content">
                <ul>
                    <li>
                        <a href="#about">À propos</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#projects">Projets</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <ul id="socialMedia" style="position: absolute; right: 15px; top: 0;">
                    <li>
                        <a href="https://www.instagram.com/isaac.laquerre/" target="_blank" style="color: white;">
                            <svg width="40" height="40" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" style="filter: invert(1);" fill-rule="evenodd" clip-rule="evenodd">
                                    <path xmlns="http://www.w3.org/2000/svg" d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/IsaacLaquerre/" target="_blank" style="color: white;">
                            <svg width="40" height="40" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" style="filter: invert(1);" fill-rule="evenodd" clip-rule="evenodd">
                                <path xmlns="http://www.w3.org/2000/svg" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div class="center">
                    <span style="font-size: 10pt;">Copyright © 2021 Isaac Laquerre - Tous droits réservés</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "@emailjs/browser";

emailjs.init("user_w9cTeehWqoxZ7kXe4o3Iq");

export default {
  name: 'PageAccueil',
  props: {
    title: String
  },
  data() {
      return {
        email: '',
        subject: '',
        message: ''
      }
  },
  methods: {
      sendEmail() {

        emailjs.send("service_zgzfljf", "template_focrvuj", {
            from_name: this.email,
            reply_to: this.email,
            subject: this.subject,
            message: this.message
        }).then(() => {
            alert("E-mail envoyé avec succès.");

            this.email = ''
            this.subject = ''
            this.message = ''
        }).catch(err => {
            alert("Erreur interne. Impossible d'envoyer le e-mail. Veuillez réessayer dans quelques minutes.");
            console.log(err);
        });

      }
  }
}
</script>

<style scoped>
</style>
