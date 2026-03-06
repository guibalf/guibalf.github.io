import os
import re

html_files_src = [
    "competences.html", "contact.html", "projets.html", 
    "projet1.html", "projet2.html", "projet3.html", "projet4.html", "projet5.html"
]

# Update index.html
with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace('assets/css/', 'src/css/')
content = content.replace('assets/js/', 'src/js/')
content = content.replace('assets/img/', 'ressources/img/')
content = content.replace('assets/resources/', 'ressources/resources/')

for page in html_files_src:
    content = content.replace(f'href="{page}"', f'href="src/{page}"')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(content)

# Update HTML files in src directory
for file in html_files_src:
    path = os.path.join("src", file)
    if not os.path.exists(path):
        continue
    
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
        
    content = content.replace('assets/css/', 'css/')
    content = content.replace('assets/js/', 'js/')
    content = content.replace('assets/img/', '../ressources/img/')
    content = content.replace('assets/resources/', '../ressources/resources/')
    content = content.replace('href="index.html"', 'href="../index.html"')
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

print("Links updated successfully.")
