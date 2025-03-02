function addRow() {
    let table = document.getElementById("gradesTable");
    let row = table.insertRow();
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = <input type="text" placeholder="اسم المادة">;

    // قائمة اختيار الدرجات (المطلوبة فقط)
    cell2.innerHTML = <select class="grade-select">
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
    </select>;

    cell3.innerHTML = <input type="number" class="hours" placeholder="الساعات" min="1">;
    cell4.innerHTML = <button onclick="deleteRow(this)">❌</button>;
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function calculateGPA() {
    let grades = document.querySelectorAll(".grade-select");
    let hours = document.querySelectorAll(".hours");
    let scale = document.getElementById("scale").value;

    let totalPoints = 0;
    let totalHours = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i].value;
        let hour = parseFloat(hours[i].value);

        if (isNaN(hour)) continue;

        let gpa = convertGradeToGPA(grade, scale);
        totalPoints += gpa * hour;
        totalHours += hour;
    }

    let finalGPA = totalPoints / totalHours;
    document.getElementById("result").innerText = المعدل: ${finalGPA.toFixed(2)};
}

function convertGradeToGPA(grade, scale) {
    let gpaScale4 = {
        "A": 4.0, "B+": 3.5, "B": 3.0, "C+": 2.5, "C": 2.0,
        "D+": 1.5, "D": 1.0, "F": 0.0
    };

    let gpaScale5 = {
        "A": 5.0, "B+": 4.5, "B": 4.0, "C+": 3.0, "C": 2.5,
        "D+": 1.5, "D": 1.0, "F": 0.0
    };

    return scale == 4 ? gpaScale4[grade] : gpaScale5[grade];
      }
