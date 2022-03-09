import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import './styles/config/print.css'

import $ from 'jquery';
import 'jquery.scrollto';

export function onClientEntry(){
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  } else {
    // Race condition with default browser behavior for deep links.
    setTimeout(() => {
      $.scrollTo($(window.location.hash), {
        offset: { top: -80 }
      });
    }, 1000)
  }
}
// Scroll to top of page if user revisits page
export function shouldUpdateScroll({ routerProps: { location } }) {
  const { pathname } = location;
  if (pathname && !window.location.hash) {
    window.scrollTo(0, 0);
  }
  return false;
}

