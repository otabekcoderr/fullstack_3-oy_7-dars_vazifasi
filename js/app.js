const menuItemEl = document.querySelector(".menu-item");
console.log(menuItemEl);

function menuPrint() {
  menuItemEl.innerHTML += `
              <div class="dashboard nav-item">
            <div class="nav-title">
              <img src="./image/key-square.svg" alt="keysquare" />
              <h3>Dashboard</h3>
            </div>
          </div>

          <div class="product nav-item">
            <div class="nav-title">
              <img src="./image/3d-square 1.svg" alt="3d square" />
              <h3>Product</h3>
            </div>
            <div class="chevron"><p>></p></div>
          </div>

          <div class="customer active nav-item">
            <div class="nav-title">
              <img src="./image/customer_icon.svg" alt="user square" />
              <h3>Customers</h3>
            </div>
            <div class="chevron"><p>></p></div>
          </div>

          <div class="income nav-item">
            <div class="nav-title">
              <img src="./image/wallet-money 2.svg" alt="Wallet money" />
              <h3>Income</h3>
            </div>
            <div class="chevron"><p>></p></div>
          </div>

          <div class="promote nav-item">
            <div class="nav-title">
              <img src="./image/discount-shape 1.svg" alt="Discount Promote" />
              <h3>Promote</h3>
            </div>
            <div class="chevron"><p>></p></div>
          </div>

          <div class="help nav-item">
            <div class="nav-title">
              <img src="./image/message-question 1.svg" alt="Message Help" />
              <h3>Help</h3>
            </div>
            <div class="chevron"><p>></p></div>
          </div>
    `;
}

menuPrint()