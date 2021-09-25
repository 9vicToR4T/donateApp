import {momentDate} from "../utils/functionsHelper";


export class DonateList {
    #arrayOfDonates
    #donatesContainer
    #listContainer


    constructor(donates) {
        this.#arrayOfDonates = donates
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'
        this.#listContainer = document.createElement('div')
        this.#listContainer.className = 'donates-container__donates'
    }



    updateDonates(updatedDonates = []){
        this.#listContainer.innerHTML = ''
       return updatedDonates.forEach(({amount,date}) =>{
                this.#listContainer.append(this.#createItem(amount, date))
            })
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

            this.updateDonates(this.#arrayOfDonates)
            this.#donatesContainer.append(title, this.#listContainer)





            return this.#donatesContainer
        }

}