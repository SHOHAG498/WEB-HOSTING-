from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

project_dir = Path(__file__).resolve().parent
zip_path = project_dir.parent / "website.zip"

with ZipFile(zip_path, "w", ZIP_DEFLATED) as archive:
    for path in project_dir.rglob("*"):
        if path.is_file() and path != zip_path:
            archive.write(path, path.relative_to(project_dir.parent))

print(f"Created: {zip_path}")
