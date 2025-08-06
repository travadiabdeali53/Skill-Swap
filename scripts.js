function addSkill(type) {
  const inputId = type === 'offered' ? 'offered' : 'wanted';
  const listId = type === 'offered' ? 'offered-skills' : 'wanted-skills';

  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const skill = input.value.trim();

  if (skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    li.classList.add('skill-tag');
    list.appendChild(li);
    input.value = '';
  } else {
    alert('Please enter a skill before adding!');
  }
}

// Optional: Show alert when profile is saved
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('profile-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual submit
      alert('Profile saved successfully!');
    });
  }
});
