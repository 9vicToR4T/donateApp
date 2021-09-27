import {DonateForm} from "./donate-form";
import {DonateList} from "./donate-list";
import {calculateSumOfNumbers} from "../core/functionsHelper";


export class App {
    constructor() {
        this.mockDonates = [
            { amount: 4, date: new Date() },
            { amount: 20, date: new Date() },
            { amount: 3, date: new Date() },
            { amount: 1, date: new Date() },
        ]

        this.state = {
                donates: this.mockDonates,
            totalAmount: calculateSumOfNumbers(this.mockDonates)
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
        const nr = calculateSumOfNumbers(this.state['donates'])
        this.donateForm.updateTotalAmount(nr)
        this.donateList.updateDonates(this['state']['donates'])
    }

    run(){
        const renderForm = this.donateForm.render()
        const listRender = this.donateList.render()
        return document.body.append(renderForm, listRender)
    }
    
}