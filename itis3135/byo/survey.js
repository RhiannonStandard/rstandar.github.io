document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("introForm");
  const resultDiv = document.getElementById("introResult");
  const heading = document.getElementById("formHeading");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const file = document.getElementById("image").files[0];
    if (!file || !/\.(jpe?g|png)$/i.test(file.name)) {
      alert("Please upload a valid PNG or JPG image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const imageDataURL = event.target.result;

      const name = document.getElementById("name").value;
      const mascot = document.getElementById("mascot").value;
      const caption = document.getElementById("imgCaption").value;
      const personal = document.getElementById("personalBg").value;
      const professional = document.getElementById("professionalBg").value;
      const academic = document.getElementById("academicBg").value;
      const web = document.getElementById("webBg").value;
      const platform = document.getElementById("platform").value;
      const funny = document.getElementById("funny").value;
      const extra = document.getElementById("extra").value;
      const courses = Array.from(document.querySelectorAll(".course-input"))
        .map(input => input.value.trim())
        .filter(val => val !== "");

      let html = `
        <div class="content">
          <h2>Introduction</h2>
          <div class="subtitle">${name} | ${mascot}</div>
          <img src="${imageDataURL}" alt="Photo of ${name}" class="profile-img">
          <div class="img-caption">${caption}</div>
          <p><strong>Personal background:</strong> ${personal}</p>
          <p><strong>Professional background:</strong> ${professional}</p>
          <p><strong>Academic background:</strong> ${academic}</p>
          <p><strong>Programming Software Background:</strong> ${web}</p>
          <p><strong>Primary Computer Platform:</strong> ${platform}</p>`;

      if (courses.length) {
        html += `<p><strong>Courses I'm in & Why:</strong><br>${courses.join(", ")}</p>`;
      }

      if (funny) html += `<p><strong>Funny/Interesting Item:</strong> ${funny}</p>`;
      if (extra) html += `<p><strong>Just for fun:</strong> ${extra}</p>`;

      html += `</div>`;

      form.style.display = "none";
      heading.style.display = "none";
      resultDiv.innerHTML = html;
    };

    reader.readAsDataURL(file);
  });
});

function addCourse() {
  const container = document.getElementById("courseInputs");
  const input = document.createElement("input");
  input.type = "text";
  input.className = "course-input";
  input.placeholder = "Course name";
  container.appendChild(input);
}

function removeCourse() {
  const container = document.getElementById("courseInputs");
  const inputs = container.querySelectorAll(".course-input");
  if (inputs.length > 1) {
    container.removeChild(inputs[inputs.length - 1]);
  }
}
