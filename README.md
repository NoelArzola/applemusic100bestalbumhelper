# Apple Music's 100 Best Albums Helper
This tool helps you easily add all 100 albums that made the list to your Apple Music library.

## Step 1 - Log in
Log in to https://100best.music.apple.com using the Apple ID you want to add the albums to.

## Step 2 - Load the albums
This is the boring part. To get the full 100 buttons to render, you have to scroll from 100 to 1.
1. You have to click the list view in the top left for this to work
2. Click album 100, Robyn. This will give you the expanded view that we need to expose the buttons
3. Start scrolling. I recommend using End, Page Down, or the down arrow in that order to get from 100 to 1, this will take about a minute depending on your machine

## Step 3 - Open the console and insert the code
1. Right-click on the page and click "Inspect".
2. Click the Console tab.
3. Paste the code at the prompt, usually indicated by `>`.
    - If you get a warning, type "allow paste" or follow the prompt's instructions.
    - Paste the code again.

## Step 4 - Wait, then check
In a best-case scenario, the servers will play nice, and all albums will be added. The console should output a success message.
If it failed, or not all albums made it through, refresh the page and start at Step 2.
