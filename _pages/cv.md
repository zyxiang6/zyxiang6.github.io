---
permalink: /cv/
title: "Curriculum Vitae"
layout: single
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---

<style>
/* CV page elegant typography and styling */
.cv-page h2 {
  font-size: 1.4rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  margin-top: 2.5rem !important;
  margin-bottom: 1rem !important;
  border-bottom: 2px solid #3498db !important;
  padding-bottom: 0.3rem !important;
}

.cv-page h3 {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: #34495e !important;
  margin-top: 1.8rem !important;
  margin-bottom: 0.6rem !important;
}

.cv-page h4 {
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  margin-top: 1.2rem !important;
  margin-bottom: 0.4rem !important;
}

.cv-page p {
  font-size: 0.9rem !important;
  line-height: 1.6 !important;
  margin-bottom: 0.8rem !important;
  color: #2c3e50 !important;
}

.cv-page strong {
  font-weight: 600 !important;
  color: #2c3e50 !important;
}

.cv-page em {
  color: #34495e !important;
  font-style: italic !important;
}

/* Education and Experience entries */
.cv-entry {
  margin-bottom: 2rem !important;
  padding-left: 1rem !important;
  border-left: 3px solid #ecf0f1 !important;
  transition: border-color 0.3s ease !important;
}

.cv-entry:hover {
  border-left-color: #3498db !important;
}

.cv-entry-title {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  margin-bottom: 0.2rem !important;
}

.cv-entry-details {
  font-size: 0.85rem !important;
  color: #7f8c8d !important;
  margin-bottom: 0.5rem !important;
  font-style: italic !important;
}

.cv-entry-location {
  font-size: 0.8rem !important;
  color: #95a5a6 !important;
  margin-bottom: 0.8rem !important;
}

.cv-entry ul {
  margin-top: 0.5rem !important;
  margin-bottom: 0 !important;
}

.cv-entry li {
  font-size: 0.85rem !important;
  line-height: 1.5 !important;
  margin-bottom: 0.4rem !important;
  color: #34495e !important;
}

/* Publications styling */
.publication-list {
  counter-reset: publication-counter !important;
}

.publication-item-cv {
  counter-increment: publication-counter !important;
  margin-bottom: 1.5rem !important;
  padding: 1rem !important;
  background: #f8f9fa !important;
  border-radius: 6px !important;
  border-left: 4px solid #3498db !important;
  position: relative !important;
}

.publication-item-cv::before {
  content: counter(publication-counter) !important;
  position: absolute !important;
  left: -15px !important;
  top: 1rem !important;
  background: #3498db !important;
  color: white !important;
  width: 24px !important;
  height: 24px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-size: 0.75rem !important;
  font-weight: 600 !important;
}

.publication-title {
  font-size: 0.9rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  margin-bottom: 0.4rem !important;
  line-height: 1.4 !important;
}

.publication-journal {
  font-size: 0.8rem !important;
  color: #7f8c8d !important;
  margin-bottom: 0.3rem !important;
  font-style: italic !important;
}

.publication-authors {
  font-size: 0.75rem !important;
  color: #95a5a6 !important;
  line-height: 1.4 !important;
}

/* Awards section */
.award-item {
  margin-bottom: 1.5rem !important;
  padding: 1rem !important;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
  border-radius: 8px !important;
  border-left: 4px solid #f39c12 !important;
}

.award-title {
  font-size: 1rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  margin-bottom: 0.3rem !important;
}

.award-details {
  font-size: 0.85rem !important;
  color: #7f8c8d !important;
  margin-bottom: 0.2rem !important;
}

.award-date {
  font-size: 0.8rem !important;
  color: #95a5a6 !important;
  font-style: italic !important;
}

/* Link styling - same as publications page */
.cv-page a {
  color: #3498db !important;
  text-decoration: none !important;
  font-weight: 500 !important;
}

.cv-page a:hover {
  color: #2980b9 !important;
  text-decoration: none !important;
}

