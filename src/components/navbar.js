import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark  ps-5" style={{
        'background-color': '#68623A',
    }}>
      <a class="navbar-brand" href="#">
        Aman's [Store]
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              {/* Home <span class="sr-only">(current)</span> */}
              Add Product
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Cart
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
