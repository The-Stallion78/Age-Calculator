let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
    let birthDay = new Date(userInput.value);   // Date of Birth

    let d1 = birthDay.getDate();
    let m1 = birthDay.getMonth() + 1; // since month in JS starts with 0
    let y1 = birthDay.getFullYear();

    let toDay = new Date(); // Present Date

    let d2 = toDay.getDate();
    let m2 = toDay.getMonth() + 1;
    let y2 = toDay.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;   // years Difference

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + (m2 - m1);
    }

    if (d2 >= d1){  // Days difference
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `Your are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days Old.`
}

function getDaysInMonth() {
    return new Date (year, month, 0).getDate();
}