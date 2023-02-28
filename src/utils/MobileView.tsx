export default function MobileView() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return true;
  } else {
    return false;
  }
}
