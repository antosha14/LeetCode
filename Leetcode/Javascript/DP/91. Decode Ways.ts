function numDecodings(s: string): number {
    const stringLength = s.length;
    let previousCount = 0; 
    let currentCount = 1;  
  
    for (let i = 1; i <= stringLength; ++i) {
        // Если может стоять отдельно то сохраняются все варианты с прошлых позиций
        let newCount = s[i - 1] !== '0' ? currentCount : 0;
        // И в добавок если можно сделать новую цифру, то к ним добавляем кол-во пред
        if (i > 1 && (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6'))) {
            newCount += previousCount;
        }
      
        [previousCount, currentCount] = [currentCount, newCount];
    }
    return currentCount;
}