function kiemTra() {
    let thang = Number(document.getElementById("month").value)
    switch (thang) {
        case 1:
        case 3:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("ketQua").innerHTML = `Tháng ${thang} có 31 ngày.`
            break
        case 2:
            document.getElementById("ketQua").innerHTML = `Tháng ${thang} có 28 hoặc 29 ngày.`
            break
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("ketQua").innerHTML = `Tháng ${thang} có 30 ngày.`
            break
        default:
            document.getElementById("ketQua").innerHTML = `Tháng không hợp lệ.`
    }
}