import _ from 'lodash'

export class Data {
  totalCards : { number: number }[] = [
    {
      number: -1
    }
  ]

  deal() {
    if(this.totalCards.length > 5) {
      return this.totalCards.splice(0, 5)
    } else{
      return this.totalCards.splice(0, 2)
    }
  }

  reset() {
    let tmpArray:{ number: number }[] = []
    for(let i = 0; i < 52; i ++) {
      tmpArray.push({ number : i })
    }
    let tmp = _.shuffle(tmpArray) 
    this.totalCards = tmp
    let result = false
    if(!(tmp[50].number % 13) || !(tmp[51].number % 13)) {
      result = true
    }
    return {
      cards: this.totalCards,
      success: result,
    }
  }
}