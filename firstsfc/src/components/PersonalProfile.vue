<template>
<body> 
  <nav>
    <h1>Charles Capagngan | Portfolio</h1>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#goalsinlife">Goals in Life</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <section id="home" class="hero">
    <div class="hero-content">
      <img src="assets/photo.jpg" alt="Charles Capagngan" class="profile-pic">
      <div class="hero-text">
        <h2>Hi, I'm <span id="dynamic-name"></span>!</h2>
        <p>IT Student | Aspiring Cybersecurity</p>
        <a href="#projects" class="btn">View My Work</a>
      </div>
    </div>
  </section>

  <section id="about">
    <h2>About Me</h2>
    <p>
      Second Year IT student based in Makati. 
      <br>
      Strong interest in Cybersecurity, Particularly in Blue Teaming.
      <br>
      Outside, i like to hangout with my friends and those that are close around me.
      <br>
      I also like to explore and enhance my overall skills.
    </p>
  </section>

  <section id="goalsinlife">
    <h2>Goals in Life</h2>
    <div class="container">
      <div class="dropdown-container">
        <div class="dropdown">
          <button class="dropdown-button" onclick="toggleDropdown('desc1')">
            <img src="assets/airplane.jpg" alt="airplane" class="photo">
            <span class="button-title">Travel</span>
          </button>
          <div id="desc1" class="dropdown-content">
            <p>I would like to someday travel around the world to see the beauties of the nature.</p>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropdown-button" onclick="toggleDropdown('desc2')">
            <img src="assets/money.jpg" alt="money" class="photo">
            <span class="button-title">Financial Freedom</span>
          </button>
          <div id="desc2" class="dropdown-content">
            <p>To be financially stable is the goal in my life. Not rich, but just enough to be able to enjoy life to the fullest.</p>
          </div>
        </div>

        <div class="dropdown">
          <button class="dropdown-button" onclick="toggleDropdown('desc3')">
            <img src="assets/retire.jpg" alt="retirement" class="photo">
            <span class="button-title">Early Retirement</span>
          </button>
          <div id="desc3" class="dropdown-content">
            <p>To retire early in life is one of the biggest goal that i may achieve. Being able to enjoy life while also enjoying the youth.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="experience">
    <h2>IT Experience</h2>
    <div class="card">
      <h3>Networking</h3>
      <span>2024 (DNETCOM)</span>
      <p>Configuration and setups of networks.</p>
    </div>
    <div class="card">
      <h3>Operating System</h3>
      <span>2024-2025 (OPESYS)</span>
      <p>Bash commands and IAM in Ubuntu Linux.</p>
    </div>
    <div class="card">
      <h3>Python</h3>
      <span>2024 (DATASTRUC)</span>
      <p>Algorithms and Functions.</p>
    </div>
    <div class="card">
      <h3>Website Programming</h3>
      <span>Currently (WEBPROG)</span>
      <p>Currently learning how creating a website works.</p>
    </div>
  </section>

  <section id="projects">
    <h2>Projects</h2>

    <div class="project">
      <h3>Quickly Aid</h3>
      <p>An emergency incident reporter in mobile phone</p>
      <span>Kotlin • Java • Firebase</span>
    </div>

    <div class="project">
      <h3>Shuttle Ticketing System</h3>
      <p>A shuttle ticketing system for Asia Pacific College</p>
      <span>HTML • CSS • JS • Python</span>
    </div>
  </section>

  <section id="contact">
    <h2>Contact Me!</h2>
    <p>Email: cbcapagngan2@student.apc.edu.ph</p>
    <p>GitHub: github.com/charlespogi123</p>
    <p>LinkedIn: linkedin.com/in/charles-capagngan-55286924a</p>
  </section>
</body>
</template>

<script src="./js/script.js"></script> 
<style src="./css/style.css"></style>