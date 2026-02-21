async function loadIncludes() {

  // Load Navbar
  const navRes = await fetch("/includes/nav.html");
  const navData = await navRes.text();
  document.getElementById("nav-placeholder").innerHTML = navData;

  // Load Footer
  const footerRes = await fetch("/includes/footer.html");
  const footerData = await footerRes.text();
  document.getElementById("footer-placeholder").innerHTML = footerData;
}

document.addEventListener("DOMContentLoaded", loadIncludes);
