const content = document.querySelector(".content");
const form = content.querySelector("form");
const params = new URLSearchParams(window.location.search);

if (params.has("submitted")) {
    const success = document.createElement("p");
    success.innerText = "Your message has been successfully submitted.";
    content.append(success);
    form.remove();
}