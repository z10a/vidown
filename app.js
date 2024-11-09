function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;

    if (!videoUrl) {
        alert('Please enter a video URL');
        return;
    }

    // Simulate calling an API or backend to download the video
    const videoDownloadUrl = `https://some-api.com/download?url=${encodeURIComponent(videoUrl)}`;

    // Simulate showing the download link (replace this with actual API response)
    const downloadLinkElement = document.getElementById('downloadLink');
    const linkElement = document.getElementById('link');
    linkElement.href = videoDownloadUrl;
    downloadLinkElement.style.display = 'block';
}
