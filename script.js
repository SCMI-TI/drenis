function printForm() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    let printContent = '<h1>Formulário</h1>';
    formData.forEach((value, key) => {
        printContent += `<p><strong>${key}:</strong> ${value}</p>`;
    });

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Imprimir Formulário</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('<hr>');
    printWindow.document.write(printContent); // Duas vias
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
