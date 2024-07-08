---
layout: default
title: Muhammad Taky Tahmid
---

<style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(to right, #f5f5f5, #dfe9f3);
    color: #333;
  }
  h1 {
    color: #1abc9c;
    text-align: center;
    margin-top: 50px;
    font-size: 3em;
  }
  .tabs {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .tab {
    padding: 15px 25px;
    cursor: pointer;
    background: #2980b9;
    color: white;
    margin: 0 10px;
    border-radius: 10px;
    font-size: 1.2em;
    transition: background 0.3s;
  }
  .tab:hover {
    background: #3498db;
  }
  .tab.active {
    background: #e74c3c;
  }
  .tab-content {
    display: none;
    max-width: 800px;
    margin: 20px auto;
    padding: 30px;
    background: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    animation: fadeIn 0.5s;
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
    background: #ecf0f1;
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    transition: background 0.3s;
  }
  ul li:hover {
    background: #bdc3c7;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>

<h1>Muhammad Taky Tahmid</h1>

<div class="tabs">
  <div class="tab active" onclick="showTab('about')">About Me</div>
  <div class="tab" onclick="showTab('education')">Education</div>
  <div class="tab" onclick="showTab('experience')">Experience</div>
  <div class="tab" onclick="showTab('skills')">Skills</div>
  <div class="tab" onclick="showTab('certifications')">Certifications</div>
  <div class="tab" onclick="showTab('projects')">Projects</div>
  <div class="tab" onclick="showTab('contact')">Contact</div>
</div>

<div id="about" class="tab-content active">
  <img src="https://via.placeholder.com/800x200.png?text=About+Me" alt="About Me">
  <p>I am an experienced consultant, urban planner, and environmental economist with a hands-on background in urban and city planning, urban management, master plan, and development plan preparation. I have expertise in GIS, remote sensing, water modeling, and environmental assessments, including site clearance and environmental clearance processes.</p>
</div>

<div id="education" class="tab-content">
  <img src="https://via.placeholder.com/800x200.png?text=Education" alt="Education">
  <ul>
    <li>Bachelor of Urban and Regional Planning from Bangladesh University of Engineering and Technology (2010-2015)</li>
    <li>Masters in Environmental Economics from Dhaka School of Economics, University of Dhaka (2017-2019)</li>
  </ul>
</div>

<div id="experience" class="tab-content">
  <img src="https://via.placeholder.com/800x200.png?text=Experience" alt="Experience">
  <ul>
    <li><strong>Marian R. Okie Fellow</strong> at University of Delaware, School of Marine Science and Policy (August 2022 - Present)</li>
    <li><strong>Lecturer</strong> at Dhaka School of Economics, University of Dhaka (April 2021 - August 2022)</li>
    <li><strong>Environmental Economist and Consultant</strong> at APARAJITA Design Development Limited, Dhaka (November 2020 - April 2021)</li>
    <li><strong>Technical Consultant</strong> at Unimax Consultants Ltd., Dhaka, Bangladesh (February 2021 - March 2021)</li>
    <li><strong>Assistant Manager (GIS Expert)</strong> at Eastern Housing Limited (October 2019 - March 2021)</li>
    <li><strong>Urban Planner</strong> at Institute of Water Modelling (December 2018 - June 2019)</li>
    <li><strong>Junior Urban Planner</strong> at Engineering and Consultants Associates Ltd (July 2015 - May 2016)</li>
    <li><strong>Intern</strong> at Local Government Engineering Department, Bangladesh (January 2015 - February 2015)</li>
  </ul>
</div>

<div id="skills" class="tab-content">
  <img src="https://via.placeholder.com/800x200.png?text=Skills" alt="Skills">
  <ul>
    <li>Analytical Skills</li>
    <li>GIS Tool-based Analysis</li>
    <li>Data Analysis</li>
    <li>Water Modeling</li>
    <li>Hydrologic and Hydrodynamic Analysis</li>
    <li>Environmental Sector Expertise (Site Clearance, Environmental Clearance)</li>
  </ul>
</div>

<div id="certifications" class="tab-content">
  <img src="https://via.placeholder.com/800x200.png?text=Certifications" alt="Certifications">
  <ul>
    <li>Secondary School Certificate</li>
  </ul>
</div>

<div id="projects" class="tab-content">
  <img src="https://via.placeholder.com/800x200.png?text=Projects" alt="Projects">
  <ul>
    <li><strong>Sonagazi Solar Power LTD. (50 MW AC) Solar Park at Sonagazi, Feni</strong>: Chief Consultant and Urban Planner - Provided consultancy services for site clearance, environmental clearance, and detailed topographic survey.</li>
    <li><strong>Faridpur Sadar Upazila Development Plan</strong>: Project Coordinator - Managed the development plan preparation, introduced smart water and sanitation solutions, and coordinated data collection and analysis.</li>
  </ul>
</div>

<div id="contact" class="tab-content">
  <img src="https://via.placeholder.com/800x200.png?text=Contact" alt="Contact">
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
