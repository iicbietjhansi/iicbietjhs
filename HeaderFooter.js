//header
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <small><i class="fa fa-map-marker-alt me-2"></i>Innovation & Incubation Center, BIET Jhansi</small>
                <small class="ms-4"><i class="fa fa-envelope me-2"></i>iic@bietjhs.ac.in</small>
            </div>
            <div class="col-lg-6 px-5 d-flex flex-row text-end">
                <small class="p-2">Follow us:</small>
              <a class="text-white-50 p-2 ms-3"
                    href="https://www.facebook.com/BIET-Jhansi-Innovation-and-Incubation-Cell-116551726553214/"><i
                        class="fab fa-facebook-f"></i></a>
                <a class="text-white-50 p-2 ms-3" href="https://www.youtube.com/@iicbietjhs"><i
                        class="fab fa-youtube"></i></a>
                <a class="text-white-50 p-2 ms-3"
                    href="https://www.linkedin.com/company/innovation-and-incubation-cell-biet-jhansi/mycompany/"><i
                        class="fab fa-linkedin-in"></i></a>
                <a class="text-white-50 p-2 ms-3" href="https://www.instagram.com/iic_bietjhs/"><i
                        class="fab fa-instagram"></i></a>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 id ="nav-responsive-big" class="fw-light fs-4 text-primary m-0">Innovation and Incubation<span class="text-white"> Cell</span></h1>
                <h1 id ="nav-responsive-small" class="fw-light fs-4 text-primary m-0" >IIC<span class="text-white"> BIET</span></h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">

                    <a href="../index.html" class="nav-item nav-link ">Home</a>
                    <a href="https://innovanza.iicbietjhs.in/" class="nav-item nav-link ">Innovanza'24</a>
                    <a href="../other-events/index.html" class="nav-item nav-link ">Events</a>
                    <a href="../certification.html" class="nav-item nav-link ">Certificate Verification</a>
                    <a href="../entrepreneurship/index.html" class="nav-item nav-link">BIICF</a>
                    <a href="../about.html" class="nav-item nav-link">Our Team</a>
                </div>
            </div>
        </nav>
    </div>
        
        `;
  }
}
customElements.define("my-header", MyHeader);

//Innovanza header
class InnovanzaHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <small><i class="fa fa-map-marker-alt me-2"></i>Innovation & Incubation Center, BIET Jhansi</small>
                <small class="ms-4"><i class="fa fa-envelope me-2"></i>iic@bietjhs.ac.in</small>
            </div>
            <div class="col-lg-6 px-5 d-flex flex-row text-end">
                <small class="p-2">Follow us:</small>
              <a class="text-white-50 p-2 ms-3"
                    href="https://www.facebook.com/BIET-Jhansi-Innovation-and-Incubation-Cell-116551726553214/"><i
                        class="fab fa-facebook-f"></i></a>
                <a class="text-white-50 p-2 ms-3" href="https://www.youtube.com/@iicbietjhs"><i
                        class="fab fa-youtube"></i></a>
                <a class="text-white-50 p-2 ms-3"
                    href="https://www.linkedin.com/company/innovation-and-incubation-cell-biet-jhansi/mycompany/"><i
                        class="fab fa-linkedin-in"></i></a>
                <a class="text-white-50 p-2 ms-3" href="https://www.instagram.com/iic_bietjhs/"><i
                        class="fab fa-instagram"></i></a>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 id ="nav-responsive-big" class="fw-bold text-primary m-0">Innovanza'<span class="text-white">23</span></h1>
                <h1 id ="nav-responsive-small" class="fw-bold text-primary m-0" >IIC<span class="text-white"> BIET</span></h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse" id="customNavbarToggle">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="../index.html" class="nav-item nav-link ">Home</a>
                    <div class="nav-item dropdown">
                    <a href="../events/index.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Innovanza'23</a>
                   <div class="dropdown-menu m-0">
                     <a href="../events/CodeEThon.html" class="dropdown-item">Code-E-Thon</a>
                     <a href="../events/Events/Action-Cannon.html" class="dropdown-item">Action Cannon</a>
                     <a href=../events/Events/Build-o-pump.html" class="dropdown-item">Build-O-Pump</a>
                     <a href=../events/Circuit-Cracker.html" class="dropdown-item">Circuit Cracker</a>
                     <a href=../Events/Code-e-thon.html" class="dropdown-item">Code-E-Thone</a>
                     <a href=../events\Events\Convergence.html" class="dropdown-item">Convergence</a>
                     <a href=../events\Events\EggDrop.html" class="dropdown-item">Egg Drop</a>
                     <a href=../events\Events\Gaming-Maniac.html" class="dropdown-item">Gaming Maniac</a>
                     <a href=../events\Events\Hackathon.html" class="dropdown-item">Hackathon</a>
                     <a href=../events\Events\HubbleScope.html" class="dropdown-item">Hubble Scope</a>
                     <a href=../events\Events\Motor-Vi.html" class="dropdown-item">Moter Vi</a>
                     <a href=../events\Events\Open-Ideas.html" class="dropdown-item">Open Mic for Ideas</a>
                     <a href=../events\Events\Open-Mic.html" class="dropdown-item">Open Mic</a>
                     <a href=../events\Events\Pixcellence.html" class="dropdown-item">Pixcellence</a>
                     <a href=../events\Events\Re-Emblem.html" class="dropdown-item">Re-Emblem</a>
                     <a href=../events\Events\Robo-Fight.html" class="dropdown-item">Robo Fight</a>
                     <a href=../events\Events\Robo-Race.html" class="dropdown-item">Robo Race</a>
                     <a href=../events\Events\Scavenger-Hunt.html" class="dropdown-item">Scavenger Hunt</a>
                     <a href=../events\Events\Setu-Nirman.html" class="dropdown-item">Setu Nirmaan</a>
                     <a href=../events\Events\Sneark-the-Peak.html" class="dropdown-item">Sneak The Peak</a>
                     <a href=../events\Events\Spotless-Aqua.html" class="dropdown-item">Spotless Aqua</a>
                     <a href=../events\Events\Startup-Conclave.html" class="dropdown-item">Startup Conclave</a>
                     <a href=../events\Events\Todays-Vinci.html" class="dropdown-item">Exibition</a>
                     <a href=../events\Events\Vidmora.html" class="dropdown-item">Vidmora</a>
                   </div>
                 </div>
                    <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Events </a>
                      <div class="dropdown-menu m-0">
                        <a href="../events/index.html" class="dropdown-item">Innovanza'22</a>
                        <a href="../other-events/index.html" class="dropdown-item">Other Events</a>
                      </div>
                    </div>
                    <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Training & Certification</a>
                      <div class="dropdown-menu m-0">
                        <a href="../training/index.html" class="dropdown-item">Training</a>
                        <a href="../certification.html" class="dropdown-item">Certificate Verification</a>
                      </div>
                    </div>

                    <a href="../entrepreneurship/index.html" class="nav-item nav-link">BIICF</a>
                 
                    <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About US</a>
                      <div class="dropdown-menu m-0">
                        <a href="about.html" class="dropdown-item">Mission</a>
                        <a href="team/team.html" class="dropdown-item">Our Team</a>
                      </div>
                    </div>
                 
                </div>

            </div>
        </nav>
    </div>

        
        `;
  }
}
customElements.define("innovanza-header", InnovanzaHeader);

