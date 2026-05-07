import os

src_dir = "/Users/edikmanukyan/.gemini/antigravity/scratch/notary-app/src"

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            content = content.replace("import React from 'react';\n", "")
            content = content.replace("import React, { useEffect }", "import { useEffect }")
            
            with open(filepath, 'w') as f:
                f.write(content)
