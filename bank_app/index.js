
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} into account ${this.accountNumber}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
            } else {
                console.log("Insufficient funds");
            }
        } else {
            console.log("Invalid withdrawal amount");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

// Create two instances of the BankAccount class
const account1 = new BankAccount(123456, "Alice", 1000);
const account2 = new BankAccount(654321, "Bob", 2000);

// Demonstrate the functionality of the methods
account1.displayAccountInfo();
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(2000); // Attempt to withdraw more than available balance
account1.displayAccountInfo();

console.log("\n");

account2.displayAccountInfo();
account2.deposit(1000);
account2.withdraw(500);
account2.displayAccountInfo();