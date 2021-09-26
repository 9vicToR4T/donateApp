import {momentDate} from "../utils/functionsHelper";


export class DonateList {
    #arrayOfDonates
    #donatesContainer



    constructor(donates) {
        this.#arrayOfDonates = donates
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'

    }



    updateDonates(updatedDonates = []){
        const listContainer =document.createElement('div')
        listContainer.className = 'donates-container__donates'
        listContainer.innerHTML = ''
        updatedDonates.forEach(({amount,date}) =>{
            listContainer.append(this.#createItem(amount, date))
             })
        return listContainer
    }


    #createItem(donate, day) {
        const listItem = document.createElement('div')
        listItem.className='donate-item'
        const money = document.createElement('b')
        money.textContent = ` - ${donate}`
        const dayOfDonate = momentDate(day)

        listItem.append(dayOfDonate, money)

        return listItem
    }


        render(){
            // this.#createList(this.#arrayOfItems)
                const title = document.createElement('h2')
                title.className = 'donates-container__title'
                title.textContent = 'List of donates'


            this.#donatesContainer.append(title, this.updateDonates(this.#arrayOfDonates))





            return this.#donatesContainer
        }

}