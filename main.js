async function loadTemplate(url, templateId, targetId) {
    const response = await fetch(url);
    const html = await response.text();

    // Parse fetched HTML
    const container = document.createElement("div");
    container.innerHTML = html;

    const template = container.querySelector(`#${templateId}`);
    const target = document.getElementById(targetId);

    target.appendChild(template.content.cloneNode(true));
}

document.addEventListener("DOMContentLoaded", () => {
    loadTemplate("/components/navbar.html", "navbar-template", "navbar");
    loadTemplate("/components/footer.html", "footer-template", "footer");
});
