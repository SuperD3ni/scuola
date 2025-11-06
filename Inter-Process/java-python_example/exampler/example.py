import os
import sys
import subprocess

java_path = './example/src'

compile = ['javac', '-d', '../bin', 'App.java']

compile_process = subprocess.run(
    compile,
    cwd=java_path,
    capture_output=True,
    text=True
)

if compile_process.returncode != 0:
    print("Failed to compile Java code.")
    print("Check the Java code for errors.")
    sys.exit()

class_path = './example/bin'

execution = ['java', 'App', '123']

result = subprocess.run(
    execution,
    cwd=class_path,
    capture_output=True,
    text=True
)

print(result.stdout)

if result.stderr:
    print(f"errors: {result.stderr}")