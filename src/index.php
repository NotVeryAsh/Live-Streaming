<html lang="en">
    <head>
        <title>Livestreaming</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="app.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>
    <body class="flex m-3 flex-col">
        <script src="app.js"></script>
        <h1 class="flex text-5xl font-semibold mx-auto mt-5 items-center h-20 bg-white rounded-lg drop-shadow-lg p-10">
            Live Streaming Basic Demo
        </h1>
        <div class="flex mx-auto flex-col mt-10 bg-blue-100 rounded-lg drop-shadow-lg">
            <h2 class="text-center text-3xl font-semibold mt-5">
                Livestream
            </h2>
            <video autoplay id="video" width="1280" height="720" class="ring ring-4 ring-indigo-200 rounded-lg m-5">

            </video>
            <div class="my-5 flex-row space-x-5 mx-auto">
                <label for="select-device" class="text-xl">
                    Available Devices
                </label>
                <select id="select-device" class="rounded-lg outline-none focus:outline-none">
                    <option>Select Device</option>
                </select>
                <button id="stream-toggle" class="rounded-xl bg-indigo-500 text-white text-2xl font-semibold text-center px-4 py-2">
                    Start Streaming
                </button>
            </div>
            <div class="my-5 flex-row space-x-5 mx-auto">
                <label for="mute" class="text-xl">
                    Mute
                </label>
                <input type="checkbox" id="mute">
                <label for="hide-camera" class="text-xl">
                    Hide Camera
                </label>
                <input type="checkbox" id="hide-camera">
            </div>
        </div>
    </body>
</html>