//footer
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <div class="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h1 class="fw-bold text-primary mb-4">Innovation and Incubation<span class="text-white">
                            Cell</span></h1>
                    <p>The incubation centre of Bundelkhand region which give a wing to your innovative idea and also build a foundation for your startups.</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square me-1" href="https://www.instagram.com/iic_bietjhs/"><i
                                class="fab fa-instagram"></i></a>
                        <a class="btn btn-square me-1"
                            href="https://www.facebook.com/BIET-Jhansi-Innovation-and-Incubation-Cell-116551726553214/"><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square me-1" href="https://www.youtube.com/@iicbietjhs"><i
                                class="fab fa-youtube"></i></a>
                        <a class="btn btn-square me-0"
                            href="https://www.linkedin.com/company/innovation-and-incubation-cell-biet-jhansi/mycompany/"><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Contact</h5>
                    <p><i class="fa fa-map-marker-alt me-3"></i>Innovation and Incubation cell, BIET Jhansi</p>
                    <p><i class="fa fa-phone-alt me-3"></i>+91 9793816217</p>
                    <p><i class="fa fa-envelope me-3"></i>iic@bietjhs.ac.in</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="index.html">Home</a>
                    <a class="btn btn-link" href="other-events/index.html">Events</a>
                    <a class="btn btn-link" href="../training/index.html">Tranings</a>
                    <a class="btn btn-link" href="../entrepreneurship/index.html">BIICF</a>
                    <a class="btn btn-link" href="about.html">About</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Newsletter</h5>
                    <p>Get Notified to our latest updates.</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email">
                        <button type="button"
                            class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">iic_bietjhs</a>, All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
  }
}
customElements.define("my-footer", MyFooter);

// head Links
class HeadLinks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        
        <meta charset="utf-8">
    
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="" name="keywords">
        <meta content="" name="description">
    
        <!-- Favicon -->
        <link href="img/favicon.png" rel="icon">
    
        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Saira:wght@500;600;700&display=swap"
            rel="stylesheet">
    
        <!-- Icon Font Stylesheet -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    
        <!-- Libraries Stylesheet -->
        <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    
        <!-- Customized Bootstrap Stylesheet -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
    
        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
      
        `;
  }
}
customElements.define("head-links", HeadLinks);

class FootLinks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    
        `;
  }
}
customElements.define("foot-links", FootLinks);
