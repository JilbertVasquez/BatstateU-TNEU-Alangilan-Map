import os

def get_files_and_extensions(directory):
    files_and_extensions = []
    for filename in os.listdir(directory):
        # Join directory path and file name to get absolute path
        filepath = os.path.join(directory, filename)
        # Check if it's a file
        if os.path.isfile(filepath):
            # Split file name and extension
            name, extension = os.path.splitext(filename)
            files_and_extensions.append((name, extension))
    return files_and_extensions

if __name__ == "__main__":
    # Get the directory where the Python script is saved
    script_directory = os.path.dirname(os.path.realpath(__file__))
    files_and_extensions = get_files_and_extensions(script_directory)
    # print("Files and their extensions:")
    for name, extension in files_and_extensions:
        print(name+extension)
    # with open('files_and_extensions.txt', 'w') as file:
    #     file.write("Files and their extensions:\n")
    #     for name, extension in files_and_extensions:
    #         file.write(name+extension+"\n")
