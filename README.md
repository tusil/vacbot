# vacbot
script that creates oddshot every time when at least 100 users says "VAC" in the Twitch chat

# current prototype version 0.1.0
Just paste contents of console.js to chrome dev console on stream tab and hit enter. Followers info under stream will be replaced with VAC: <count> and when count reaches over 100, script will click on Oddshot button (you need Oddshot chrome extension)

# future version 0.2.0
Currently working on node version with custom video capture, because oddshot seems to be bottleneck - not all videos are uploaded, sometimes returning just blank page, some update message or it just get stuck on processing page.