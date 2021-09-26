


export class DonateForm {
    #formElement
    constructor(totalAmount , createNewDonate) {

        this.createNewDonate = createNewDonate
        this.totalAmount = totalAmount
        this.#formElement = document.createElement('form')
        this.#formElement.className = 'donate-form'
    }

    updateTotalAmount(newAmount){
        const amountTotal = document.createElement('h1')
        amountTotal.setAttribute('id', 'total-amount')
        amountTotal.textContent = `${newAmount} $`

        return amountTotal
    }


    #createForm(){
        const inputLabel = document.createElement('label')
        inputLabel.className = 'donate-form__input-label'
        inputLabel.textContent = 'Введите сумму в $'

        const donateInput = document.createElement('input')
        donateInput.className = 'donate-form__donate-input'
        donateInput.setAttribute('name', 'amount')
        donateInput.setAttribute('type', 'number')
        donateInput.setAttribute('max', '100')
        donateInput.setAttribute('min', '0')
        donateInput.setAttribute('required', '')

        inputLabel.append(donateInput)

        const formBtn = document.createElement('button')
        formBtn.className = 'donate-form__submit-button'
        formBtn.setAttribute('type', 'submit')
        formBtn.textContent = 'Задонатить'

        const totalAmountHTML = this.updateTotalAmount(this.totalAmount)

        this.#formElement.append(
            totalAmountHTML,
            inputLabel,
            formBtn
        )

    }


    render(){
      this.#formElement.addEventListener('submit', (event) => {
            const getInput = document.querySelector('.donate-form__donate-input')
            const getInputValue = getInput.value

          this.createNewDonate({
               amount: +getInputValue,
               date: new Date()
           })

          getInput.value = ''
           event.preventDefault()
        })



        this.#createForm()
        return this.#formElement
    }
    
}