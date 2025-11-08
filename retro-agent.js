// Retro Aesthetic Generator Agent
// The AI that transforms modern concepts into vintage digital experiences

class RetroAgent {
    constructor() {
        this.generators = {
            arcade: this.generateArcade.bind(this),
            win95: this.generateWin95.bind(this),
            terminal: this.generateTerminal.bind(this),
            web1: this.generateWeb1.bind(this),
            lcd: this.generateLCD.bind(this)
        };

        this.styleNames = {
            arcade: '🕹️ 80s Arcade',
            win95: '💾 Windows 95',
            terminal: '💻 Terminal',
            web1: '🌐 Web 1.0',
            lcd: '📟 LCD Display'
        };
    }

    // Main generation method
    generate(concept, description, selectedStyles) {
        const results = [];

        for (const style of selectedStyles) {
            if (this.generators[style]) {
                const code = this.generators[style](concept, description);
                results.push({
                    style,
                    name: this.styleNames[style],
                    code
                });
            }
        }

        return results;
    }

    // 🕹️ 80s ARCADE GENERATOR
    generateArcade(concept, description) {
        const title = concept.toUpperCase();

        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Press Start 2P', cursive;
            background: #000;
            color: #fff;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        /* CRT Scanline Effect */
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
            z-index: 1000;
        }

