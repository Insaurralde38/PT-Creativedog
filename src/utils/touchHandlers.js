export const handleTouchStart = (e, touchStartX) => {
  touchStartX.current = e.touches[0].clientX;
};

export const handleTouchMove = (e, touchEndX) => {
  touchEndX.current = e.touches[0].clientX;
};

export const handleTouchEnd = (touchStartX, touchEndX, isMenuOpen, setIsMenuOpen) => {
  const distance = touchStartX.current - touchEndX.current;
  if (distance > 50 && isMenuOpen) {
    setIsMenuOpen(false);
  } else if (distance < -50 && !isMenuOpen) {
    setIsMenuOpen(true);
  }
};