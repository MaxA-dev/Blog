function openModal(imageSrc) {
  let modalId = "modal-" + imageSrc.split(".")[0]; // Generate modal ID dynamically
  let modal = document.getElementById(modalId);
  let imgElement = modal.querySelector(".modal-content");
  imgElement.src = "images/" + imageSrc;
  modal.style.display = "flex"; // Show modal
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
