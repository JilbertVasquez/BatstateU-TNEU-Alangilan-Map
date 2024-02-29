import os
from pdf2image import convert_from_path

def pdf_to_images(pdf_path, output_folder):
    images = convert_from_path(pdf_path)
    pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
    for i, image in enumerate(images):
        image_path = f"{output_folder}/{pdf_name}_page_{i + 1}.jpg"  # Change jpg to any other format you prefer
        image.save(image_path, 'JPEG')  # Change JPEG to any other format you prefer

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.realpath(__file__))
    for file in os.listdir(script_dir):
        if file.endswith(".pdf"):
            pdf_path = os.path.join(script_dir, file)
            output_folder = os.path.join(script_dir, "output_images")
            if not os.path.exists(output_folder):
                os.makedirs(output_folder)
            pdf_to_images(pdf_path, output_folder)
            print(f"{pdf_path} converted to images successfully!")
