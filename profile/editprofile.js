document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('edit-profile-form');
    const formData = JSON.parse(localStorage.getItem('formData')) || {};

    // Pre-fill form fields with existing data
    document.getElementById('fullName').value = formData.fullName || '';
    document.getElementById('majorFieldOfStudy').value = formData.majorFieldOfStudy || '';
    document.getElementById('yearOfStudy').value = formData.yearOfStudy || '';
    document.getElementById('bio').value = formData.bio || '';

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Update formData object
        formData.fullName = document.getElementById('fullName').value;
        formData.majorFieldOfStudy = document.getElementById('majorFieldOfStudy').value;
        formData.yearOfStudy = document.getElementById('yearOfStudy').value;
        formData.bio = document.getElementById('bio').value;

        // Save updated formData to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Handle profile photo upload
        const photoInput = document.getElementById('profilePhoto');
        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('profilePhoto', e.target.result);
            };
            reader.readAsDataURL(photoInput.files[0]);
        }

        // Redirect back to profile page
        window.location.href = 'profile.html';
    });
});
