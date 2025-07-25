function batDau() {
  const bang = parseInt(document.getElementById("bang").value);
  const cauHoiDiv = document.getElementById("cau-hoi");
  cauHoiDiv.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("div");
    row.innerHTML = `
      ${bang} x ${i} = <input type="number" id="answer-${i}" />
    `;
    cauHoiDiv.appendChild(row);
  }

  document.getElementById("bai-tap").style.display = "block";
  document.getElementById("ket-qua").innerHTML = "";
}

function kiemTraKetQua() {
  let dung = 0;
  const ketQuaDiv = document.getElementById("ket-qua");
  ketQuaDiv.innerHTML = "";
  const bang = parseInt(document.getElementById("bang").value);

  for (let i = 1; i <= 10; i++) {
    const input = document.getElementById(`answer-${i}`);
    const dapAn = parseInt(input.value);
    const dungSo = bang * i;

    const resultLine = document.createElement("p");
    if (dapAn === dungSo) {
      resultLine.innerHTML = `✅ ${bang} x ${i} = ${dapAn} (Đúng)`;
      resultLine.style.color = "green";
      dung++;
    } else {
      resultLine.innerHTML = `❌ ${bang} x ${i} = ${dapAn || "?"} (Sai, đúng là ${dungSo})`;
      resultLine.style.color = "red";
    }
    ketQuaDiv.appendChild(resultLine);
  }

  const tongKet = document.createElement("h3");
  tongKet.textContent = `🎯 Bạn đúng ${dung}/10 câu.`;
  ketQuaDiv.appendChild(tongKet);
}
