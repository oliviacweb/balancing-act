

var button = document.querySelector('.button-container');

button.addEventListener('click', disappearBanner)

function disappearBanner() {

  //console.log('i am in')
  button.parentElement.style.display='none';
};


//var icon = document.querySelector('.frg')

//function toggleActiveIcon () {
    //icon.setAttribute('class', 'nameofclass')
     //blue border appears on left side


//}

//var icon = document.//



//function addBorder() {
   //var transIcon = document.getElementByClass("transactions-icon");
   //element.classList.toggle("icon-border-left");
//}


var dashboardIcon = document.querySelector('.dashboard-icon');
var transactionsIcon = document.querySelector('.transactions-icon');
var profileIcon = document.querySelector('.profile-icon');
var pageContent = document.querySelector('.page-content');

transactionsIcon.addEventListener('click', addBlueBorderTransactions)

function addBlueBorderTransactions() {
  transactionsIcon.classList.add('icon-border-left');
  dashboardIcon.classList.remove('icon-border-left');
  profileIcon.classList.remove('icon-border-left');
  showTransactionsPage();
};

function showTransactionsPage() {

  pageContent.innerHTML = `<p>Transactions shit</p>`;


}

dashboardIcon.addEventListener('click', addBlueBorderDashboard)

function addBlueBorderDashboard() {
  transactionsIcon.classList.remove('icon-border-left');
  dashboardIcon.classList.add('icon-border-left');
  profileIcon.classList.remove('icon-border-left');
  showDashboardPage();
};

function showDashboardPage() {
   pageContent.innerHTML = `<main class="page-content">
    <section class ="dashboard-content">
     <div class="column-one">
     <h1 class="introduction">Balancing Act</h1>

     <section class="welcome-banner">
       <h2>Welcome, Oscar!</h2>
       <button class="button-container"><img class="close-banner" src="assets/icons/close.svg" alt="x to close"></button>
     </section>

     <div class="general-finances">

          <section class="income">
            <h3>INCOME</h3>
            <p>$2,119.12</p>
          </section>

          <section class="expenses">
            <h3>EXPENSES</h3>
            <p>$420.54</p>
          </section>

          <section class="credit-score">
            <h3>CREDIT SCORE</h3>
            <p>673</p>
          </section>
    </div>

     <div class="accounts">

       <section class="account-header">
         <h4>Accounts</h4>
         <button class="accounts-button">MANAGE ACCOUNTS</button>
       </section>

       <section class="checking">
         <h6>
          <span><img class="checking-icon" src="assets/icons/checking.svg" alt="checkbook icon"/>
          </span>
          <span class="checking-account-bank">Wells Fargo</span>
          <span class="checking-account">Checking</span>
         </h6>
       </section>

       <section class="savings">
         <h6>
          <span><img class="savings-icon" src="assets/icons/savings.svg" alt="piggybank icon"/>
          </span>
          <span class="savings-account-bank">Wells Fargo</span>
          <span class="savings-account">Savings</span>
         </h6>
       </section>

       <section class="credit-1">
         <h6>
          <span><img class="credit-icon-1" src="assets/icons/credit-card.svg" alt="credit card icon"/>
          </span>
          <span class="credit-card-1">Amazon Credit</span>
          <span class="credit-account-1">Credit Card</span>
         </h6>
       </section>

       <section class="credit-2">
         <h6>
          <span><img class="credit-icon-2" src="assets/icons/credit-card.svg" alt="credit card icon"/>
          </span>
          <span class="credit-card-2">Southwest Credit</span>
          <span class="credit-account-2">Credit Card</span>
         </h6>
       </section>

    </div>

   </div>

   <section id="table-container">
     <header class="table-header">
       <h4>Recent Transactions</h4>
       <button class="transactions-button">NEW TRANSACTION</button>
     </header>
     <table>
       <tr class="table-items">
         <th>Date</th>
         <th>Payee</th>
         <th>Inflow</th>
         <th>Outflow</th>
       </tr>
       <tr class="first-table-line">
         <td>Oct 25, 2019</td>
         <td>Target</td>
         <td>-</td>
         <td>$82.35</td>
       </tr>
       <tr>
         <td>Oct 24, 2019</td>
         <td>Express</td>
         <td>-</td>
         <td>$212.24</td>
       </tr>
       <tr>
         <td>Oct 22, 2019</td>
         <td>Paycheck</td>
         <td>$1,319.12</td>
         <td>-</td>
       </tr>
       <tr>
         <td>Oct 21, 2019</td>
         <td>Trader Joe's</td>
         <td>-</td>
         <td>$54.92</td>
       </tr>
       <tr>
         <td>Oct 20, 2019</td>
         <td>Shell</td>
         <td>-</td>
         <td>$46.23</td>
       </tr>
       <tr>
         <td>Oct 19, 2019</td>
         <td>Rent</td>
         <td>$800.00</td>
         <td>-</td>
       </tr>
       <tr>
         <td>Oct 19, 2019</td>
         <td>Hapa Sushi</td>
         <td>-</td>
         <td>$13.97</td>
       </tr>
       <tr>
         <td>Oct 18, 2019</td>
         <td>Pig Train</td>
         <td>-</td>
         <td>$4.83</td>
       </tr>
       <tr>
         <td>Oct 18, 2019</td>
         <td>RTD</td>
         <td>-</td>
         <td>$6.00</td>
       </tr>
     </table>
     </section>
   </div>
 </section>`

}

profileIcon.addEventListener('click', addBlueBorderProfile)

function addBlueBorderProfile() {
  transactionsIcon.classList.remove('icon-border-left');
  dashboardIcon.classList.remove('icon-border-left');
  profileIcon.classList.add('icon-border-left');

};
//$(".nav-icons>button").on("click",function(){
  //$(".nav-icons>button").removeClass("icon-border-left");
  //$(this).addClass("icon-border-left");
//}//

//var icons = document.querySelectorAll(".nav-icons > button");

//for (i = 0; i < icons.length; i++) {
//  icons[i].addEventListener("click", function() {
  //  document.getElementsByClassName("icon-border-left")[0].classList.remove("icon-border-left");
    //this.classList.add("icon-border-left");
//  });
//}
