// Task 1

// New Account
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;

    this.checkBalance = function() {
        console.log(`Account Balance: ${this.balance}`);
    }

    // Task 2
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log(`Deposit amount must be more than 0!`)
        }
    };

    this.withdrawl = function(amount) {
        if (amount < this.balance && amount > 0) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New Balance: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log(`Amount $${amount} is more than you have in your balance!`);
        } else {
            console.log(`Amount must be more than 0!`)
        }
    };

    // Task 3, WE NEED TO CHANGE THIS FORMULA TO CALCULATE COMPOUND INTEREST!!!!
    this.compoundInterest = function(rate, times, years) {
        let decimal = rate / 100;

        let interest_amount = this.balance * Math.pow((1 + decimal / times), times * years);
        console.log(`Compound interest: $${interest_amount}`);
    }
}

let account1 = new Account("1", 2000, "John Doe");
let account2 = new Account("2", 5000, "Jane Smith");

console.log(account1);
console.log(account2);

account1.deposit(500);
account2.deposit(1000);

account1.checkBalance();
account2.checkBalance();

account1.withdrawl(200);
account2.withdrawl(10000);

account1.checkBalance();
account2.checkBalance();

account1.compoundInterest(5, 4, 3);
account2.compoundInterest(5, 4, 3)