<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>حساب المعدل الجامعي</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>حساب المعدل الجامعي</h2>
        
        <label for="scale">اختر نظام المعدل:</label>
        <select id="scale">
            <option value="4">مقياس 4</option>
            <option value="5">مقياس 5</option>
        </select>

        <table>
            <thead>
                <tr>
                    <th>المادة</th>
                    <th>الدرجة</th>
                    <th>عدد الساعات</th>
                    <th>إزالة</th>
                </tr>
            </thead>
            <tbody id="gradesTable"></tbody>
        </table>

        <button onclick="addRow()">إضافة مادة</button>
        <button onclick="calculateGPA()">حساب المعدل</button>

        <h3 id="result">المعدل: --</h3>
    </div>

    <script src="script.js"></script>
</body>
</html>
