document.addEventListener("DOMContentLoaded", (event) => {

    const streamToggle = document.getElementById('stream-toggle')
    const devicesInput = document.getElementById("select-device")
    const muteInput = document.getElementById("mute")
    const hideCameraInput = document.getElementById("hide-camera")
    const video = document.getElementById("video")
    const errors = document.getElementById("errors")
    let stream = undefined

    streamToggle.addEventListener("click", toggleStreaming)
    muteInput.addEventListener("click", muteClicked)
    hideCameraInput.addEventListener("click", hideCameraClicked)

    let isStreaming = false;
    let isStreamMuted = false;
    let isCameraHidden = false;

    getDevices()

    async function getDevices() {
        const devices = (await navigator.mediaDevices.enumerateDevices()).filter((device) => device.kind === 'videoinput');
        devicesInput.innerHTML = "<option disabled>Select Device</option>"
        devices.forEach((device) => {
            devicesInput.innerHTML += `<option value="${device.deviceId}">${device.label}</option>`
        })
    }

    function toggleStreaming() {
        if(isStreaming) {
            stopStream()
            return
        }

        if(!'mediaDevices' in navigator || !('getUserMedia' in navigator.mediaDevices)) {
            return
        }

        startStream(devicesInput.value, muteInput.checked, hideCameraInput.checked)
    }

    function startStream (device, mute, hideCamera) {
        isStreaming = true

        navigator.mediaDevices.getUserMedia({
            video: hideCamera ? false : {
                width: 1280,
                height: 720
            },
            audio: !mute,
            deviceId: {
                exact: device.value
            }
        }).then((mediaStream) => {
            stream = mediaStream
            video.srcObject = mediaStream
        })

        streamToggle.innerHTML = "Stop Streaming"
        streamToggle.classList.add("bg-red-400")
        streamToggle.classList.remove("bg-indigo-500")
    }

    function stopStream() {
        stream.getTracks().map((track) => track.stop())
        isStreaming = false
        video.srcObject = null
        streamToggle.innerHTML = "Start Streaming"
        streamToggle.classList.add("bg-indigo-500")
        streamToggle.classList.remove("bg-red-400")
    }

    function muteClicked () {
        if(!isStreaming) {
            return;
        }

        const track = stream.getTracks().filter((track) => track.kind === 'audio')[0];
        track.enabled = isStreamMuted
        isStreamMuted = !isStreamMuted
    }

    function hideCameraClicked() {
        if(!isStreaming) {
            return;
        }

        const track = stream.getTracks().filter((track) => track.kind === 'video')[0];
        track.enabled = isCameraHidden
        isCameraHidden = !isCameraHidden
    }
})