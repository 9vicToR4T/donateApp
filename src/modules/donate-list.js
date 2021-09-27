import {momentDate} from "../core/functionsHelper";


export class DonateList {
    #arrayOfDonates
    #donatesContainer
    static TitleList = {
        'ListTitle' : 'List of donates'
    }


    constructor(donates) {
        this.#arrayOfDonates = donates
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'
        this.listContainer = document.createElement('div')
        this.listContainer.className = 'donates-container__donates'

    }


    createDonates(container ){
        container.innerHTML = ''
        this.#arrayOfDonates.forEach(({amount, date}) =>{
            const donate = this.#createItem(amount, date)
                container.append(donate)
             })

    }


    updateDonates(newArr){
        this.#arrayOfDonates = newArr
        this.createDonates(this.listContainer)
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

                const title = document.createElement('h2')
                title.className = 'donates-container__title'
                title.textContent = DonateList.TitleList.ListTitle
                this.listContainer = document.createElement('div')
                this.listContainer.className = 'donates-container__donates'



            this.#donatesContainer.append(title, this.listContainer)
            this.updateDonates(this.#arrayOfDonates)





            return this.#donatesContainer
        }

}