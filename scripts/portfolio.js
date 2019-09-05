// no separate functions used to create HTML as material is not changing
'use strict';
                           
const portfolio = (function () {
  
  //calls the renderHeader() function to start the chain to run the page
  const render = function () {
    console.log('render ran');
    renderMainHtml();
    renderPhoto();
    renderProjects();
  };

  const renderMainHtml = function () {
    console.log('renderMainHtml ran');
    $('.section--display--add').html(`
    
    <!-- ABOUT ME 1/2 -->
    <section class="section section--display--about1">
      <div class="anchor">
        <a id="about">&nbsp;</a>
        <h1 class="h1 target-label">hello world</h1>
      </div>
      <!-- replace the following div later with that image -->
      <div class="div div--display--addPhotoOfMe"></div>
      <p>I'm <em>Phoebe Law</em>,</br>
      <em>Junior Full-stack Javascript Developer</em>.</p>
      <p>I love making beautifully functional (and functionally beautiful) things.</p>
      <div class="div--open--about2"><span class="open-text">More</span> <i class="fas fa-chevron-down"></i></div>
    
      <!-- ABOUT ME 2/2 -->
      <section class="section section--display--about2 hidden">
        <h2>Who am I?</h2>
        <p class="p--style--tDecoration">24601</p>
        <h3>tl;dr</h3>
        <p>I’ve always been creative and liked problem-solving, but wasn’t able to see myself working with technology for a while. Over time I’ve seen the overlap in my abilities and interests with coding and finally took the plunge. After a Bachelor’s in Linguistics and 2.5 years in administration and operations, I’m here to take my shot.</p>
        <h3>Longer Story</h3>
        <p>I never thought I would be in computers. I wasn’t single-minded enough for that. Sure, I was focused and had an engineer-y mind, but had too many interests. As a creative I liked figuring out the inner-workings of the world but lacked direction. While I appreciated the practicality of technology (I was unofficially my family’s support person), I hated how consuming it was for the majority of my world. Also, I thought software was uninteresting because looking at binary all day seemed boring (yeah, I thought only binary was used… I was a smart kid).</p>
        <p>Fast-forward into adulthood, when things get nuanced and when what I considered black or white, with my more developed eyes, often turned out to be more gray. And also, suddenly money is something I need to survive and not just a concept I can scoff at (save your laughs for later, folks). What could I do that I could enjoy and thrive in? While I wasn’t in a terrible place career-wise, I wanted to grow to my potential and knew I had to move on.</p>
        <p>The first time the parallel between what I did and what I could do clicked was when I was organizing my many incoming emails with rules. I was making it very specialized, where ordering rules mattered and one small selection had many big effects. The thought process was a lot like symbolic logic I learned in college, but practically applied (I always thought symbolic logic was mostly useful for people taking the LSAT/law careers). My degree in Linguistics gave me an idea of what programming would be like, and though then it was just a small idea, I thought: “Huh. I can actually do this. And it can be just as practical as what I am doing now.”</p>          
        <p>So I did.</p>
        </section>
        
      <h2>My skills include:</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    </section>

    <!-- MY PROJECTS -->
    <section class="section section--display--projects">
    <div class="anchor">
      <a name="my-projects">&nbsp;</a>
      <h2 class="target-label">My Projects</h2>
    </div>
    <div class="div div--display--addProject"></div>
    </section>

    <!-- CONTACT -->
    <section class="section section--display--contact" id="Contact">
      <div class="anchor">
        <a id="contact">&nbsp;</a>
        <h2 class="target-label">Help Yourself to Some Connects</h2>
      </div>
      <ul class="fa-ul">
        <li class="li--transform--hover"><a href="https://www.linkedin.com/in/phoebemlaw/"><span class="fa-li"><i class="fas fa-cookie"></i></span>LinkedIn</a></li>
        <li class="li--transform--hover"><a href="https://github.com/shiningjustice/"><span class="fa-li"><i class="fas fa-cookie-bite"></i></span>Github</a></li>
        <li class="li--transform--hover"><a href="mailto:phoebebasilio@gmail.com">Email (phoebebasilio@gmail.com)</a></li>
      </ul>
    </section>
  `);
  };

  const renderPhoto = function () {
    console.log('renderPhoto ran');
    let photoUrl = generatePhoto();
    $('.div--display--addPhotoOfMe').html(`
      <img src=${photoUrl} alt="Photo of Phoebe Law">
    `);
  };

  const generatePhoto = function () {
    let index = Math.floor(Math.random() * (store.photosUrls.length-1));
    return store.photosUrls[index];
  };

  const renderProjects = function () {
    console.log('renderProjects ran');
    const projectHtml = generateProjectString(store.projects);
    $('.div--display--addProject').html(projectHtml);
  }; 

  const generateProjectString = function (projects) {
    console.log('generateProjectString ran');
    const projectString = [];
    store.projects.forEach(function (project) {
      projectString.push(generateProjectHtml(project.name, project.subtitle, project.imageUrl, project.description, project.skillsApplied, project.liveSiteUrl, project.githubUrl));
    });
    console.log(projectString);
    return projectString.join('');
  }; 

  const generateProjectHtml = function (name, subtitle, imageUrl, description, skillsApplied, liveSiteUrl, githubUrl) {
    let skillsFormatted = generateSkills(skillsApplied);
    console.log('generateProjectHtml ran');
    return  `
      <h3 class="h3 h3--justifyAlign--center">${name}: ${subtitle}</h3>
      <div class="div project-box div--size--contain div--style--box div--overlay--text">
        <img src="${imageUrl}" alt="A screenshot of Phoebe's ${name} project" class="img--size--fit">
        <div class="div div--backgroundColor--longerText">
          <p>${description}<p>
          <div class="div div--justify--spaceAround div--font--font1Italic">${skillsFormatted}</div>
          <div class="div--justify--spaceAround div--spacing--upMarginTop">
            <div class="div div--transform--onHover"><a class="a--format--removeStyle" href="${liveSiteUrl}">View Live Site</a></div>
            <div class="div div--transform--onHover"><a class="a--format--removeStyle" href="${githubUrl}">View Github</a></div>
          </div>
        </div>
      </div>
    `;
  };

  const generateSkills = function (skillsArray) {
    let skillsFormatted = [];
    skillsArray.forEach(skill => {
      skillsFormatted.push(`<div>${skill}</div>`);
      console.log(skill);
    });
    return skillsFormatted.join('');
  };

  const handleAbout2 = function () {
    $('.section--display--add').on('click', '.div--open--about2', function () {
      console.log('handleAbout2 ran');
      toggleDisplayAbout2();
      if ($('.section--display--about2').hasClass('hidden')) {
        $(this).html(`More <i class="fas fa-chevron-down"></i>`);
      }
      else {
        $(this).html(`Less <i class="fas fa-chevron-up"></i>`);
      }
    });
  };
  
  const toggleDisplayAbout2 = function() {
    $('.section--display--about2').toggleClass('hidden');
  };

  const setAllHandlers = function () {
    handleAbout2();
  };


  return {
    render,
    setAllHandlers
  };
})();