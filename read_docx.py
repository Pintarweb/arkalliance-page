import zipfile
import xml.etree.ElementTree as ET

def get_docx_text(path):
    z = zipfile.ZipFile(path)
    xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = []
    for p in tree.findall('.//w:p', ns):
        texts = [node.text for node in p.findall('.//w:t', ns) if node.text]
        if texts:
            paragraphs.append("".join(texts))
    return "\n".join(paragraphs)

with open(r'd:\AntiGravity Project\arkalliance_page\extracted_page_builder.md', 'w', encoding='utf-8') as f:
    f.write(get_docx_text(r'd:\AntiGravity Project\arkalliance_page\Page_Builder.md'))
