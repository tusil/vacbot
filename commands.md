livestreamer -o vacbot.mp4 -f twitch.tv/JoshOG high

ffmpeg -i vacbot.mp4 -ss 00:00:15 -t 5 -async 1 cut.mp4


