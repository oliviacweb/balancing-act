

var button = document.querySelector('.button-container');

button.addEventListener('click', disappearBanner)

function disappearBanner() {

  //console.log('i am in')
  button.parentElement.style.display='none';
};


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

  pageContent.innerHTML = `
<section class="transactions-content">

 <div class="transactions-colum-1">
  <section class="transactions-header">
   <h1 class="transactions-intro">Transactions</h1>

   <section class="transaction-tabs">
    <button class="all">ALL</button>
    <button class="inflow">INFLOW</button>
    <button class="outflow">OUTFLOW</button>
   </section>
  </section>

 <section class="trans-table-section">
  <table class="trans-table">
   <tr class="trans-table-items">
     <th>Date</th>
     <th>Account</th>
     <th>Payee</th>
     <th>Inflow</th>
     <th>Outflow</th>
   </tr>
   <tr class="trans-first-table-line">
     <td>10-25-19</td>
     <td>Credit Card</td>
     <td>Target</td>
     <td>-</td>
     <td>$82.35</td>
   </tr>
   <tr>
     <td>10-24-19</td>
     <td>Credit Card</td>
     <td>Express</td>
     <td>-</td>
     <td>$212.24</td>
   </tr>
   <tr>
     <td>10-22-19</td>
     <td>Checking</td>
     <td>Paycheck</td>
     <td>$1,319.12</td>
     <td>-</td>
   </tr>
   <tr>
     <td>10-21-19</td>
     <td>Credit Card</td>
     <td>Trader Joe's</td>
     <td>-</td>
     <td>$54.92</td>
   </tr>
   <tr>
     <td>10-20-19</td>
     <td>Credit Card</td>
     <td>Shell</td>
     <td>-</td>
     <td>$46.23</td>
   </tr>
   <tr>
     <td>10-19-19</td>
     <td>Savings</td>
     <td>Rent</td>
     <td>$800.00</td>
     <td>-</td>
   </tr>
   <tr>
     <td>10-19-19</td>
     <td>Checking</td>
     <td>Hapa Sushi</td>
     <td>-</td>
     <td>$13.97</td>
   </tr>
   <tr>
     <td>10-18-19</td>
     <td>Credit Card</td>
     <td>Pig Train</td>
     <td>-</td>
     <td>$4.83</td>
   </tr>
   <tr>
     <td>10-18-19</td>
     <td>Checking</td>
     <td>RTD</td>
     <td>-</td>
     <td>$6.00</td>
   </tr>
   <tr>
    <td>10-24-19</td>
    <td>Checking</td>
    <td>Express</td>
    <td>-</td>
    <td>$212.24</td>
   </tr>
   <tr>
    <td>10-24-19</td>
    <td>Checking</td>
    <td>Express</td>
    <td>-</td>
    <td>$212.24</td>
   </tr>
   <tr>
    <td>10-24-19</td>
    <td>Checking</td>
    <td>Express</td>
    <td>-</td>
    <td>$212.24</td>
   </tr>
   <tr>
    <td>10-24-19</td>
    <td>Checking</td>
    <td>Express</td>
    <td>-</td>
    <td>$212.24</td>
   </tr>
   <tr>
    <td>10-24-19</td>
    <td>Checking</td>
    <td>Express</td>
    <td>-</td>
    <td>$212.24</td>
   </tr>
  </table>
 </section>
</div>
<div class="trans-colum-2">
 <section class="new-trans-box">
 <h2 class="trans-box-header">New Transaction</h2>
 <form class="trans-form">
  <p>Type of Transaction:</p>
    <select name="transaction-types">
     <option value="outflow-form">Expense</option>
     <option value="inflow-form">Deposit</option>
    </select>
  <p>Category:</p>
    <select name="account-type">
      <option value="checking">Checking</option>
      <option value="savings">Savings</option>
      <option value="credit-card">Credit Card</option>
    </select>
  <p>Account from:</p>
    <select name="account">
      <option value="checking">Checking</option>
      <option value="savings">Savings</option>
      <option value="credit-card">Credit Card</option>
    </select>
  <p>Payee:</p>
    <input type="text"></input>
  <p>Outflow:</p>
    <input type="text"></input>
  <p>Inflow:</p>
    <input type="text"></input>

  <button class="expense-button">Log Expense</button>
      </form>


 </section>


</div>


</section>
  `;


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
  </section>`

}

profileIcon.addEventListener('click', addBlueBorderProfile)

function addBlueBorderProfile() {
  transactionsIcon.classList.remove('icon-border-left');
  dashboardIcon.classList.remove('icon-border-left');
  profileIcon.classList.add('icon-border-left');
  showProfilePage();
};

function showProfilePage() {
   pageContent.innerHTML = '<p>profile</p>'
 }
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