        /* Animated Stars Background */
        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(2px 2px at 20% 30%, white, transparent),
                        radial-gradient(2px 2px at 60% 70%, white, transparent),
                        radial-gradient(1px 1px at 50% 50%, white, transparent),
                        radial-gradient(1px 1px at 80% 10%, white, transparent),
                        radial-gradient(2px 2px at 90% 60%, white, transparent),
                        radial-gradient(1px 1px at 33% 80%, white, transparent);
            background-size: 200% 200%;
            animation: twinkle 5s ease-in-out infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }

        .arcade-cabinet {
            position: relative;
            background: linear-gradient(135deg, #ff0080, #ff8c00, #40e0d0);
            padding: 4px;
            border-radius: 20px;
            box-shadow:
                0 0 20px rgba(255, 0, 128, 0.5),
                0 0 40px rgba(255, 140, 0, 0.3),
                inset 0 0 60px rgba(255, 255, 255, 0.1);
            animation: neonPulse 2s ease-in-out infinite;
        }

        @keyframes neonPulse {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
        }

        .screen {
            background: #000;
            border-radius: 16px;
            padding: 40px;
            min-width: 600px;
            min-height: 400px;
        }

        .title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 30px;
            color: #ff0080;
            text-shadow:
                0 0 10px #ff0080,
                0 0 20px #ff0080,
                0 0 30px #ff0080,
                2px 2px 0 #ff8c00;
            animation: titleGlow 1.5s ease-in-out infinite;
        }

        @keyframes titleGlow {
            0%, 100% { text-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080, 2px 2px 0 #ff8c00; }
            50% { text-shadow: 0 0 20px #ff0080, 0 0 40px #ff0080, 2px 2px 0 #40e0d0; }
        }

        .content {
            background: rgba(0, 0, 50, 0.5);
            border: 3px solid #40e0d0;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 0 15px rgba(64, 224, 208, 0.5);
        }

        .button {
            background: linear-gradient(180deg, #ff0080, #cc0066);
            color: #fff;
            border: 3px solid #ff8c00;
            padding: 15px 30px;
            font-family: 'Press Start 2P', cursive;
            font-size: 0.8rem;
            cursor: pointer;
            box-shadow:
                0 5px 0 #990050,
                0 0 20px rgba(255, 0, 128, 0.5);
            transition: all 0.1s;
        }

        .button:hover {
            transform: translateY(2px);
            box-shadow:
                0 3px 0 #990050,
                0 0 30px rgba(255, 0, 128, 0.8);
        }

        .button:active {
            transform: translateY(5px);
            box-shadow: none;
        }

        .score {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 1.2rem;
            color: #40e0d0;
            text-shadow: 0 0 10px #40e0d0;
        }

        .insert-coin {
            text-align: center;
            margin-top: 30px;
            font-size: 0.7rem;
            color: #ff8c00;
            animation: blink 1s step-start infinite;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }

        @media (max-width: 768px) {
            .screen {
                min-width: 90vw;
                padding: 20px;
            }
            .title {
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <div class="stars"></div>
    <div class="arcade-cabinet">
        <div class="screen">
            <div class="score">SCORE: <span id="score">00000</span></div>
            <h1 class="title">${title}</h1>
            <div class="content">
                <p style="color: #40e0d0; font-size: 0.8rem; line-height: 1.6;">
                    ${description || 'Press START to begin your retro adventure!'}
                </p>
            </div>
            <div style="text-align: center;">
                <button class="button" onclick="alert('LEVEL UP!')">START</button>
            </div>
            <div class="insert-coin">★ INSERT COIN ★</div>
        </div>
    </div>

    <script>
        // Arcade magic
        let score = 0;
        setInterval(() => {
            score += Math.floor(Math.random() * 10);
            document.getElementById('score').textContent = String(score).padStart(5, '0');
        }, 2000);
    </script>
</body>
</html>`;
    }

    // 💾 WINDOWS 95 GENERATOR
    generateWin95(concept, description) {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${concept}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "MS Sans Serif", "Microsoft Sans Serif", sans-serif;
            background: #008080;
            padding: 20px;
            min-height: 100vh;
        }

        .window {
            background: #c0c0c0;
            border: 2px solid;
            border-color: #ffffff #000000 #000000 #ffffff;
            box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
            max-width: 600px;
            margin: 50px auto;
        }

        .title-bar {
            background: linear-gradient(90deg, #000080, #1084d0);
            padding: 3px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .title-bar-text {
            color: white;
            font-weight: bold;
            font-size: 11px;
            padding-left: 3px;
        }

        .title-bar-controls {
            display: flex;
            gap: 2px;
        }

        .title-bar-controls button {
            width: 16px;
            height: 14px;
            padding: 0;
            font-size: 8px;
            background: #c0c0c0;
            border: 1px solid;
            border-color: #ffffff #000000 #000000 #ffffff;
            cursor: pointer;
        }

        .title-bar-controls button:active {
            border-color: #000000 #ffffff #ffffff #000000;
        }

        .menu-bar {
            background: #c0c0c0;
            padding: 2px;
            border-bottom: 2px solid;
            border-color: #ffffff #000000 #000000 #ffffff;
        }

        .menu-item {
            display: inline-block;
            padding: 4px 8px;
            font-size: 11px;
            cursor: pointer;
        }

        .menu-item:hover {
            background: #000080;
            color: white;
        }

        .toolbar {
            background: #c0c0c0;
            padding: 4px;
            border-bottom: 2px solid;
            border-color: #ffffff #808080 #808080 #ffffff;
            display: flex;
            gap: 2px;
        }

        .toolbar-button {
            padding: 4px 8px;
            background: #c0c0c0;
            border: 2px solid;
            border-color: #ffffff #000000 #000000 #ffffff;
            font-size: 11px;
            cursor: pointer;
        }

        .toolbar-button:active {
            border-color: #000000 #ffffff #ffffff #000000;
            padding: 5px 7px 3px 9px;
        }

        .content {
            background: white;
            padding: 20px;
            min-height: 300px;
            border: 2px solid;
            border-color: #808080 #ffffff #ffffff #808080;
            margin: 2px;
        }

        .status-bar {
            background: #c0c0c0;
            padding: 3px;
            border-top: 2px solid;
            border-color: #ffffff #000000;
            display: flex;
            gap: 2px;
        }

        .status-panel {
            padding: 2px 8px;
            border: 2px solid;
            border-color: #808080 #ffffff #ffffff #808080;
            font-size: 11px;
            flex: 1;
        }

        .win95-button {
            padding: 8px 16px;
            background: #c0c0c0;
            border: 2px solid;
            border-color: #ffffff #000000 #000000 #ffffff;
            font-family: "MS Sans Serif", sans-serif;
            font-size: 11px;
            cursor: pointer;
            min-width: 75px;
        }

        .win95-button:active {
            border-color: #000000 #ffffff #ffffff #000000;
            padding: 9px 15px 7px 17px;
        }

        .win95-button:focus {
            outline: 1px dotted #000000;
            outline-offset: -4px;
        }

        h2 {
            font-size: 14px;
            margin-bottom: 10px;
            color: #000080;
        }

        p {
            font-size: 11px;
            line-height: 1.4;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">${concept}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize">_</button>
                <button aria-label="Maximize">□</button>
                <button aria-label="Close">×</button>
            </div>
        </div>

        <div class="menu-bar">
            <span class="menu-item"><u>F</u>ile</span>
            <span class="menu-item"><u>E</u>dit</span>
            <span class="menu-item"><u>V</u>iew</span>
            <span class="menu-item"><u>H</u>elp</span>
        </div>

        <div class="toolbar">
            <button class="toolbar-button">New</button>
            <button class="toolbar-button">Open</button>
            <button class="toolbar-button">Save</button>
            <div style="width: 2px; height: 20px; background: #808080; margin: 0 2px;"></div>
            <button class="toolbar-button">Cut</button>
            <button class="toolbar-button">Copy</button>
            <button class="toolbar-button">Paste</button>
        </div>

        <div class="content">
            <h2>${concept}</h2>
            <p>${description || 'Welcome to Windows 95 style interface!'}</p>
            <p>This retro interface brings back the classic look and feel of the mid-90s operating system.</p>
            <br>
            <button class="win95-button">OK</button>
            <button class="win95-button">Cancel</button>
            <button class="win95-button">Apply</button>
        </div>

        <div class="status-bar">
            <div class="status-panel">Ready</div>
            <div class="status-panel" style="flex: 0 0 auto;">12:00 PM</div>
        </div>
    </div>

    <script>
        // Update time
        function updateTime() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            document.querySelectorAll('.status-panel')[1].textContent = timeStr;
        }
        updateTime();
        setInterval(updateTime, 60000);
    </script>
</body>
</html>`;
    }

    // 💻 TERMINAL GENERATOR
    generateTerminal(concept, description) {
        const cmd = concept.toLowerCase().replace(/\s+/g, '-');

        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${concept} - Terminal</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'VT323', monospace;
            background: #000;
            color: #00ff00;
            padding: 20px;
            min-height: 100vh;
            font-size: 20px;
            line-height: 1.4;
        }

        .terminal {
            max-width: 800px;
            margin: 0 auto;
            background: #0a0a0a;
            border: 2px solid #00ff00;
            border-radius: 5px;
            box-shadow:
                0 0 10px rgba(0, 255, 0, 0.5),
                inset 0 0 100px rgba(0, 255, 0, 0.05);
            padding: 20px;
            position: relative;
        }

        /* CRT Effect */
        .terminal::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
        }

        .terminal-header {
            border-bottom: 1px solid #00ff00;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .prompt {
            color: #00ff00;
        }

        .prompt::before {
            content: "root@retro:~$ ";
            color: #00aa00;
        }

        .output {
            margin: 10px 0;
        }

        .cursor {
            display: inline-block;
            width: 10px;
            height: 20px;
            background: #00ff00;
            animation: blink 1s step-start infinite;
            margin-left: 2px;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }

        .ascii-art {
            color: #00aa00;
            font-size: 14px;
            line-height: 1.2;
            white-space: pre;
            margin: 20px 0;
        }

        .command {
            color: #00ff00;
            margin: 5px 0;
        }

        .comment {
            color: #00aa00;
        }

        input {
            background: transparent;
            border: none;
            color: #00ff00;
            font-family: 'VT323', monospace;
            font-size: 20px;
            outline: none;
            width: 80%;
        }

        .button {
            background: transparent;
            border: 2px solid #00ff00;
            color: #00ff00;
            padding: 10px 20px;
            font-family: 'VT323', monospace;
            font-size: 20px;
            cursor: pointer;
            margin: 5px;
            transition: all 0.2s;
        }

        .button:hover {
            background: #00ff00;
            color: #000;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
        }
    </style>
</head>
<body>
    <div class="terminal">
        <div class="terminal-header">
            <div class="command">┌──(root㉿retro)-[~]</div>
            <div class="command">└─$ ./${cmd}</div>
        </div>

        <div class="ascii-art">╔═══════════════════════════════════════╗
║   ${concept.toUpperCase().padEnd(35, ' ')}  ║
╚═══════════════════════════════════════╝</div>

        <div class="output">
            <div class="command">[INFO] Initializing ${concept}...</div>
            <div class="command">[OK] System ready</div>
            <div class="comment">
${description || 'Welcome to the retro terminal interface.'}
            </div>
        </div>

        <div style="margin: 20px 0;">
            <button class="button" onclick="runCommand('start')">[START]</button>
            <button class="button" onclick="runCommand('help')">[HELP]</button>
            <button class="button" onclick="runCommand('exit')">[EXIT]</button>
        </div>

        <div class="output" id="cmdOutput"></div>

        <div class="prompt">
            <input type="text" id="cmdInput" placeholder="Type command..." autofocus>
            <span class="cursor"></span>
        </div>
    </div>

    <script>
        const output = document.getElementById('cmdOutput');
        const input = document.getElementById('cmdInput');

        function runCommand(cmd) {
            const responses = {
                'start': '[OK] Application started successfully',
                'help': 'Available commands: start, help, status, exit',
                'status': '[INFO] All systems operational',
                'exit': '[INFO] Shutting down...',
            };

            output.innerHTML += \`<div class="command">$ \${cmd}</div>\`;
            output.innerHTML += \`<div class="comment">\${responses[cmd] || 'Command not found'}</div>\`;
        }

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                runCommand(input.value);
                input.value = '';
            }
        });
    </script>
</body>
</html>`;
    }

    // 🌐 WEB 1.0 GENERATOR
    generateWeb1(concept, description) {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to ${concept}!</title>
    <style>
        body {
            background: #000080 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23000080"/><circle cx="10" cy="10" r="1" fill="%23ffff00"/><circle cx="60" cy="40" r="1" fill="%23ffff00"/><circle cx="120" cy="20" r="1" fill="%23ffff00"/><circle cx="170" cy="80" r="1" fill="%23ffff00"/><circle cx="30" cy="100" r="1" fill="%23ffff00"/><circle cx="150" cy="150" r="1" fill="%23ffff00"/></svg>');
            font-family: "Comic Sans MS", "Times New Roman", serif;
            color: #ffff00;
            margin: 0;
            padding: 20px;
        }

        .container {
            background: #c0c0c0;
            border: 5px ridge #808080;
            max-width: 800px;
            margin: 0 auto;
            padding: 0;
        }

        .header {
            background: linear-gradient(180deg, #ff00ff, #0000ff);
            padding: 20px;
            text-align: center;
            border-bottom: 5px groove #808080;
        }

        h1 {
            color: #ffff00;
            text-shadow: 2px 2px #ff00ff;
            font-size: 3rem;
            margin: 0;
            animation: rainbow 3s linear infinite;
        }

        @keyframes rainbow {
            0% { color: #ff0000; }
            16% { color: #ff8800; }
            33% { color: #ffff00; }
            50% { color: #00ff00; }
            66% { color: #0000ff; }
            83% { color: #ff00ff; }
            100% { color: #ff0000; }
        }

        .marquee-container {
            background: #000;
            padding: 10px;
            border: 3px inset #808080;
        }

        marquee {
            color: #00ff00;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .content {
            background: white;
            padding: 20px;
            color: #000;
        }

        .sidebar {
            background: #ffff00;
            border: 3px solid #ff00ff;
            padding: 15px;
            margin: 10px 0;
        }

        .sidebar h3 {
            color: #ff00ff;
            text-decoration: underline;
        }

        .sidebar ul {
            list-style-type: square;
            color: #0000ff;
        }

        .counter {
            background: #000;
            color: #00ff00;
            padding: 10px;
            text-align: center;
            font-family: "Courier New", monospace;
            border: 2px solid #00ff00;
            margin: 10px 0;
        }

        .button {
            background: linear-gradient(180deg, #ff0000, #cc0000);
            color: white;
            border: 3px outset #ff6666;
            padding: 10px 20px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            text-shadow: 1px 1px #000;
        }

        .button:active {
            border-style: inset;
        }

        .guestbook {
            background: #ffffe0;
            border: 3px double #000;
            padding: 15px;
            margin: 15px 0;
        }

        .footer {
            background: #000;
            color: #00ff00;
            padding: 20px;
            text-align: center;
            border-top: 5px groove #808080;
        }

        .blink {
            animation: blink 1s step-start infinite;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }

        a {
            color: #0000ff;
            text-decoration: underline;
        }

        a:visited {
            color: #800080;
        }

        table {
            border: 2px solid #000;
            border-collapse: collapse;
            width: 100%;
            margin: 10px 0;
        }

        td {
            border: 1px solid #000;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✨ ${concept} ✨</h1>
            <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='20'><text x='0' y='15' font-family='Comic Sans MS' font-size='14' fill='%23ffff00'>UNDER CONSTRUCTION</text></svg>" alt="Under Construction">
        </div>

        <div class="marquee-container">
            <marquee behavior="scroll" direction="left">
                ★ Welcome to ${concept}! ★ Best viewed in Netscape Navigator 4.0 ★ Last updated: ${new Date().toLocaleDateString()} ★
            </marquee>
        </div>

        <div class="content">
            <table>
                <tr>
                    <td width="70%">
                        <h2 style="color: #ff00ff;">🎉 Welcome to My ${concept} Homepage! 🎉</h2>
                        <p>${description || 'Welcome to the BEST page on the World Wide Web!'}</p>
                        <p>This site is <span class="blink">OPTIMIZED</span> for 800x600 resolution!</p>

                        <div class="counter">
                            👁️ You are visitor number: <span id="visitors" style="color: #ff0000; font-size: 1.5rem;">000042</span>
                        </div>

                        <center>
                            <button class="button" onclick="alert('Thanks for clicking!')">CLICK ME!</button>
                        </center>

                        <div class="guestbook">
                            <h3>📝 Sign My Guestbook!</h3>
                            <input type="text" placeholder="Your Name" style="width: 100%; margin: 5px 0; padding: 5px;">
                            <textarea placeholder="Leave a message!" style="width: 100%; height: 60px; margin: 5px 0; padding: 5px;"></textarea>
                            <button class="button" style="font-size: 1rem;">SIGN!</button>
                        </div>
                    </td>
                    <td width="30%" valign="top">
                        <div class="sidebar">
                            <h3>🔗 Cool Links!</h3>
                            <ul>
                                <li><a href="#">My Geocities</a></li>
                                <li><a href="#">Web Ring</a></li>
                                <li><a href="#">Awards</a></li>
                                <li><a href="#">Link Exchange</a></li>
                            </ul>
                        </div>

                        <div class="sidebar" style="background: #ff99ff;">
                            <h3>📧 Email Me!</h3>
                            <p style="font-size: 0.9rem;">webmaster@${concept.toLowerCase().replace(/\s/g, '')}.com</p>
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <div class="footer">
            <p class="blink">✨ This page is BEST viewed in Internet Explorer 4.0+ ✨</p>
            <p>Made with ❤️ using Microsoft FrontPage 98</p>
            <p style="font-size: 0.8rem;">© 1999 ${concept} - All Rights Reserved</p>
            <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='88' height='31'><rect fill='%23000080' width='88' height='31'/><text x='44' y='20' font-family='Arial' font-size='12' fill='white' text-anchor='middle'>Netscape Now!</text></svg>" alt="Netscape Now!" style="margin: 10px;">
        </div>
    </div>

    <script>
        // Visitor counter animation
        let count = 42;
        setInterval(() => {
            count++;
            document.getElementById('visitors').textContent = String(count).padStart(6, '0');
        }, 5000);
    </script>
</body>
</html>`;
    }

    // 📟 LCD DISPLAY GENERATOR
    generateLCD(concept, description) {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${concept} - LCD</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Orbitron', monospace;
            background: #2d3436;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .lcd-device {
            background: linear-gradient(135deg, #636e72, #2d3436);
            border: 15px solid #2d3e1f;
            border-radius: 20px;
            padding: 30px;
            box-shadow:
                inset 0 2px 10px rgba(0, 0, 0, 0.5),
                0 10px 40px rgba(0, 0, 0, 0.8);
            max-width: 600px;
        }

        .lcd-screen {
            background: #9ca986;
            border: 5px solid #7e8975;
            border-radius: 5px;
            padding: 20px;
            box-shadow:
                inset 0 0 50px rgba(0, 0, 0, 0.3),
                inset 0 2px 0 rgba(255, 255, 255, 0.1);
            position: relative;
        }

        /* LCD Grid Pattern */
        .lcd-screen::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background:
                repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.03) 2px,
                    rgba(0, 0, 0, 0.03) 4px
                ),
                repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.03) 2px,
                    rgba(0, 0, 0, 0.03) 4px
                );
            pointer-events: none;
        }

        .lcd-text {
            color: #2d3e1f;
            font-weight: 700;
            text-shadow: 1px 1px 2px rgba(45, 62, 31, 0.3);
            position: relative;
            z-index: 1;
        }

        .lcd-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 20px;
            letter-spacing: 3px;
        }

        .lcd-content {
            font-size: 1rem;
            line-height: 1.8;
            margin: 15px 0;
        }

        .lcd-segment {
            display: inline-block;
            padding: 5px 10px;
            background: rgba(45, 62, 31, 0.1);
            border-radius: 3px;
            margin: 5px;
        }

        .lcd-display {
            background: rgba(45, 62, 31, 0.15);
            border: 2px solid rgba(45, 62, 31, 0.3);
            border-radius: 5px;
            padding: 15px;
            margin: 15px 0;
            font-size: 0.9rem;
        }

        .lcd-button {
            background: #2d3e1f;
            color: #9ca986;
            border: 3px solid #4a5a3a;
            border-radius: 5px;
            padding: 12px 25px;
            font-family: 'Orbitron', monospace;
            font-weight: 700;
            cursor: pointer;
            margin: 5px;
            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 3px 0 #1a2412,
                0 5px 10px rgba(0, 0, 0, 0.5);
            transition: all 0.1s;
        }

        .lcd-button:active {
            transform: translateY(3px);
            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 0 5px rgba(0, 0, 0, 0.5);
        }

        .lcd-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: #2d3e1f;
            border-radius: 50%;
            margin: 0 5px;
            box-shadow:
                inset 0 1px 2px rgba(0, 0, 0, 0.5),
                0 0 5px rgba(45, 62, 31, 0.5);
        }

        .lcd-indicator.active {
            background: #2d3e1f;
            box-shadow:
                inset 0 1px 2px rgba(0, 0, 0, 0.5),
                0 0 10px #2d3e1f,
                0 0 20px #2d3e1f;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .lcd-status-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 2px solid rgba(45, 62, 31, 0.2);
            font-size: 0.8rem;
        }

        .battery {
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .battery-icon {
            width: 30px;
            height: 15px;
            border: 2px solid #2d3e1f;
            border-radius: 2px;
            position: relative;
            padding: 2px;
        }

        .battery-icon::after {
            content: "";
            position: absolute;
            right: -5px;
            top: 4px;
            width: 3px;
            height: 5px;
            background: #2d3e1f;
        }

        .battery-level {
            height: 100%;
            background: #2d3e1f;
            width: 80%;
            animation: batteryDrain 10s linear infinite;
        }

        @keyframes batteryDrain {
            0% { width: 100%; }
            100% { width: 20%; }
        }
    </style>
</head>
<body>
    <div class="lcd-device">
        <div class="lcd-screen">
            <div class="lcd-text lcd-title">${concept.toUpperCase()}</div>

            <div class="lcd-text lcd-display">
                ${description || 'LCD display ready for operation.'}
            </div>

            <div class="lcd-text lcd-content" style="text-align: center;">
                <div style="margin: 20px 0;">
                    <span class="lcd-indicator active"></span>
                    <span class="lcd-indicator"></span>
                    <span class="lcd-indicator active"></span>
                    <span class="lcd-indicator"></span>
                </div>

                <div class="lcd-segment">MODE: STANDARD</div>
                <div class="lcd-segment">STATUS: ACTIVE</div>
            </div>

            <div style="text-align: center; margin: 20px 0;">
                <button class="lcd-button" onclick="alert('Button activated!')">SELECT</button>
                <button class="lcd-button" onclick="alert('Mode changed!')">MODE</button>
                <button class="lcd-button" onclick="alert('Reset!')">RESET</button>
            </div>

            <div class="lcd-text lcd-status-bar">
                <div><span id="time">00:00:00</span></div>
                <div class="battery">
                    <span>BATT</span>
                    <div class="battery-icon">
                        <div class="battery-level"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function updateTime() {
            const now = new Date();
            const timeStr = now.toTimeString().split(' ')[0];
            document.getElementById('time').textContent = timeStr;
        }
        updateTime();
        setInterval(updateTime, 1000);
    </script>
</body>
</html>`;
    }
}

// Initialize the agent
const agent = new RetroAgent();

// UI Event Handlers
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const conceptInput = document.getElementById('concept');
    const descriptionInput = document.getElementById('description');
    const outputSection = document.getElementById('outputSection');
    const outputContainer = document.getElementById('outputContainer');

    generateBtn.addEventListener('click', () => {
        const concept = conceptInput.value.trim();
        if (!concept) {
            alert('Please enter a concept to retrofy!');
            return;
        }

        const description = descriptionInput.value.trim();
        const selectedStyles = Array.from(document.querySelectorAll('.style-option input:checked'))
            .map(input => input.value);

        if (selectedStyles.length === 0) {
            alert('Please select at least one retro style!');
            return;
        }

        // Generate retro versions
        const results = agent.generate(concept, description, selectedStyles);

        // Display results
        outputContainer.innerHTML = '';
        results.forEach(result => {
            const card = createRetroCard(result);
            outputContainer.appendChild(card);
        });

        outputSection.classList.remove('hidden');
        outputSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function createRetroCard(result) {
    const card = document.createElement('div');
    card.className = 'retro-card';

    card.innerHTML = `
        <h3>${result.name}</h3>
        <div class="preview-container">
            <iframe class="preview-iframe" srcdoc="${escapeHtml(result.code)}"></iframe>
        </div>
        <div class="card-actions">
            <button class="action-btn download-btn" onclick="downloadCode(${JSON.stringify(result.style)})">
                ⬇️ Download
            </button>
            <button class="action-btn copy-btn" onclick="copyCode(${JSON.stringify(result.style)})">
                📋 Copy Code
            </button>
        </div>
    `;

    // Store the code in a data attribute
    card.dataset.code = result.code;
    card.dataset.style = result.style;

    return card;
}

function escapeHtml(html) {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function downloadCode(style) {
    const card = event.target.closest('.retro-card');
    const code = card.dataset.code;
    const concept = document.getElementById('concept').value.trim().replace(/\s+/g, '-').toLowerCase();

    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${concept}-${style}.html`;
    a.click();
    URL.revokeObjectURL(url);
}

function copyCode(style) {
    const card = event.target.closest('.retro-card');
    const code = card.dataset.code;

    navigator.clipboard.writeText(code).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}