.cv-page a:visited {
  color: #3498db !important;
}

/* Section headers with icons */
.section-header {
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
}

.section-icon {
  color: #3498db !important;
  font-size: 1.2rem !important;
}

/* Last updated footer */
.cv-footer {
  text-align: center !important;
  margin-top: 3rem !important;
  padding-top: 2rem !important;
  border-top: 1px solid #ecf0f1 !important;
  font-size: 0.8rem !important;
  color: #95a5a6 !important;
  font-style: italic !important;
}

/* Publication year headers */
.publication-year {
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  color: #3498db !important;
  margin-top: 1.5rem !important;
  margin-bottom: 1rem !important;
  padding-bottom: 0.3rem !important;
  border-bottom: 1px solid #bdc3c7 !important;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .cv-page h2 {
    font-size: 1.2rem !important;
    margin-top: 2rem !important;
  }
  
  .cv-page h3 {
    font-size: 1rem !important;
  }
  
  .cv-entry {
    padding-left: 0.5rem !important;
  }
  
  .publication-item-cv {
    padding: 0.8rem !important;
    margin-left: 1rem !important;
  }
  
  .award-item {
    padding: 0.8rem !important;
  }
}
</style>

<div class="cv-page">

## <span class="section-header"><i class="fas fa-graduation-cap section-icon"></i>Education</span>

<div class="cv-entry">
  <div class="cv-entry-title">University of California, Berkeley</div>
  <div class="cv-entry-details">PhD in Physics | Jan 2021 - Dec 2025 (Expected)</div>
  <div class="cv-entry-location">Berkeley, CA</div>
  <p><strong>Advisor:</strong> Prof. Feng Wang</p>
  <p><strong>Research Focus:</strong> Strongly correlated 2D electron systems, quantum many-body phenomena</p>
</div>

<div class="cv-entry">
  <div class="cv-entry-title">University of Chinese Academy of Science (UCAS)</div>
  <div class="cv-entry-details">Bachelor of Science in Physics | Jun 2016 - Dec 2020</div>
  <div class="cv-entry-location">Beijing, China</div>
</div>

## <span class="section-header"><i class="fas fa-flask section-icon"></i>Research Experience</span>

<div class="cv-entry">
  <div class="cv-entry-title">Graduate Research Assistant</div>
  <div class="cv-entry-details">UC Berkeley & Lawrence Berkeley National Laboratory | Jan 2021 - Present</div>
  <div class="cv-entry-location">Feng Wang Group | Berkeley, CA</div>
  <ul>
    <li>Applied STM to study strongly correlated 2D interacting electrons with sub-nanometer spatial resolution</li>
    <li>Applied AFM for SNOM, PFM, and TFM measurements</li>
    <li>Mastered 2D material exfoliation, polymer stacking, lithography techniques</li>
    <li>Conducted optical spectroscopy measurements</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-title">Undergraduate Research Assistant</div>
  <div class="cv-entry-details">UC Berkeley | Jan 2019 - Jul 2019</div>
  <div class="cv-entry-location">Feng Wang Group | Berkeley, CA</div>
  <ul>
    <li>Mechanical exfoliation of 2D materials and device transfer</li>
    <li>E-field assisted graphene exfoliation</li>
    <li>Machine learning for graphene image identification</li>
  </ul>
</div>

<div class="cv-entry">
  <div class="cv-entry-title">Undergraduate Research Assistant</div>
  <div class="cv-entry-details">University of Chinese Academy of Sciences | Sep 2019 - Jun 2020</div>
  <div class="cv-entry-location">Wu Zhou's Group | Beijing, China</div>
  <ul>
    <li>Transfer of 2D materials for TMD heterostructure preparation</li>
  </ul>
</div>

## <span class="section-header"><i class="fas fa-trophy section-icon"></i>Awards & Honors</span>

