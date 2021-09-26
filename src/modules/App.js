import {DonateForm} from "./donate-form";
import {DonateList} from "./donate-list";


// const mockDonates = [
//     { amount: 4, date: new Date() },
//     { amount: 20, date: new Date() },
//     { amount: 3, date: new Date() },
//     { amount: 1, date: new Date() },
// ];

export class App {
    // #donateForm
    // #donateList
    constructor() {
        this.state = {
            donates: [
                { amount: 1, date: new Date() },
            ],
            totalAmount: 3
        }
        this.donateForm = new DonateForm(
            this.state['totalAmount'],
            this.createNewDonate.bind(this)
        )
        this.donateList = new DonateList(
            this.state['donates']
        )

    }

    createNewDonate(newDonate){

        this.state['donates'].push(newDonate)
        const a = this['state']['donates']
        const b = this['state']['totalAmount']
        this.donateForm.updateTotalAmount(b)
        this.donateList.updateDonates(a)

    }

    run(){



        const renderForm = this.donateForm.render()
        const listRender = this.donateList.render()
        return document.body.append(renderForm, listRender)
    }
    
}