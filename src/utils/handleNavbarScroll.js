export const handleNavbarScroll = ({
  setIsNavbarFixed,
  setIsNavbarHidden,
  setIsBelowHero,
}) => {
  let lastScrollY = 0;

  const handleScroll = () => {
    const heroHeight = document.querySelector("#hero-section").offsetHeight;
    const scrollPosition = window.scrollY;

    setIsNavbarFixed(scrollPosition < heroHeight);
    setIsBelowHero(scrollPosition >= heroHeight);

    if (scrollPosition > lastScrollY && scrollPosition >= heroHeight) {
      setIsNavbarHidden(true);
    } else if (scrollPosition < lastScrollY || scrollPosition < heroHeight) {
      setIsNavbarHidden(false);
    }

    lastScrollY = scrollPosition;
  };

  return handleScroll;
};