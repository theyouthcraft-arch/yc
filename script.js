document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector("[data-menu]");
  const nav=document.querySelector(".primary-nav");

  if(toggle && nav){
    toggle.addEventListener("click",()=>{
      const open=nav.classList.toggle("mobile-open");
      toggle.setAttribute("aria-expanded",String(open));
    });
  }

  document.querySelectorAll(".dropbtn").forEach(button=>{
    button.addEventListener("click",event=>{
      const dropdown=event.currentTarget.closest(".dropdown");
      const isOpen=dropdown.classList.toggle("open");
      event.currentTarget.setAttribute("aria-expanded",String(isOpen));
      document.querySelectorAll(".dropdown").forEach(other=>{
        if(other!==dropdown){
          other.classList.remove("open");
          const b=other.querySelector(".dropbtn");
          if(b) b.setAttribute("aria-expanded","false");
        }
      });
    });
  });

  document.addEventListener("click",event=>{
    if(!event.target.closest(".dropdown")){
      document.querySelectorAll(".dropdown").forEach(dropdown=>{
        dropdown.classList.remove("open");
        const button=dropdown.querySelector(".dropbtn");
        if(button) button.setAttribute("aria-expanded","false");
      });
    }
  });

  const q=document.querySelector("[data-search]");
  const rows=[...document.querySelectorAll("[data-registry-row]")];
  if(q&&rows.length) q.addEventListener("input",()=>{
    const v=q.value.toLowerCase().trim();
    rows.forEach(r=>r.hidden=v && !r.innerText.toLowerCase().includes(v));
  });
  const cohort=document.querySelector("[data-cohort]");
  if(cohort&&rows.length) cohort.addEventListener("change",()=>{
    const v=cohort.value;
    rows.forEach(r=>r.hidden=(v && r.dataset.cohort && r.dataset.cohort!==v));
  });
});
