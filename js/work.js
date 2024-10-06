const videoPlayer = document.getElementById("videoPlayer");

    function playVideo(videoSrc) {
        // 设置视频源
        videoPlayer.src = videoSrc;
        videoPlayer.load(); // 加载新的视频
        videoPlayer.play()  // 播放视频
            .catch(error => {
                console.error("播放失败:", error);
            });
    }
	