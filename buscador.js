function scrollToSection() {
    const sectionName = document.getElementById('sectionName').value.toLowerCase().trim();
    const allSections = Array.from(document.querySelectorAll('[id]')).map(section => section.id.toLowerCase());

    if (allSections.includes(sectionName)) {
        document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
    } else {
        const fallbackUrl = `${sectionName}.html`;
        window.location.href = fallbackUrl;
    }
}



