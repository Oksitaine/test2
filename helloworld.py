class Hello():
    def __init__(self, name : str):
        self.name = "Hello, World!"

    def say_hello(self):
        print(f"Hello {self.name}, i'm a class")

hello = Hello("World")
hello.say_hello()