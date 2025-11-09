// پیدا کردن المان خروجی در HTML
const outputElement = document.getElementById('output');

/**
 * تابعی برای محاسبه و نمایش سطح نمره بر اساس ورودی
 * @param {number} inputScore - نمره‌ای که باید بررسی شود
 */
function checkGrade(inputScore) {
    let grade;

    if (inputScore >= 90) {
        grade = 'A';
    } else if (inputScore >= 80) {
        grade = 'B';
    } else if (inputScore >= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }
    
    // تابع مقدار نهایی سطح (Grade) را برمی‌گرداند (return)
    return `نمره ${inputScore}، سطح ${grade} را دریافت کرد.`;
}

// فراخوانی (Call) تابع با ورودی‌های مختلف
const student1Result = checkGrade(92);
const student2Result = checkGrade(65);

// نمایش نتایج در کنسول
console.log(student1Result);
console.log(student2Result);

// نمایش نتیجه نهایی در صفحه HTML
outputElement.innerHTML = `
    <h2>نتایج بررسی سطح نمرات:</h2>
    <p>${student1Result}</p>
    <p>${student2Result}</p>
`;