/* 
By default this will show in your recently added with the top albums first,
to modify this behavior:
  --change seedNumber to 1
  --change the while to seedNumber <= 100
  --change seedNumber-- to seedNumber++ 
  --check to make sure you did that last step ;-)
*/

const delayPerButton = 15000;
let seedNumber = 100;

async function addToLibraryWithDelay(seedNumber, delayPerButton) {
  while (seedNumber > 0) {
    const albumID = seedNumber.toString();
    try {
      const parentElement = document.getElementById(albumID);
      if (parentElement) {
        const button = parentElement.querySelector(
          '[data-testid="add-to-library-button"]'
        );
        if (button) {
          await new Promise((resolve) => setTimeout(resolve, delayPerButton));
          button.click();
        } else {
          console.log(
            `Button not found for album #${albumID}. Is it already in your library?`
          );
        }
      } else {
        console.log(
          `Album #${albumID} not found. Did you load the whole page?`
        );
      }
    } catch (error) {
      console.log(`Error processing album # ${albumID}`, error);
    }
    seedNumber--;
  }
}

addToLibraryWithDelay(seedNumber, delayPerButton)
  .then(() => {
    console.log("Albums added");
  })
  .catch((error) => {
    console.error("Error adding albums:", error);
  });
