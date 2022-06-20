setTimeout(getData, 1);

function getData() {
    fetch('https://62afd6173bbf46a35226b831.mockapi.io/student')
        .then(res => res.json())
        .then(data => generateTable(data))

}

function generateTable(data) {
    for (let i = 0; i < data.length; i++) {
        document.getElementById('studentTable').innerHTML +=
            ` <tr onclick="fillData(getID())" id="` + data[i].id + `">
                <td>` + data[i].stt + `</td>
                <td>` + data[i].id + `</td>
                <td>` + data[i].name + `</td>
                <td>` + data[i].class + `</td>
            </tr>`
    }
}

function getID() {
    console.log(event.currentTarget.id)
    return event.currentTarget.id;
}

function fillData(id) {
    fetch('https://62afd6173bbf46a35226b831.mockapi.io/student/' + id)
        .then(res => res.json())
        .then(data => fillToTable(data))
}

function fillToTable(data) {
    document.getElementById('inputID').value = data.id;
    document.getElementById('inputName').value = data.name;
    document.getElementById('inputClass').value = data.class;
    document.getElementById('inputSTT').value = data.stt;
}

function deleteData() {
    let id = document.getElementById('inputID').value;
    try {
        fetch('https://62afd6173bbf46a35226b831.mockapi.io/student/' + id, {
            method: 'DELETE'
        })
        alert('Xóa thành công');
        location.reload();
    } catch (e) {
        console.log(e)
    }
}

function updateData() {
    let id = document.getElementById('inputID').value;
    let name = document.getElementById('inputName').value;
    let Sclass = document.getElementById('inputClass').value;
    let stt = document.getElementById('inputSTT').value;
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                name: name,
                class: Sclass,
                stt: stt
            })
        };
        fetch('https://62afd6173bbf46a35226b831.mockapi.io/student/' + id, requestOptions)
            .then(res => res.json())
        alert('Cập nhật thành công');
        location.reload();
    } catch (e) {
        console.log(e)
    }
}

function addData() {
    let id = document.getElementById('inputID').value;
    let name = document.getElementById('inputName').value;
    let Sclass = document.getElementById('inputClass').value;
    let stt = document.getElementById('inputSTT').value;
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                name: name,
                class: Sclass,
                stt: stt
            })
        };
        fetch('https://62afd6173bbf46a35226b831.mockapi.io/student', requestOptions)
            .then(res => res.json())
        alert('Thêm thành công');
        location.reload();
    } catch (e) {
        console.log(e)
    }
}

function clearForm() {
    document.getElementById('inputID').value = '';
    document.getElementById('inputName').value = '';
    document.getElementById('inputClass').value = '';
    document.getElementById('inputSTT').value = '';
}