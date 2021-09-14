document.addEventListener("DOMContentLoaded", () => {
  const careTabs = Array.from(document.querySelectorAll(".js-care-tabs"));

  careTabs.forEach((element) => {
    const navLinks = Array.from(
      element.querySelectorAll(".plant-intro__tabs-nav-link")
    );
    const tabItems = Array.from(
      element.querySelectorAll(".plant-intro__tabs-item")
    );
    const setActiveTab = (index) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      tabItems.forEach((item) => item.classList.remove("active"));

      navLinks[index].classList.add("active");
      tabItems[index].classList.add("active");
    };

    setActiveTab(0);

    navLinks.forEach((link, linkIndex) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(linkIndex);
      });
    });
  });
});
