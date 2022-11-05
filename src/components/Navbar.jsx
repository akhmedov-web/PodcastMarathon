import React from 'react'
import Logo from "../assets/logo_transparent.png";

export default function Navbar() {
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src={Logo}
        height="66"
        alt="MDB Logo"
        loading="lazy"
        style={{marginTop: "-1px"}}
      />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarButtonsExample">
      <div class="d-flex align-items-center">
        <a
          class="btn btn-danger px-3 me-2"
          href="https://instagram.com/shohbaxt_ahmedov"
          role="button"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          class="btn btn-primary px-3 me-2"
          href="https://facebook.com/shohbaxt.ahmedov"
          role="button"
          ><i class="fab fa-facebook"></i
        ></a>
        <a
          class="btn btn-info px-3 me-2"
          href="https://twitter.com/altruistjon"
          role="button"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          class="btn btn-danger px-3 me-2"
          href="https://youtube.com/@shohbaxtahmedov"
          role="button"
          ><i class="fab fa-youtube"></i
        ></a>
        <a
          class="btn btn-info px-3 me-2"
          href="https://t.me/akhmedov_mailbox"
          role="button"
          ><i class="fab fa-telegram"></i
        ></a>
        <a
          class="btn btn-dark px-3 me-2"
          href="https://github.com/akhmedov-web"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
  </div>
</nav>
  )
}
