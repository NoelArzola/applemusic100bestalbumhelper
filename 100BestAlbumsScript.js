const addToLibraryButtons = document.querySelectorAll(
  "[data-testid='add-to-library-button']"
);

const delayPerButton = 15000;

async function addToLibraryWithDelay(buttons, delayPerButton) {
  for (const button of buttons) {
    await new Promise((resolve) => setTimeout(resolve, delayPerButton));
    button.click();
  }
}

addToLibraryWithDelay(addToLibraryButtons, delayPerButton)
  .then(() => {
    console.log("Albums added");
  })
  .catch((error) => {
    console.error("Error adding albums:", error);
  });
