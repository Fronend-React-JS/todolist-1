function addUser() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
  
    if (name === "") {
      alert("Bo'sh ma'lumotni o'zini saqlab bo'lmaydi!");
      return;
    }
  
    var table = document
      .getElementById("userDataTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var nameCell = newRow.insertCell(0);
    var deleteCell = newRow.insertCell(1);
  
    nameCell.innerHTML = name;
    deleteCell.innerHTML =
      '<button class="delete-btn" onclick="deleteUser(this.parentNode.parentNode)">Ochirirsh</button>';
  
    nameInput.value = "";
  }
  
  function deleteUser(row) {
    row.parentNode.removeChild(row);
  }
  