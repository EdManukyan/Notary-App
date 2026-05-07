from pypdf import PdfReader

reader = PdfReader("notary-agent-testing-guide.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

with open("testing-guide-text.txt", "w") as f:
    f.write(text)
