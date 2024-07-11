---
layout: default
title: Muhammad Taky Tahmid
---

<style>
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(45deg, #1abc9c, #3498db, #9b59b6, #e74c3c);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    color: #ffffff;
  }

  h1 {
    color: #ffffff;
    text-align: left;
    margin-top: 50px;
    font-size: 2.5em;
  }

  .tabs {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .tab {
    padding: 15px 25px;
    cursor: pointer;
    background: rgba(41, 128, 185, 0.8);
    color: white;
    margin: 0 10px;
    border-radius: 10px;
    font-size: 1.2em;
    transition: background 0.3s;
  }

  .tab:hover {
    background: rgba(52, 152, 219, 0.8);
  }

  .tab.active {
    background: rgba(231, 76, 60, 0.8);
  }

  .tab-content {
    display: none;
    max-width: 800px;
    margin: 20px auto;
    padding: 30px;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    animation: fadeIn 0.5s;
    color: #ffffff;
  }

  .tab-content.active {
    display: block;
  }

  .tab-content img {
    max-width: 100%;
    border-radius: 15px;
    margin-bottom: 20px;
  }

  .contact-info a {
    color: #e74c3c;
    text-decoration: none;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    background: rgba(236, 240, 241, 0.8);
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    transition: background 0.3s;
    color: #333;
  }

  ul li:hover {
    background: rgba(189, 195, 199, 0.8);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .profile-picture img {
    border-radius: 50%;
    max-width: 150px;
    margin-right: 20px;
  }
</style>

<div class="header">
  <h1>Muhammad Taky Tahmid</h1>
  <div class="profile-picture">
    <img src="https://drive.google.com/uc?export=view&id=1gvCHANViXy_33rLT7cP0GNQpLcMeQYTM" alt="Muhammad Taky Tahmid">
  </div>
</div>

<div class="tabs">
  <div class="tab active" onclick="showTab('home')">Home</div>
  <div class="tab" onclick="showTab('projects')">Projects</div>
  <div class="tab" onclick="showTab('resume')">Resume</div>
  <div class="tab" onclick="showTab('tutorial')">Tutorial</div>
  <div class="tab" onclick="showTab('about')">About Me</div>
  <div class="tab" onclick="showTab('contact')">Contact</div>
</div>

<div id="home" class="tab-content active">
  <p>
    Welcome to My Site! I'm <b style="color: #007BFF;">Muhammad Taky Tahmid</b>, a PhD student in Environmental Economics at the University of Delaware. My passion lies in exploring the profound impacts of climate change on society, particularly within the realms of agriculture and national output. I'm also on an exciting journey to integrate machine learning into my climate change research, blending innovation with vital environmental studies.
  </p>
  <p>
    I absolutely love to code and am proficient in both R and Python. But more than anything, I love to teach and share knowledge. Here, you'll find a showcase of my research, experiences, and tutorials. I'll also be sharing insightful blogs, so stay tuned!
  </p>
  <p>
    Let's embark on this journey together, learning and growing along the way!
  </p>
  <p>
    Stay Tuned!
  </p>
</div>

<div id="projects" class="tab-content">
  <ul>
    <li><strong>Sonagazi Solar Power LTD. (50 MW AC) Solar Park at Sonagazi, Feni</strong>: Chief Consultant and Urban Planner - Provided consultancy services for site clearance, environmental clearance, and detailed topographic survey.</li>
    <li><strong>Faridpur Sadar Upazila Development Plan</strong>: Project Coordinator - Managed the development plan preparation, introduced smart water and sanitation solutions, and coordinated data collection and analysis.</li>
  </ul>
</div>

<div id="resume" class="tab-content">
  <ul>
    <li><a href="https://drive.google.com/file/d/1iHfOn-NRr9go1gjN84x5ou_8uhCqfOO3/view?usp=sharing" target="_blank">View My Resume</a></li>
  </ul>
</div>

<div id="tutorial" class="tab-content">
  <ul>
  </ul>
</div>

<div id="about" class="tab-content">
  <ul>
  </ul>
</div>

<div id="contact" class="tab-content">
  <p>Feel free to reach out to me through email or LinkedIn for any professional inquiries or collaborations.</p>
  <p>Email: <a href="mailto:takyurp09@gmail.com">takyurp09@gmail.com</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/muhammad-taky-tahmid-482397100/">Muhammad Taky Tahmid</a></p>
</div>

<script>
  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.querySelector('.tab[onclick="showTab(\'' + tabId + '\')"]').classList.add('active');
  }
</script>
