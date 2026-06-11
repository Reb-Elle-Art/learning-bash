// learning .log -- content data. Add new entries here; flag index and search are generated.
// See WEBSITE_UPDATE_INSTRUCTIONS.md for the entry format.
window.LL_DATA = {
 "updated": "June 2026",
 "bash": {
  "commands": [
   {
    "id": "cmd-pwd",
    "cmd": "pwd",
    "desc": "Print working directory",
    "cat": "navigation",
    "catTitle": "Navigation",
    "synonyms": [
     "where am i",
     "current directory",
     "location",
     "path"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Shows your exact location in the filesystem as a full path."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ pwd\n/home/anazial/.openclaw/workspace"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Use it whenever you feel lost. Think of it as \"You Are Here\" on a map."
     }
    ]
   },
   {
    "id": "cmd-ls",
    "cmd": "ls",
    "desc": "List directory contents",
    "cat": "navigation",
    "catTitle": "Navigation",
    "synonyms": [
     "list",
     "show files",
     "directory contents"
    ],
    "flags": [
     "-a",
     "-l",
     "-h",
     "-lah"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Shows all files and folders in your current directory."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ ls\nAGENTS.md  BOOTSTRAP.md  README.md"
     }
    ]
   },
   {
    "id": "cmd-cd",
    "cmd": "cd",
    "desc": "Change directory",
    "cat": "navigation",
    "catTitle": "Navigation",
    "synonyms": [
     "change directory",
     "navigate",
     "go to folder"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Moves you into a different folder."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ cd documents\n$ cd ..\n$ cd ~/.openclaw/workspace\n$ cd /var/www/html"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "cd .. goes up one level. cd ~ takes you home from anywhere."
     }
    ]
   },
   {
    "id": "cmd-hostname",
    "cmd": "hostname",
    "desc": "Show machine name",
    "cat": "navigation",
    "catTitle": "Navigation",
    "synonyms": [
     "machine name",
     "computer name"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Prints the name of the machine your shell is running on."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ hostname\nenid"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Use it as a sanity check when jumping between your Mac and Enid via SSH."
     }
    ]
   },
   {
    "id": "cmd-whoami",
    "cmd": "whoami",
    "desc": "Show current user",
    "cat": "navigation",
    "catTitle": "Navigation",
    "synonyms": [
     "current user",
     "who am i",
     "logged in"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Prints the username you are currently logged in as."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ whoami\nanazial"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Useful after sudo su to confirm whether you are root or your regular user."
     }
    ]
   },
   {
    "id": "cmd-cat",
    "cmd": "cat",
    "desc": "Print file contents",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "print file",
     "view file",
     "dump",
     "read file"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Dumps the entire file to the terminal at once. Best for short files."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ cat AGENTS.md"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "If your screen floods with text, switch to less instead."
     }
    ]
   },
   {
    "id": "cmd-less",
    "cmd": "less",
    "desc": "Scrollable file viewer",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "pager",
     "scroll file",
     "view long file"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Opens a file in a scrollable viewer. Better than cat for long files."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ less BOOTSTRAP.md"
     },
     {
      "label": "Controls",
      "type": "text",
      "html": "Arrow keys or spacebar to scroll. q to quit."
     }
    ]
   },
   {
    "id": "cmd-head",
    "cmd": "head",
    "desc": "Show first 10 lines",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "first lines",
     "top of file",
     "peek"
    ],
    "flags": [
     "-n"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Prints just the top of a file. Good for peeking."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ head AGENTS.md\n$ head -20 AGENTS.md"
     }
    ]
   },
   {
    "id": "cmd-tail",
    "cmd": "tail",
    "desc": "Show last 10 lines",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "last lines",
     "bottom of file",
     "logs",
     "log file"
    ],
    "flags": [
     "-n"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Prints the bottom of a file. Especially useful for log files."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ tail error.log\n$ tail -20 error.log"
     }
    ]
   },
   {
    "id": "cmd-wc",
    "cmd": "wc",
    "desc": "Word / line count",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "count",
     "word count",
     "line count"
    ],
    "flags": [
     "-l",
     "-w"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Counts lines, words, or characters in a file."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ wc -lw AGENTS.md\n42 310 AGENTS.md"
     }
    ]
   },
   {
    "id": "cmd-file",
    "cmd": "file",
    "desc": "Identify file type",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "file type",
     "identify",
     "what kind of file"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Tells you what kind of file something is -- useful when the extension is missing or unclear."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ file image.png\nimage.png: PNG image data, 1920 x 1080"
     }
    ]
   },
   {
    "id": "cmd-find",
    "cmd": "find",
    "desc": "Search for files",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "search files",
     "locate",
     "find by name"
    ],
    "flags": [
     "-name",
     "-exec",
     "-type"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Searches for files by name, type, or other attributes. Searches recursively through subdirectories."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ find ~ -name \"AGENTS.md\"\n$ find . -name \"*.md\"\n$ find / -name \"nginx.conf\""
     },
     {
      "label": "With -exec",
      "type": "text",
      "html": "Run a command on every result. {} is the placeholder for each file found."
     },
     {
      "label": null,
      "type": "code",
      "text": "$ find . -name \"*.rtf\" -exec pandoc {} -o {}.md \\;"
     }
    ]
   },
   {
    "id": "cmd-grep",
    "cmd": "grep",
    "desc": "Search inside files",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "search text",
     "search inside files",
     "match",
     "filter"
    ],
    "flags": [
     "-r",
     "-i",
     "-n"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Searches for text inside files. find looks for files, grep looks inside them."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ grep \"session\" AGENTS.md\n$ grep -r \"session\" ~/documents"
     }
    ]
   },
   {
    "id": "cmd-mv",
    "cmd": "mv",
    "desc": "Move or rename",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "move",
     "rename"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Moves a file or directory to a new location. Also used to rename things."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ mv file.md ~/documents/\n$ mv oldname.md newname.md\n$ mv folder/ ~/documents/\n$ mv file.md ."
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Does not need -r for directories. The original is gone after moving."
     }
    ]
   },
   {
    "id": "cmd-cp",
    "cmd": "cp",
    "desc": "Copy files",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "copy",
     "duplicate"
    ],
    "flags": [
     "-r"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Copies a file or directory. Original stays in place."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ cp file.md ~/documents/\n$ cp -r myfolder/ ~/documents/\n$ cp *.md ~/documents/"
     }
    ]
   },
   {
    "id": "cmd-rm",
    "cmd": "rm",
    "desc": "Delete files",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "delete",
     "remove",
     "erase"
    ],
    "flags": [
     "-r",
     "-f",
     "-i"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Permanently deletes files or directories. No trash, no undo."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ rm file.md\n$ rm -r myfolder/\n$ rm -ri folder1/ folder2/"
     },
     {
      "label": "Warning",
      "type": "text",
      "html": "-rf deletes everything forcefully with zero confirmation. Double check before running."
     }
    ]
   },
   {
    "id": "cmd-mkdir",
    "cmd": "mkdir",
    "desc": "Create directory",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "create folder",
     "new directory",
     "make directory"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Creates a new empty directory."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ mkdir newfolder\n$ mkdir ~/documents/projects"
     }
    ]
   },
   {
    "id": "cmd-du",
    "cmd": "du",
    "desc": "Disk usage",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "disk usage",
     "size",
     "space",
     "how big"
    ],
    "flags": [
     "-s",
     "-h"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Shows how much disk space a directory is using."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ du -sh myfolder/\n$ du -sh *\n$ du -sh ."
     }
    ]
   },
   {
    "id": "cmd-stat",
    "cmd": "stat",
    "desc": "Read file metadata",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "metadata",
     "permissions",
     "file info",
     "inode",
     "timestamps"
    ],
    "flags": [
     "-c"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Reads everything the filesystem knows about a file -- permissions, size, owner, timestamps, inode number. Works on files, directories, symlinks, and devices."
     },
     {
      "label": "Default output",
      "type": "code",
      "text": "$ stat myfile.md\n  File: myfile.md\n  Size: 1234      Blocks: 8    regular file\nAccess: (0644/-rw-r--r--)  Uid: (1000/anazial)\nModify: 2026-05-20 09:00:00"
     },
     {
      "label": "Custom format (GNU / Ubuntu)",
      "type": "text",
      "html": "Use -c with format specifiers to print only what you need."
     },
     {
      "label": null,
      "type": "code",
      "text": "$ stat -c \"%a %n\" *\n644 readme.md\n755 myscript.sh\n\n$ stat -c \"%a %A %U %G %n\" myfile.md\n644 -rw-r--r-- anazial anazial myfile.md"
     },
     {
      "label": "macOS difference",
      "type": "text",
      "html": "macOS uses BSD stat. Use -f instead of -c, and %Lp for octal permissions."
     },
     {
      "label": null,
      "type": "code",
      "text": "$ stat -f \"%Lp %N\" *    # macOS only"
     }
    ]
   },
   {
    "id": "cmd-pandoc",
    "cmd": "pandoc",
    "desc": "Convert file formats",
    "cat": "files",
    "catTitle": "Files & directories",
    "synonyms": [
     "convert",
     "rtf to markdown",
     "docx",
     "file format"
    ],
    "flags": [
     "-o"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Converts between document formats. Figures out the conversion from file extensions."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ pandoc file.rtf -o file.md\n$ pandoc file.md -o file.docx"
     },
     {
      "label": "Batch convert with loop",
      "type": "code",
      "text": "$ for f in *.rtf; do\n    pandoc \"$f\" -o \"${f%.rtf}.md\"\n  done"
     }
    ]
   },
   {
    "id": "cmd-ssh",
    "cmd": "ssh",
    "desc": "Connect to remote machine",
    "cat": "remote",
    "catTitle": "Remote & SSH",
    "synonyms": [
     "remote",
     "connect",
     "login to server"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Opens a secure shell session on a remote machine. Everything you type runs there, not locally."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ ssh anazial@100.x.x.x\n$ ssh anazial@enid"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "With Tailscale you can use the machine hostname instead of the IP address."
     }
    ]
   },
   {
    "id": "cmd-exit",
    "cmd": "exit",
    "desc": "Leave SSH / switch user",
    "cat": "remote",
    "catTitle": "Remote & SSH",
    "synonyms": [
     "logout",
     "disconnect",
     "leave"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Ends the current shell session. Drops you back to your local terminal after SSH, or back to your regular user after sudo su."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ exit"
     },
     {
      "label": "Force disconnect",
      "type": "text",
      "html": "If the terminal is frozen, type ~. (tilde then period) to force close SSH."
     }
    ]
   },
   {
    "id": "cmd-scp",
    "cmd": "scp",
    "desc": "Secure copy between machines",
    "cat": "remote",
    "catTitle": "Remote & SSH",
    "synonyms": [
     "copy remote",
     "transfer files",
     "upload",
     "download"
    ],
    "flags": [
     "-r"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Copies files between your local machine and a remote one over SSH. Run from your local machine."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ scp file.md user@enid:~/\n$ scp user@enid:~/file.md ~/Desktop/\n$ scp -r folder/ user@enid:~/\n$ scp user@enid:~/folder/* ~/Desktop/"
     },
     {
      "label": "Pattern",
      "type": "text",
      "html": "Remote paths use user@host:/path format. The colon separates machine from path."
     }
    ]
   },
   {
    "id": "cmd-tailscale-status",
    "cmd": "tailscale status",
    "desc": "List Tailscale devices",
    "cat": "remote",
    "catTitle": "Remote & SSH",
    "synonyms": [
     "vpn",
     "devices",
     "network",
     "tailnet"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Shows all devices on your private Tailscale network with their IPs and hostnames."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ tailscale status"
     }
    ]
   },
   {
    "id": "cmd-sudo",
    "cmd": "sudo",
    "desc": "Run as administrator",
    "cat": "system",
    "catTitle": "System & admin",
    "synonyms": [
     "admin",
     "root",
     "privileges",
     "superuser"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Superuser do. Temporarily runs one command with full admin privileges."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ sudo apt install nginx\n$ sudo mv file.html /var/www/html/\n$ sudo reboot"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "sudo su switches you fully into the root user. Use exit to get back out."
     }
    ]
   },
   {
    "id": "cmd-systemctl",
    "cmd": "systemctl",
    "desc": "Manage background services",
    "cat": "system",
    "catTitle": "System & admin",
    "synonyms": [
     "service",
     "daemon",
     "start nginx",
     "restart service"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Starts, stops, restarts, and checks the status of system services on Ubuntu."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ sudo systemctl status nginx\n$ sudo systemctl start nginx\n$ sudo systemctl stop nginx\n$ sudo systemctl restart nginx"
     }
    ]
   },
   {
    "id": "cmd-apt",
    "cmd": "apt",
    "desc": "Install software (Ubuntu)",
    "cat": "system",
    "catTitle": "System & admin",
    "synonyms": [
     "install",
     "package manager",
     "ubuntu install"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Ubuntu's package manager. Installs, updates, and removes software."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ sudo apt install nginx\n$ sudo apt update\n$ sudo apt update && sudo apt upgrade nginx"
     }
    ]
   },
   {
    "id": "cmd-brew",
    "cmd": "brew",
    "desc": "Install software (Mac)",
    "cat": "system",
    "catTitle": "System & admin",
    "synonyms": [
     "install mac",
     "homebrew",
     "mac packages"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Homebrew -- Mac's package manager. Equivalent of apt on Ubuntu."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ brew install helix\n$ brew install pandoc\n$ brew services start nginx"
     }
    ]
   },
   {
    "id": "cmd-echo-shell",
    "cmd": "echo $SHELL",
    "desc": "Show current shell",
    "cat": "system",
    "catTitle": "System & admin",
    "synonyms": [
     "which shell",
     "zsh",
     "bash",
     "environment variable"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Prints which shell you are using. echo prints a value, $SHELL is an environment variable holding the shell path."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ echo $SHELL\n/bin/zsh       (Mac)\n/bin/bash      (Ubuntu)"
     }
    ]
   },
   {
    "id": "cmd-sudo-reboot",
    "cmd": "sudo reboot",
    "desc": "Restart the machine",
    "cat": "system",
    "catTitle": "System & admin",
    "synonyms": [
     "restart machine",
     "reboot server"
    ],
    "flags": [],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Restarts the machine. If you are SSH'd in, your connection will drop immediately -- that is normal."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ sudo reboot"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Wait 30 seconds then SSH back in as normal."
     }
    ]
   }
  ],
  "blocks": [
   {
    "id": "block-home",
    "symbol": "~",
    "name": "Home directory",
    "section": "Path symbols",
    "synonyms": [
     "home directory",
     "tilde"
    ],
    "detail": [
     {
      "label": "What it means",
      "type": "text",
      "html": "A shortcut for your home directory. Works anywhere a path is expected."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ cd ~\n$ ls ~/documents\n$ scp file.md user@enid:~/"
     }
    ]
   },
   {
    "id": "block-dot",
    "symbol": ".",
    "name": "Current directory",
    "section": "Path symbols",
    "synonyms": [
     "current directory"
    ],
    "detail": [
     {
      "label": "What it means",
      "type": "text",
      "html": "Refers to wherever you currently are. Useful as a destination."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ mv ~/downloads/file.md .\n$ cp ~/documents/* .\n$ du -sh ."
     }
    ]
   },
   {
    "id": "block-dotdot",
    "symbol": "..",
    "name": "Parent directory",
    "section": "Path symbols",
    "synonyms": [
     "parent directory",
     "up one level"
    ],
    "detail": [
     {
      "label": "What it means",
      "type": "text",
      "html": "One level up from where you are."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ cd ..\n$ cd ../../\n$ mv file.md ../"
     }
    ]
   },
   {
    "id": "block-slash",
    "symbol": "/",
    "name": "Root / path separator",
    "section": "Path symbols",
    "synonyms": [
     "root",
     "path separator",
     "absolute path"
    ],
    "detail": [
     {
      "label": "What it means",
      "type": "text",
      "html": "At the start of a path, / means the absolute root of the filesystem. Between path parts, it separates directory names."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ cd /var/www/html\n$ ls /\n$ find / -name \"nginx.conf\""
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Paths starting with / are absolute (always from root). Paths without / are relative (from where you are)."
     }
    ]
   },
   {
    "id": "block-star",
    "symbol": "*",
    "name": "Wildcard -- match anything",
    "section": "Wildcards & patterns",
    "synonyms": [
     "wildcard",
     "glob",
     "match anything"
    ],
    "detail": [
     {
      "label": "What it means",
      "type": "text",
      "html": "Matches any characters. Use it to target groups of files by pattern."
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ ls *.md\n$ cp *.txt ~/backup/\n$ scp user@enid:~/folder/* ~/Desktop/\n$ find . -name \"*.rtf\""
     },
     {
      "label": "Contents vs directory",
      "type": "text",
      "html": "folder/ copies the folder itself. folder/* copies what is inside it."
     }
    ]
   },
   {
    "id": "block-semicolon",
    "symbol": ";",
    "name": "Run sequentially",
    "section": "Operators & chaining",
    "synonyms": [
     "sequential",
     "one after another"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Runs commands one after the other, regardless of whether the first one succeeded."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ mkdir folder; cd folder"
     }
    ]
   },
   {
    "id": "block-and-and",
    "symbol": "&&",
    "name": "Run if previous succeeded",
    "section": "Operators & chaining",
    "synonyms": [
     "chain if success",
     "conditional"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Only runs the second command if the first one succeeded. Safer than semicolon for dependent commands."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ sudo apt update && sudo apt upgrade nginx"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "If apt update fails, the upgrade won't run. Good for safety."
     }
    ]
   },
   {
    "id": "block-pipe",
    "symbol": "|",
    "name": "Pipe -- chain commands",
    "section": "Operators & chaining",
    "synonyms": [
     "chain commands",
     "output to input"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Takes the output of one command and feeds it as input to the next."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ cat file.txt | grep \"session\"\n$ ls | wc -l"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "The second example counts how many files are in a directory."
     }
    ]
   },
   {
    "id": "block-subst",
    "symbol": "$()",
    "name": "Command substitution",
    "section": "Operators & chaining",
    "synonyms": [
     "command substitution",
     "output as value"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Runs a command inside the parentheses and uses its output as a value in another command."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ for f in $(find . -name \"*.txt\"); do\n    pandoc \"$f\" -o \"${f%.txt}.md\"\n  done"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "The find command runs first, then its list of files is used by the for loop."
     }
    ]
   },
   {
    "id": "block-redirect",
    "symbol": "> and >>",
    "name": "Redirect output to file",
    "section": "Operators & chaining",
    "synonyms": [
     "redirect output",
     "write to file",
     "append"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Instead of printing to the terminal, sends output to a file."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ echo \"hello\" > file.txt\n$ cat log.txt >> archive.txt"
     },
     {
      "label": "Difference",
      "type": "text",
      "html": "&gt; overwrites the file. &gt;&gt; appends to the end without overwriting."
     }
    ]
   },
   {
    "id": "block-escape",
    "symbol": "\\",
    "name": "Escape -- handle spaces",
    "section": "Operators & chaining",
    "synonyms": [
     "spaces in filenames",
     "backslash"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Escapes the next character. Most commonly used to handle spaces in file or directory names."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "$ cd My\\ Documents\n$ mv file.md 00\\ Human/001\\ To\\ Be\\ Sorted/"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Alternatively, wrap the whole path in quotes: cd \"My Documents\""
     }
    ]
   },
   {
    "id": "block-awk",
    "symbol": "awk",
    "name": "Pattern scanning and text transformation",
    "section": "Text Processing",
    "synonyms": [
     "columns",
     "fields",
     "sum column",
     "text processing"
    ],
    "detail": [
     {
      "label": "What it is",
      "type": "text",
      "html": "A mini programming language for pattern scanning and text transformation. Reads input line by line, splits each line into fields, and applies rules of the form <code>pattern { action }</code>"
     },
     {
      "label": "Primary use cases",
      "type": "text",
      "html": "Extracting columns, filtering rows, computing aggregates (sum/count/average), reformatting output, working with custom delimiters"
     },
     {
      "label": "Key built-in variables",
      "type": "table",
      "rows": [
       [
        "$0",
        "The whole line"
       ],
       [
        "$1, $2, …",
        "Individual fields"
       ],
       [
        "NR",
        "Current line number"
       ],
       [
        "NF",
        "Number of fields on the current line"
       ],
       [
        "FS",
        "Field separator (default: whitespace)"
       ]
      ]
     },
     {
      "label": "Examples",
      "type": "code",
      "text": "$ awk '{print $1, $3}' file.txt              # extract columns 1 and 3\n$ awk '$3 > 100' file.txt                    # filter rows where column 3 > 100\n$ awk '{sum += $2} END {print sum}' file.txt # sum column 2\n$ awk -F':' '{print $1}' /etc/passwd         # use colon as field separator"
     },
     {
      "label": "Tip",
      "type": "text",
      "html": "Special patterns: <code>BEGIN {}</code> runs before input, <code>END {}</code> runs after. Use <code>-F</code> to set field separator."
     }
    ]
   },
   {
    "id": "block-for-loop",
    "symbol": "for loop",
    "name": "Repeat for each item",
    "section": "Scripting",
    "synonyms": [
     "loop",
     "batch",
     "repeat",
     "iterate"
    ],
    "detail": [
     {
      "label": "What it does",
      "type": "text",
      "html": "Repeats a command for each item in a list. The variable (f) takes the value of each item in turn."
     },
     {
      "label": "Pattern",
      "type": "code",
      "text": "for f in *.rtf; do\n  pandoc \"$f\" -o \"${f%.rtf}.md\"\ndone"
     },
     {
      "label": "Breaking it down",
      "type": "text",
      "html": "for f in *.rtf -- loop through every rtf file, calling it f each time. do...done -- wraps the commands to run on each. ${f%.rtf} -- strips the .rtf extension from the filename."
     }
    ]
   }
  ],
  "concepts": [
   {
    "id": "concept-cli",
    "term": "CLI",
    "sub": "Command Line Interface",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "A text-based way to interact with a computer. You type commands, the computer responds with text. The alternative is a GUI (Graphical User Interface) where you click around. The CLI feels less intuitive at first but is far more powerful and scriptable."
     }
    ]
   },
   {
    "id": "concept-shell",
    "term": "Shell",
    "sub": "bash vs zsh",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "The shell is the program that reads your commands and runs them. bash is the default on Ubuntu, zsh is the default on modern macOS. They are almost identical for everyday use -- the differences only matter in advanced scripting."
     },
     {
      "label": null,
      "type": "code",
      "text": "Mac prompt:    %\nUbuntu prompt: $\nRoot prompt:   #"
     }
    ]
   },
   {
    "id": "concept-absolute-vs-relative-paths",
    "term": "Absolute vs relative paths",
    "sub": "Where you start from matters",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "An absolute path starts from the root of the filesystem and always works from anywhere. A relative path starts from wherever you currently are."
     },
     {
      "label": null,
      "type": "code",
      "text": "Absolute: /var/www/html/index.html\nRelative: documents/index.html"
     }
    ]
   },
   {
    "id": "concept-sudo-root",
    "term": "sudo & root",
    "sub": "Admin privileges",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Root is the all-powerful admin account on Linux -- it can do anything, including break things. sudo (superuser do) lets your regular user borrow root power for a single command. sudo su switches you fully into root -- your prompt changes from $ to #. Always exit back out when done."
     }
    ]
   },
   {
    "id": "concept-file-permissions",
    "term": "File permissions",
    "sub": "Who can do what",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Every file has permissions for three groups: owner, group, and others. Each group can have read (r), write (w), and execute (x) rights. These appear symbolically in ls -l or as octal numbers with stat."
     },
     {
      "label": null,
      "type": "code",
      "text": "-rw-r--r--  →  644\ndrwxr-xr-x  →  755\n-rw-------  →  600  (private)"
     },
     {
      "label": null,
      "type": "text",
      "html": "The first character is the file type: - for file, d for directory, l for symlink."
     }
    ]
   },
   {
    "id": "concept-hidden-files",
    "term": "Hidden files",
    "sub": "Dotfiles",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Any file or directory starting with . is hidden from ls by default. Configuration files are often hidden this way. Use ls -a to see them."
     },
     {
      "label": null,
      "type": "code",
      "text": "~/.openclaw\n~/.config\n~/.gitconfig"
     }
    ]
   },
   {
    "id": "concept-package-managers",
    "term": "Package managers",
    "sub": "brew and apt",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Package managers install, update, and remove software from a central repository. Think of them as app stores for the terminal. brew on Mac, apt on Ubuntu."
     },
     {
      "label": null,
      "type": "code",
      "text": "Mac:    brew install helix\nUbuntu: sudo apt install helix"
     }
    ]
   },
   {
    "id": "concept-git-git",
    "term": "Git & .git",
    "sub": "Version control",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Git is a version control system -- a time machine for your files. It tracks every change so you can go back in time. The .git directory is a hidden folder Git creates inside any repository to store this history. It contains write-protected files which is why rm -r asks for confirmation."
     }
    ]
   },
   {
    "id": "concept-nginx",
    "term": "nginx",
    "sub": "Web server",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "nginx is a web server -- a program that listens for browser requests and serves files in response. It runs as a background service managed by systemctl. By default it serves files from /var/www/html/ and index.html loads automatically when you visit the root URL."
     }
    ]
   },
   {
    "id": "concept-lts",
    "term": "LTS",
    "sub": "Long Term Support",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "LTS versions of software are supported with security updates for a longer period (5 years for Ubuntu). They are more stable and predictable than cutting-edge releases. Ubuntu 24.04 LTS (Noble Numbat) is what Enid runs."
     }
    ]
   },
   {
    "id": "concept-bak-convention",
    "term": ".bak convention",
    "sub": "Keeping backups",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Adding .bak to a filename is a common convention meaning \"backup\". The file is still there if you need it but programs and servers won't pick it up automatically. Better than deleting something you might want later."
     },
     {
      "label": null,
      "type": "code",
      "text": "$ mv index.nginx-debian.html index.nginx-debian.html.bak"
     }
    ]
   },
   {
    "id": "concept-tailscale-ssh",
    "term": "Tailscale & SSH",
    "sub": "Private networking",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "SSH creates an encrypted tunnel to a remote machine. Tailscale creates a private network between your devices so you can SSH using hostnames instead of IPs, and services like nginx are only reachable by your tailnet devices -- not the public internet."
     }
    ]
   },
   {
    "id": "concept-markdown",
    "term": "Markdown",
    "sub": ".md files",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Markdown is a simple text formatting language. Files end in .md. # makes a heading, ** makes bold, - makes a bullet. It is human-readable as plain text and also renders nicely in many apps. Commonly used for documentation and README files."
     }
    ]
   },
   {
    "id": "concept-symlinks",
    "term": "Symlinks",
    "sub": "Symbolic links",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "A symlink is a file that points to another file or directory -- like a shortcut. The OS transparently redirects you to the target when you open it. Shows up as l in ls -l and in stat output."
     },
     {
      "label": null,
      "type": "code",
      "text": "lrwxrwxrwx  python -> python3.11\n\n$ ln -s /path/to/target my-shortcut"
     },
     {
      "label": null,
      "type": "text",
      "html": "If the target is deleted, the symlink breaks (dangling symlink). A hard link points to the data directly and stays valid even if the original is removed."
     }
    ]
   },
   {
    "id": "concept-helix",
    "term": "Helix",
    "sub": "Modern modal text editor",
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "A modal text editor inspired by Vim but with better defaults and no configuration needed. Works great on Mac and Linux. Two modes: normal (navigation and commands) and insert (typing text). Switch modes with Esc or i."
     },
     {
      "label": null,
      "type": "code",
      "text": "$ hx filename.txt        # open a file\n:w                       # save\n:q                       # quit\n:wq                      # save and quit\nhx --tutor               # interactive tutorial"
     },
     {
      "label": null,
      "type": "text",
      "html": "<strong>Install:</strong> Mac: <code style=\"background:#1a1a1a;color:#c8e0a8;padding:1px 4px;border-radius:2px;\">brew install helix</code> | Ubuntu: <code style=\"background:#1a1a1a;color:#c8e0a8;padding:1px 4px;border-radius:2px;\">sudo snap install helix --classic</code>"
     }
    ]
   }
  ],
  "flagMeta": {
   "-r": {
    "meaning": "Recursive -- apply to directories and everything inside them",
    "variants": {
     "grep": "recurse into directories when searching"
    }
   },
   "-a": {
    "meaning": "All -- include hidden files (those starting with .)"
   },
   "-l": {
    "meaning": "Long format -- show detailed info (permissions, size, date)",
    "variants": {
     "wc": "count lines"
    }
   },
   "-lah": {
    "meaning": "Combined: long format + all files + human-readable sizes. The most common ls combo."
   },
   "-h": {
    "meaning": "Human readable -- show sizes in KB, MB, GB instead of raw bytes"
   },
   "-f": {
    "meaning": "Force -- skip confirmation prompts and override protections"
   },
   "-i": {
    "meaning": "Interactive -- ask for confirmation before each action",
    "variants": {
     "grep": "case-insensitive match"
    }
   },
   "-s": {
    "meaning": "Summary -- show total only, not line-by-line breakdown"
   },
   "-n": {
    "meaning": "Number -- specify how many lines to show",
    "variants": {
     "grep": "show line numbers with each match"
    }
   },
   "-w": {
    "meaning": "Words -- count words instead of lines"
   },
   "-o": {
    "meaning": "Output -- specify the output file or destination"
   },
   "-c": {
    "meaning": "Custom format -- print only the fields you specify using % placeholders (GNU stat / Ubuntu only)",
    "specTable": [
     [
      "%a",
      "Octal permissions (e.g. 644)"
     ],
     [
      "%A",
      "Symbolic permissions (e.g. -rw-r--r--)"
     ],
     [
      "%n",
      "File name"
     ],
     [
      "%s",
      "Size in bytes"
     ],
     [
      "%U",
      "Owner username"
     ],
     [
      "%G",
      "Group name"
     ],
     [
      "%F",
      "File type (e.g. \"regular file\")"
     ],
     [
      "%i",
      "Inode number"
     ],
     [
      "%h",
      "Number of hard links"
     ],
     [
      "%x",
      "Last accessed time"
     ],
     [
      "%y",
      "Last modified time"
     ]
    ],
    "specLabel": "stat format specifiers"
   },
   "-exec": {
    "meaning": "Execute -- run a command on each result found. {} is the placeholder for the current file"
   },
   "-name": {
    "meaning": "Match by filename -- supports wildcards like *.md"
   },
   "-type": {
    "meaning": "Filter by file type. f = regular file, d = directory, l = symlink"
   }
  }
 },
 "databases": {
  "categories": [
   {
    "id": "db-relational-sql",
    "term": "Relational / SQL",
    "icon": "R",
    "iconClass": "relational",
    "dbtype": "PostgreSQL, MySQL, SQLite",
    "tagline": "Tables, rows, columns -- like a very powerful spreadsheet",
    "section": "Database types",
    "detail": [
     {
      "label": "How it works",
      "type": "text",
      "html": "Data lives in tables -- each row is a record, each column is a field. Tables can reference each other through shared keys. You query data using SQL (Structured Query Language)."
     },
     {
      "label": "Good for",
      "type": "text",
      "html": "Structured data with clear relationships. Financial records, user accounts, orders, inventories -- anything where consistency and relationships matter."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "Users table:   id | name  | email\nOrders table:  id | user_id | product | price\n                    ^--- references Users.id"
     },
     {
      "label": "Key idea",
      "type": "text",
      "html": "The schema (structure) is defined upfront. Every row must follow the same shape. This rigidity is a feature -- it enforces consistency."
     }
    ]
   },
   {
    "id": "db-document-store",
    "term": "Document store",
    "icon": "D",
    "iconClass": "document",
    "dbtype": "MongoDB, CouchDB, Firestore",
    "tagline": "JSON-like documents -- flexible, no fixed schema required",
    "section": "Database types",
    "detail": [
     {
      "label": "How it works",
      "type": "text",
      "html": "Instead of rows in tables, you store documents -- self-contained blobs of data, usually in JSON format. Each document can have a different structure."
     },
     {
      "label": "Good for",
      "type": "text",
      "html": "Flexible or evolving data structures. Content management, user profiles, product catalogs where each item might have different fields."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "{\n  \"name\": \"Anazial\",\n  \"email\": \"hi@example.com\",\n  \"preferences\": { \"theme\": \"dark\" }\n}"
     },
     {
      "label": "Key idea",
      "type": "text",
      "html": "Schema-flexible. Documents in the same collection don't have to look the same. Great for rapid development when your data shape is still evolving."
     }
    ]
   },
   {
    "id": "db-key-value-store",
    "term": "Key-value store",
    "icon": "K",
    "iconClass": "keyvalue",
    "dbtype": "Redis, DynamoDB, Memcached",
    "tagline": "The simplest model -- store and retrieve by a unique key",
    "section": "Database types",
    "detail": [
     {
      "label": "How it works",
      "type": "text",
      "html": "Like a giant dictionary. You store a value under a key, and retrieve it by that key. Extremely fast -- often held entirely in memory."
     },
     {
      "label": "Good for",
      "type": "text",
      "html": "Caching, session storage, leaderboards, real-time features. Anywhere you need to look something up very quickly by a known identifier."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "SET session:abc123  \"user_id=42\"\nGET session:abc123  --> \"user_id=42\""
     },
     {
      "label": "Key idea",
      "type": "text",
      "html": "Sacrifices complexity for speed. You can't easily query \"all values where X\" -- you retrieve by key only. Often used alongside a relational database, not instead of one."
     }
    ]
   },
   {
    "id": "db-graph-database",
    "term": "Graph database",
    "icon": "G",
    "iconClass": "graph",
    "dbtype": "Neo4j, Amazon Neptune",
    "tagline": "Nodes and edges -- built for highly connected data",
    "section": "Database types",
    "detail": [
     {
      "label": "How it works",
      "type": "text",
      "html": "Data is represented as a network of nodes (things) connected by edges (relationships). Querying means traversing those connections."
     },
     {
      "label": "Good for",
      "type": "text",
      "html": "Social networks, recommendation engines, fraud detection -- anything where the connections between things are as important as the things themselves."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "(Anazial) --[USES]--> (bash)\n(Enid) --[RUNS]--> (nginx)\n(Anazial) --[CONNECTS_TO]--> (Enid)"
     },
     {
      "label": "Key idea",
      "type": "text",
      "html": "Relational databases can model relationships too, but graph databases make traversing deep, complex relationships much faster and more natural."
     }
    ]
   },
   {
    "id": "db-time-series",
    "term": "Time-series",
    "icon": "T",
    "iconClass": "timeseries",
    "dbtype": "InfluxDB, TimescaleDB, Prometheus",
    "tagline": "Optimized for time-stamped data and range queries",
    "section": "Database types",
    "detail": [
     {
      "label": "How it works",
      "type": "text",
      "html": "Every data point is associated with a timestamp. The database is optimized for writing large volumes of time-ordered data and querying ranges or aggregates over time."
     },
     {
      "label": "Good for",
      "type": "text",
      "html": "Server metrics, IoT sensor data, financial tick data, logs, monitoring dashboards. Anywhere you're asking \"what happened between X time and Y time\"."
     },
     {
      "label": "Example",
      "type": "code",
      "text": "2026-05-23 22:05:01  cpu_usage=12%\n2026-05-23 22:05:02  cpu_usage=14%\n2026-05-23 22:05:03  cpu_usage=11%"
     }
    ]
   },
   {
    "id": "db-columnar-store",
    "term": "Columnar store",
    "icon": "C",
    "iconClass": "columnar",
    "dbtype": "BigQuery, Redshift, Cassandra",
    "tagline": "Column-oriented storage -- built for analytics at scale",
    "section": "Database types",
    "detail": [
     {
      "label": "How it works",
      "type": "text",
      "html": "Traditional databases store each row together on disk. Columnar databases store each column together. This makes scanning a single column across millions of rows extremely fast."
     },
     {
      "label": "Good for",
      "type": "text",
      "html": "Data warehousing, analytics, business intelligence. Queries like \"average revenue across all orders last year\" are much faster than in row-oriented databases."
     },
     {
      "label": "Key idea",
      "type": "text",
      "html": "Optimized for reads across many rows, not for frequent writes to individual rows. Usually used alongside a transactional database, not instead of it."
     }
    ]
   }
  ],
  "concepts": [
   {
    "id": "dbc-schema",
    "term": "Schema",
    "sub": "The structure definition",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Defines the shape of your data -- what tables exist, what columns they have, what types each column accepts. In relational databases the schema is strict and defined upfront. In document databases it can be loose or absent entirely."
     }
    ]
   },
   {
    "id": "dbc-sql",
    "term": "SQL",
    "sub": "Structured Query Language",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "The language used to interact with relational databases. Used to create tables, insert data, and query for results. SQL is a standard -- the same core syntax works across PostgreSQL, MySQL, SQLite with small differences."
     },
     {
      "label": null,
      "type": "code",
      "text": "SELECT name FROM users WHERE id = 42;"
     }
    ]
   },
   {
    "id": "dbc-nosql",
    "term": "NoSQL",
    "sub": "Not Only SQL",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "A broad term for databases that don't use the traditional relational table model. Includes document, key-value, graph, and time-series databases. Not a single thing -- just means \"not a traditional SQL database\". Each type has its own query language or API."
     }
    ]
   },
   {
    "id": "dbc-primary-key",
    "term": "Primary key",
    "sub": "Unique identifier for each row",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Every row in a relational table needs a unique identifier. Usually an auto-incrementing integer (1, 2, 3...) or a UUID. It's how you refer to a specific record unambiguously."
     },
     {
      "label": null,
      "type": "code",
      "text": "id | name    | email\n1  | Anazial | ...\n2  | Enid    | ...\n^-- primary key"
     }
    ]
   },
   {
    "id": "dbc-foreign-key",
    "term": "Foreign key",
    "sub": "A reference to another table",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "How relational databases link tables together. A foreign key in one table points to the primary key in another. This is what makes relational databases relational -- connecting data across tables without duplicating it."
     },
     {
      "label": null,
      "type": "code",
      "text": "orders:\norder_id | user_id | product\n1        | 42      | keyboard\n              ^-- foreign key --> users.id"
     }
    ]
   },
   {
    "id": "dbc-index",
    "term": "Index",
    "sub": "A lookup structure for faster queries",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Without an index, finding a row means scanning the whole table. An index is a separate data structure that lets the database jump directly to matching rows. Like the index at the back of a book. Speeds up reads but slows writes slightly."
     }
    ]
   },
   {
    "id": "dbc-crud",
    "term": "CRUD",
    "sub": "The four basic operations",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Every database interaction is one of four things: Create, Read, Update, Delete. In SQL these map to INSERT, SELECT, UPDATE, DELETE. You'll see CRUD everywhere in software development as shorthand for basic data operations."
     },
     {
      "label": null,
      "type": "code",
      "text": "Create --> INSERT\nRead   --> SELECT\nUpdate --> UPDATE\nDelete --> DELETE"
     }
    ]
   },
   {
    "id": "dbc-transaction",
    "term": "Transaction",
    "sub": "Operations that succeed or fail together",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "A transaction bundles multiple operations so they either all succeed or all fail -- never half-complete. The classic example: transferring money means subtracting from one account and adding to another. If the system crashes in between, you don't want one to happen without the other."
     }
    ]
   },
   {
    "id": "dbc-acid",
    "term": "ACID",
    "sub": "Properties of reliable transactions",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "Atomicity (all or nothing), Consistency (data stays valid), Isolation (transactions don't interfere), Durability (committed data persists). Relational databases are ACID-compliant. Many NoSQL databases trade some ACID properties for speed or scale."
     }
    ]
   },
   {
    "id": "dbc-orm",
    "term": "ORM",
    "sub": "Object Relational Mapper",
    "section": null,
    "detail": [
     {
      "label": null,
      "type": "text",
      "html": "A library that lets you interact with a database using your programming language instead of raw SQL. Instead of writing SELECT * FROM users, you might write User.find(42). Examples: SQLAlchemy (Python), ActiveRecord (Ruby), Prisma (JavaScript)."
     }
    ]
   }
  ],
  "applications": [
   {
    "id": "app-instagram",
    "term": "Instagram",
    "icon": "R",
    "iconClass": "relational",
    "dbtype": "PostgreSQL",
    "tagline": "User accounts, posts, likes, follows",
    "section": "Real world applications",
    "detail": [
     {
      "label": "Why relational",
      "type": "text",
      "html": "Instagram's core data is deeply relational -- a user has posts, posts have likes, likes belong to users, users follow users. These relationships are well-defined and consistent. PostgreSQL enforces that structure and handles complex queries across those relationships efficiently."
     },
     {
      "label": "The tradeoff",
      "type": "text",
      "html": "As Instagram scaled to billions of users they layered other databases on top (Cassandra for feeds, Memcached for caching) -- but PostgreSQL remains the source of truth for structured user data."
     }
    ]
   },
   {
    "id": "app-airbnb",
    "term": "Airbnb",
    "icon": "D",
    "iconClass": "document",
    "dbtype": "MongoDB (listings)",
    "tagline": "Property listings with highly variable attributes",
    "section": "Real world applications",
    "detail": [
     {
      "label": "Why document",
      "type": "text",
      "html": "Every Airbnb listing is different. A treehouse has different attributes than a city apartment -- different amenities, different room types, different house rules. A rigid relational schema would require hundreds of nullable columns or complex joins. A document store lets each listing carry exactly the fields it needs."
     },
     {
      "label": "The tradeoff",
      "type": "text",
      "html": "Bookings and payments -- which are strictly structured and transactional -- use relational databases. The document store is specifically for the flexible listing data."
     }
    ]
   },
   {
    "id": "app-twitter-x",
    "term": "Twitter / X",
    "icon": "K",
    "iconClass": "keyvalue",
    "dbtype": "Redis (caching)",
    "tagline": "Timeline caching, session storage, rate limiting",
    "section": "Real world applications",
    "detail": [
     {
      "label": "Why key-value",
      "type": "text",
      "html": "When millions of users load their timeline simultaneously, you can't query the database fresh every time -- it would collapse. Redis stores pre-computed timelines in memory keyed by user ID. A timeline request becomes a single key lookup taking microseconds instead of a complex database query taking seconds."
     },
     {
      "label": "The tradeoff",
      "type": "text",
      "html": "Redis is not the source of truth -- it's a cache. The real data lives in a relational database. If Redis goes down, the data isn't lost -- just slow until the cache rebuilds."
     }
    ]
   },
   {
    "id": "app-linkedin",
    "term": "LinkedIn",
    "icon": "G",
    "iconClass": "graph",
    "dbtype": "Neo4j / custom graph",
    "tagline": "\"People you may know\", connection degrees",
    "section": "Real world applications",
    "detail": [
     {
      "label": "Why graph",
      "type": "text",
      "html": "LinkedIn's entire value proposition is the professional network -- who knows who, through how many degrees. \"You and this person share 12 connections\" requires traversing a web of relationships. In a relational database this would require many expensive joins. A graph database is purpose-built to traverse exactly this kind of connected data."
     },
     {
      "label": "The tradeoff",
      "type": "text",
      "html": "Graph databases are specialized. LinkedIn still uses relational databases for profiles, messages, and jobs -- the graph layer is specifically for relationship traversal and recommendations."
     }
    ]
   },
   {
    "id": "app-cloudflare",
    "term": "Cloudflare",
    "icon": "T",
    "iconClass": "timeseries",
    "dbtype": "InfluxDB / Prometheus",
    "tagline": "Network traffic metrics, request rates, latency",
    "section": "Real world applications",
    "detail": [
     {
      "label": "Why time-series",
      "type": "text",
      "html": "Cloudflare processes trillions of requests and needs to track metrics -- requests per second, error rates, latency -- continuously across thousands of servers. This data is always in time order and always being queried by time range (\"show me error rates for the last hour\"). A time-series database is optimized exactly for this write-heavy, time-ordered workload."
     },
     {
      "label": "The tradeoff",
      "type": "text",
      "html": "Time-series databases typically auto-expire old data (you don't need millisecond metrics from 3 years ago). They're append-only -- you don't update or delete individual records."
     }
    ]
   },
   {
    "id": "app-spotify",
    "term": "Spotify",
    "icon": "C",
    "iconClass": "columnar",
    "dbtype": "BigQuery / Cassandra",
    "tagline": "Listening history analytics, recommendation engine",
    "section": "Real world applications",
    "detail": [
     {
      "label": "Why columnar",
      "type": "text",
      "html": "Spotify needs to analyze billions of listening events to power Discover Weekly and Wrapped. Queries like \"find all users who listened to jazz on Friday evenings in the last 6 months\" scan one column across billions of rows. A columnar store does this orders of magnitude faster than a row-oriented database because it only reads the columns it needs."
     },
     {
      "label": "The tradeoff",
      "type": "text",
      "html": "Columnar databases are read-optimized, not write-optimized. Spotify uses separate operational databases for things that need fast individual writes (play events, playlists) and the columnar store for analytics."
     }
    ]
   },
   {
    "id": "app-relational-sql",
    "term": "Relational / SQL",
    "icon": "R",
    "iconClass": "relational",
    "dbtype": "structured, consistent",
    "tagline": "PostgreSQL, MySQL, SQLite, MariaDB, Oracle, SQL Server",
    "section": "Brand name directory",
    "detail": [
     {
      "label": "PostgreSQL",
      "type": "text",
      "html": "Open source, full-featured, widely used in production. The go-to choice for most new projects. Often called \"Postgres\"."
     },
     {
      "label": "MySQL",
      "type": "text",
      "html": "Open source, extremely common, powers a huge portion of the web. Used by Facebook, Twitter, YouTube historically."
     },
     {
      "label": "SQLite",
      "type": "text",
      "html": "Lightweight, serverless -- the entire database is a single file. Used in mobile apps, browsers, and local development. Not for multi-user production."
     },
     {
      "label": "MariaDB",
      "type": "text",
      "html": "A fork of MySQL created when Oracle acquired MySQL. Drop-in compatible with MySQL."
     },
     {
      "label": "Oracle / SQL Server",
      "type": "text",
      "html": "Enterprise commercial databases. Common in large corporations and legacy systems."
     }
    ]
   },
   {
    "id": "app-document-stores",
    "term": "Document stores",
    "icon": "D",
    "iconClass": "document",
    "dbtype": "flexible, JSON-like",
    "tagline": "MongoDB, CouchDB, Firestore, DynamoDB (also key-value)",
    "section": "Brand name directory",
    "detail": [
     {
      "label": "MongoDB",
      "type": "text",
      "html": "The most popular document database. Stores BSON (binary JSON). Very common in JavaScript / Node.js stacks."
     },
     {
      "label": "Firestore",
      "type": "text",
      "html": "Google's cloud document database. Very popular for mobile and web apps due to real-time sync capabilities."
     },
     {
      "label": "CouchDB",
      "type": "text",
      "html": "Open source, strong sync capabilities. Less common but used in offline-first applications."
     },
     {
      "label": "DynamoDB",
      "type": "text",
      "html": "Amazon's managed database. Technically a key-value and document store hybrid. Extremely scalable."
     }
    ]
   },
   {
    "id": "app-key-value-stores",
    "term": "Key-value stores",
    "icon": "K",
    "iconClass": "keyvalue",
    "dbtype": "fast, simple lookups",
    "tagline": "Redis, Memcached, DynamoDB, etcd",
    "section": "Brand name directory",
    "detail": [
     {
      "label": "Redis",
      "type": "text",
      "html": "By far the most popular. In-memory, extremely fast. Supports more than just key-value -- also lists, sets, sorted sets. Used for caching, queues, pub/sub, and rate limiting."
     },
     {
      "label": "Memcached",
      "type": "text",
      "html": "Simpler and older than Redis. Pure caching, nothing else. Still used at scale (Facebook uses it heavily) but Redis has largely superseded it for new projects."
     },
     {
      "label": "etcd",
      "type": "text",
      "html": "Distributed key-value store used for configuration and service discovery. The backbone of Kubernetes."
     }
    ]
   },
   {
    "id": "app-graph-databases",
    "term": "Graph databases",
    "icon": "G",
    "iconClass": "graph",
    "dbtype": "relationships, networks",
    "tagline": "Neo4j, Amazon Neptune, ArangoDB, TigerGraph",
    "section": "Brand name directory",
    "detail": [
     {
      "label": "Neo4j",
      "type": "text",
      "html": "The most widely used graph database. Uses its own query language called Cypher. Strong community and tooling."
     },
     {
      "label": "Amazon Neptune",
      "type": "text",
      "html": "AWS's managed graph database. Supports both property graphs and RDF (knowledge graphs)."
     },
     {
      "label": "ArangoDB",
      "type": "text",
      "html": "Multi-model database -- handles documents, key-value, and graphs in one system."
     }
    ]
   },
   {
    "id": "app-time-series-databases",
    "term": "Time-series databases",
    "icon": "T",
    "iconClass": "timeseries",
    "dbtype": "metrics, events, monitoring",
    "tagline": "InfluxDB, Prometheus, TimescaleDB, Graphite",
    "section": "Brand name directory",
    "detail": [
     {
      "label": "InfluxDB",
      "type": "text",
      "html": "Purpose-built time-series database. Very common for infrastructure monitoring and IoT data."
     },
     {
      "label": "Prometheus",
      "type": "text",
      "html": "Open source monitoring and alerting. Stores metrics as time-series. The standard in cloud-native / Kubernetes environments."
     },
     {
      "label": "TimescaleDB",
      "type": "text",
      "html": "Built on top of PostgreSQL -- adds time-series capabilities to a relational database. Good if you want SQL familiarity with time-series performance."
     }
    ]
   },
   {
    "id": "app-columnar-analytics",
    "term": "Columnar / analytics",
    "icon": "C",
    "iconClass": "columnar",
    "dbtype": "warehousing, big data",
    "tagline": "BigQuery, Redshift, Snowflake, Cassandra, ClickHouse",
    "section": "Brand name directory",
    "detail": [
     {
      "label": "BigQuery",
      "type": "text",
      "html": "Google's fully managed data warehouse. Serverless -- you just run queries and pay per data scanned. Very popular for analytics."
     },
     {
      "label": "Redshift",
      "type": "text",
      "html": "Amazon's data warehouse. Columnar storage, integrates tightly with the AWS ecosystem."
     },
     {
      "label": "Snowflake",
      "type": "text",
      "html": "Cloud-native data warehouse that separates storage and compute. Very popular in enterprise analytics."
     },
     {
      "label": "Cassandra",
      "type": "text",
      "html": "Apache's distributed database. Handles massive write volumes across many servers. Used by Netflix, Apple, and Instagram for high-scale operational data."
     },
     {
      "label": "ClickHouse",
      "type": "text",
      "html": "Open source columnar database known for extremely fast analytical queries. Growing quickly in popularity."
     }
    ]
   }
  ],
  "queries": []
 },
 "learningPath": [
  {
   "title": "Core -- SQL as a mental model",
   "keywords": [
    "sql basics",
    "start here",
    "learning path"
   ],
   "id": "lp-core-sql-as-a-mental-model"
  },
  {
   "title": "Middle ring -- database categories",
   "keywords": [
    "categories",
    "types of databases"
   ],
   "id": "lp-middle-ring-database-categories"
  },
  {
   "title": "Outer ring -- decision making",
   "keywords": [
    "choose a database",
    "decision"
   ],
   "id": "lp-outer-ring-decision-making"
  },
  {
   "title": "Resource hub",
   "keywords": [
    "resources",
    "links",
    "tutorials"
   ],
   "id": "lp-resource-hub"
  },
  {
   "title": "SQL concepts & vocabulary",
   "keywords": [
    "select",
    "join",
    "vocabulary"
   ],
   "id": "lp-sql-concepts-vocabulary"
  },
  {
   "title": "1. Relational -- PostgreSQL",
   "keywords": [
    "postgres",
    "relational path"
   ],
   "id": "lp-1-relational-postgresql"
  },
  {
   "title": "2. Vector databases",
   "keywords": [
    "embeddings",
    "similarity",
    "ai search"
   ],
   "id": "lp-2-vector-databases"
  },
  {
   "title": "3. Document -- MongoDB",
   "keywords": [
    "mongo",
    "json documents"
   ],
   "id": "lp-3-document-mongodb"
  },
  {
   "title": "4. Key-value -- Redis",
   "keywords": [
    "redis",
    "cache"
   ],
   "id": "lp-4-key-value-redis"
  },
  {
   "title": "5. Graph -- Neo4j",
   "keywords": [
    "graph",
    "relationships",
    "neo4j"
   ],
   "id": "lp-5-graph-neo4j"
  },
  {
   "title": "Evaluating recommendations",
   "keywords": [
    "evaluate",
    "compare",
    "recommendations"
   ],
   "id": "lp-evaluating-recommendations"
  }
 ]
};
