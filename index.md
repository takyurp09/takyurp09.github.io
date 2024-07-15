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
    background: url('https://images.unsplash.com/photo-1609692029268-f9ba9b2a728b?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFkZHklMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D') no-repeat center center fixed;
    background-size: cover;
    color: #ffffff;
    position: relative;
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
    flex-wrap: wrap;
  }

  .tab {
    padding: 15px 25px;
    cursor: pointer;
    background: rgba(41, 128, 185, 0.8);
    color: white;
    margin: 10px 5px;
    border-radius: 10px;
    font-size: 1.2em;
    transition: background 0.3s;
    text-align: center;
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
    flex-wrap: wrap;
  }

  .profile-picture img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-right: 20px;
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons img {
    width: 48px;
    height: 48px;
  }

  .home-image {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 150px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    .header {
      flex-direction: column;
      text-align: center;
    }

    .profile-picture img {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
    }

    h1 {
      margin-top: 20px;
      font-size: 1.8em;
    }

    .tabs {
      flex-direction: column;
      align-items: center;
    }

    .tab {
      width: 100%;
      margin: 5px 0;
    }

    .tab-content {
      padding: 20px;
    }
  }
</style>

<div class="header">
  <h1>Muhammad Taky Tahmid</h1>
  <div class="profile-picture">
    <img src="https://media.licdn.com/dms/image/D4E03AQHkcsxKJ-mhgA/profile-displayphoto-shrink_200_200/0/1665463231322?e=2147483647&v=beta&t=Q7iU0XPl9X3djGah8jyzv5wvsRXrbTAQENcWzFYWILo" alt="Muhammad Taky Tahmid">
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
  <div>
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
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*TGATqkXS3Y1FVZIC4X-LzA.png" alt="Climate Change Image" class="home-image">
  </div>
</div>

<div id="projects" class="tab-content">
  <ul>
    <li><strong>Sonagazi Solar Power LTD. (50 MW AC) Solar Park at Sonagazi, Feni</strong>: Chief Consultant and Urban Planner - Provided consultancy services for site clearance, environmental clearance, and detailed topographic survey.</li>
    <li><strong>Faridpur Sadar Upazila Development Plan</strong>: Project Coordinator - Managed the development plan preparation, introduced smart water and sanitation solutions, and coordinated data collection and analysis.</li>
    <li>Check out my GitHub page for my completed projects and coding tutorials: <a href="https://github.com/takyurp09" target="_blank">GitHub</a></li>
  </ul>
</div>

<div id="resume" class="tab-content">
  <ul>
    <li><a href="https://drive.google.com/file/d/1iHfOn-NRr9go1gjN84x5ou_8uhCqfOO3/view?usp=sharing" target="_blank">Take a look at my professional journey and explore my resume here.</a></li>
  </ul>
</div>

<div id="tutorial" class="tab-content">
  <p>
    We are here to help you navigate the intersection of R, Python, STATA, Excel, and economics. Whether you're a student, a professional, or an enthusiast, this page offers you a guide to mastering the tools and concepts that drive modern economics.
  </p>
  <p>
    Check out my YouTube channel: <a href="https://www.youtube.com/@EconCode_with_Taky" target="_blank">EconCode with Taky</a>
    <a href="https://www.youtube.com/@EconCode_with_Taky" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" style="width:48px; height:48px;"></a>
  </p>
</div>

<div id="about" class="tab-content">
  <p>About Me</p>
</div>

<div id="contact" class="tab-content">
  <p>Feel free to reach out to me for any professional inquiries or collaborations.</p>
  <div class="social-icons">
    <a href="mailto:takyurp09@gmail.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail"></a>
    <a href="https://www.linkedin.com/in/muhammad-taky-tahmid-482397100/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn"></a>
    <a href="https://www.facebook.com/ykat.dimhat" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook"></a>
    <a href="https://twitter.com/TakyTahmid" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter"></a>
  </div>
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
