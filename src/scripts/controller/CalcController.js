class CalcController {

    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._timeEl = document.querySelector("#hora");
        this._dateEl = document.querySelector("#data");
        this.initialize();
    }

    initialize() {

        this.getDisplayDateTime();

      setInterval(()=>{


          this.getDisplayDateTime();

      },1000);

    }

    getDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
       return this._timeEl.innerHTML = value;
    }


    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }


    set displayCalc(value) {
        this._displayCalcEl = value;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this.currentDate = value;
    }

}