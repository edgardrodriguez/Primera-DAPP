export default class AccountWeb3Model {
    address: string;
    balance: number;
    constructor() {
        this.balance = 0;
        this.address = "0x8e6099dFa83735B2e6c9d1e24090bEBc56D90cA9"
    }
    build(address: string, balance:number) {
        this.address = address;
        this.balance = balance;
        return this;
    }
}