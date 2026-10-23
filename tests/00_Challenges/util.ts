export function spentCalculation(amounts: string[]) {

    let spent = 0;
    let amountEarned = 0;
    amounts.forEach(amount => {
        const value = Number(amount.replace(/[^0-9.+-]/g, ''));
        console.log(value);
        if(value < 0)
        {
            spent = spent + Math.abs(value);
        }
        else {
            amountEarned = amountEarned + value;
        }
    });
    return {spent, amountEarned} ;
}

