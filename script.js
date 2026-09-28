// Patient Registration
document.getElementById("registrationForm").addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values
    const patientName = document.getElementById("patientName").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
    const symptoms = document.getElementById("symptoms").value;

    // Generate Appointment ID
    const appointmentId =
        "APT" + Math.floor(100 + Math.random() * 900);

    // Add appointment to table
    const table = document.getElementById("appointmentTable");

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${appointmentId}</td>
        <td>${patientName}</td>
        <td>${department}</td>
        <td>${doctor}</td>
        <td>${appointmentDate}</td>
        <td>${appointmentTime}</td>
        <td>
            <span class="badge bg-success">
                Confirmed
            </span>
        </td>
    `;

    table.appendChild(newRow);

    // Update Health Information
    document.getElementById("healthPatient").textContent = patientName;
    document.getElementById("healthBlood").textContent = bloodGroup;
    document.getElementById("healthDepartment").textContent = department;
    document.getElementById("healthDoctor").textContent = doctor;
    document.getElementById("healthDate").textContent = appointmentDate;
    document.getElementById("healthTime").textContent = appointmentTime;
    document.getElementById("healthSymptoms").textContent = symptoms;

    // Success message
    alert(
        "Registration successful!\n\n" +
        "Appointment ID: " + appointmentId
    );

    // Scroll to appointments
    document.getElementById("appointments").scrollIntoView({
        behavior: "smooth"
    });

});


// Reset Form
document.getElementById("registrationForm").addEventListener("reset", function () {

    document.getElementById("healthPatient").textContent = "Rahul Kumar";
    document.getElementById("healthBlood").textContent = "B+";
    document.getElementById("healthDepartment").textContent = "Cardiology";
    document.getElementById("healthDoctor").textContent = "Dr. Priya Sharma";
    document.getElementById("healthDate").textContent = "2026-10-05";
    document.getElementById("healthTime").textContent = "10:30 AM";
    document.getElementById("healthSymptoms").textContent =
        "Regular health consultation";

});