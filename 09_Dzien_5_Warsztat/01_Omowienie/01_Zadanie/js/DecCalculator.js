import Calculator from './Calculator';

class DecCalculator extends Calculator {
    constructor(selector) {
        super(selector);
        this.tooltip = this.$calculatorDOMElement.querySelector('.popover');
    }
    showTooltip(text) {
        this.tooltip.children[1].innerText = text;
        this.tooltip.classList.add('show');
    }
    hideTooltip() {
        this.tooltip.classList.remove('show');
    }
    add(numberX, numberY){
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
            let carryBit = numberX[i] + numberY[i] + result[i];
            if (carryBit === 10) {
                result[i] = 0;
                result[i - 1] = 1;
            } else if (carryBit > 10) {
                result[i] = carryBit % 10;
                result[i - 1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }
    changeNumber(root) {
        const input = root.firstElementChild;
        input.contentEditable = true;
        input.focus();
        this.showTooltip('Naciśnij aby dodać wartości');
    }
    checkNumber() {
        super.checkNumber();
        return [...this.firstNumberArray, ...this.secondNumberArray].every((el) => {
            return typeof el === 'number' && el < 10 && el >= 0;
        });
    }

    initEvents() {
        super.initEvents();

        this.$calculatorDOMElement.querySelector('.operator-bar span').addEventListener('click', (e) => {

            this.hideTooltip();
            const checkNumbers = this.checkNumber();
            if (checkNumbers) {
                this.updateResult();
            } else {
                this.showTooltip('Wartości muszą być cyframi (0-9)');
            }

        });
    }

}




export default DecCalculator;
