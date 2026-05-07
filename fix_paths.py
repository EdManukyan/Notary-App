import os
import glob

features_dir = "/Users/edikmanukyan/.gemini/antigravity/scratch/notary-app/src/features"

for root, dirs, files in os.walk(features_dir):
    for file in files:
        if file.endswith(".tsx"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            # Fix Nav import
            content = content.replace("import Nav from '../components/Nav';", "import Nav from '../../components/Nav';")
            
            with open(filepath, 'w') as f:
                f.write(content)
                
# Also we'll remove 'import React from 'react';' or 'import React, ' from files that just have it unused.
# But it's easier to just change the tsconfig to not strictly check unused variables or just fix it.