<div class="award-item">
  <div class="award-title">Kavli Graduate Student Fellow</div>
  <div class="award-details">Kavli Energy NanoScience Institute, UC Berkeley</div>
  <div class="award-date">Sep 2024 - Sep 2025</div>
  <p><a href="https://kavli.berkeley.edu/ziyu-xiang">Kavli ENSI Fellowship</a></p>
</div>

<div class="award-item">
  <div class="award-title">Lixin Tang's Scholarship</div>
  <div class="award-details">University of Chinese Academy of Sciences</div>
  <div class="award-date">Nov 2018</div>
</div>

<div class="award-item">
  <div class="award-title">Major Award of UCAS</div>
  <div class="award-details">University of Chinese Academy of Sciences</div>
  <div class="award-date">Oct 2017</div>
  <p><em>Awarded to top 5% of undergraduate students</em></p>
</div>

## <span class="section-header"><i class="fas fa-file-alt section-icon"></i>Publications</span>

<div class="publication-list">

<div class="publication-year">2025 Publications</div>

<div class="publication-item-cv">
  <div class="publication-title">
    <a href="https://www.science.org/doi/full/10.1126/science.ado7136">Imaging quantum melting in a disordered 2D Wigner solid</a>
  </div>
  <div class="publication-journal">Science 388(6748), 736-740 (2025)</div>
  <div class="publication-authors">Xiang, Z.*, Li, H.*, Xiao, J.*, Naik, M. H., Ge, Z., He, Z., ... & Wang, F.</div>
</div>

<div class="publication-year">Peer-Reviewed Publications (2024)</div>

<div class="publication-item-cv">
  <div class="publication-title">
    <a href="https://www.nature.com/articles/s41586-024-07596-6">Imaging tunable Luttinger liquid systems in van der Waals heterostructures</a>
  </div>
  <div class="publication-journal">Nature 631(8022), 765–770 (2024)</div>
  <div class="publication-authors">Li, H.*, Xiang, Z.*, Wang, T. et al.</div>
</div>

<div class="publication-item-cv">
  <div class="publication-title">
    <a href="https://www.science.org/doi/full/10.1126/science.adk1348">Wigner molecular crystals from multielectron moiré artificial atoms</a>
  </div>
  <div class="publication-journal">Science 385(6704), 86-91 (2024)</div>
  <div class="publication-authors">Li, H.*, Xiang, Z.*, Wang, T. et al.</div>
</div>

<div class="publication-item-cv">
  <div class="publication-title">
    <a href="https://www.nature.com/articles/s41563-023-01753-4">Imaging moiré excited states with photocurrent tunnelling microscopy</a>
  </div>
  <div class="publication-journal">Nature Materials 23(5), 633–638 (2024)</div>
  <div class="publication-authors">Li, H.*, Xiang, Z.*, Naik, M.H.* et al.</div>
</div>

<div class="publication-item-cv">
  <div class="publication-title">
    <a href="https://www.nature.com/articles/s41565-023-01594-x">Mapping charge excitations in generalized Wigner crystals</a>
  </div>
  <div class="publication-journal">Nature Nanotechnology 19(5), 618–623 (2024)</div>
  <div class="publication-authors">Li, H.*, Xiang, Z.*, Regan, E. et al.</div>
</div>

<div class="publication-year">Peer-Reviewed Publications (2021)</div>

<div class="publication-item-cv">
  <div class="publication-title">
    <a href="https://www.science.org/doi/full/10.1126/sciadv.abf4387">Visualizing electron localization of WS₂/WSe₂ moiré superlattices in momentum space</a>
  </div>
  <div class="publication-journal">Science Advances 7(37), eabf4387 (2021)</div>
  <div class="publication-authors">Stansbury, C., M Iqbal Bakti Utama, Fatuzzo, C., Regan, E., Wang, D., Xiang, Z. et al.</div>
</div>

</div>

<div class="cv-footer">
  <em>Last updated: June 2025</em>
</div>

</div>